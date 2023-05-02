<template>
    <li class="list-group-item list-group-item-action" :data-completed="task.is_complete">
        <div class="row ">
            <div class="col ">
                <button @click="completedTask" class="btn rounded-circle p-0 d-inline-flex check-btn"><lord-icon
                        src="https://cdn.lordicon.com/jvihlqtw.json" :trigger="task.is_complete ? 'click' : 'hover'"
                        colors="primary:#ee6d66,secondary:#545454" stroke="100" state="hover-2"
                        style="width:20px;height:20px">
                    </lord-icon></button>
            </div>
            <div class="col text-align-center">
                <p class="fs-5 ">{{ task.title }}</p>
                <p class="fw-lighter fs-6">{{ date }}</p>
            </div>
            <div class="col col-auto">
                <button @click="showUpdate = !showUpdate" class="btn p-0"> <lord-icon
                        src="https://cdn.lordicon.com/bxxnzvfm.json" trigger="hover"
                        colors="primary:#3a3347,secondary:#f4a09c,tertiary:#f9c9c0,quaternary:#ebe6ef" state="hover-2"
                        style="width:35px;height:35px">
                    </lord-icon> </button>
                <button @click="deleteSubmit()" class="btn p-0"><lord-icon src="https://cdn.lordicon.com/qjwkduhc.json"
                        trigger="hover" colors="primary:#646e78,secondary:#f4a09c,tertiary:#ebe6ef" state="hover-empty"
                        style="width:30px;height:30px">
                    </lord-icon>
                </button>
            </div>
            <form @submit.prevent="update" v-show="showUpdate">
                <div class="input-group">
                    <input type="text" placeholder="Edit your task" class="form-control" v-model="title" minlength="4"
                        required />
                    <button class="btn btn-primary ">Submit</button>
                </div>
            </form>
        </div>
    </li>
</template>

<script setup>
import { useTaskStore } from '@/stores/tasks'
import { ref } from 'vue'

const taskStore = useTaskStore();
const props = defineProps(['task'])

const showUpdate = ref(false)

const title = ref();
const completed = ref(props.task.is_complete);
const date = ref(props.task.inserted_at.substr(0, 10))
console.log(date.value)

const deleteSubmit = async () => {
    if (confirm('Are you sure you want to delete?')) {
        await taskStore.deleteTask(props.task)
    }

}

const update = async () => {
    await taskStore.updateTask(props.task, title.value)
    title.value = ''
    showUpdate.value = false;
}

const completedTask = async () => {
    await taskStore.completeTask(props.task, !completed.value)
    completed.value = !completed.value
}



</script>

<style scoped>
.check-btn {
    border-color: var(--melon);
}

.check-btn * {
    opacity: 0;
}

[data-completed="true"] .check-btn *,
[data-completed="false"] .check-btn:hover * {
    opacity: 1;
}
</style>