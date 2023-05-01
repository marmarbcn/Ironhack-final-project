<template>
    <p @click="completedTask">prueba</p>
    <button @click="deleteSubmit()"> Delete Task </button>

    <button @click="showUpdate = !showUpdate"> Update </button>

    <form @submit.prevent="update" v-show="showUpdate">
        <input type="text" placeholder="Edit your task" class="form-control" v-model="title" minlength="4" required />
        <button>Submit</button>
    </form>
</template>

<script setup>
import { useTaskStore } from '@/stores/tasks'
import { ref } from 'vue'

const taskStore = useTaskStore();
const props = defineProps(['task'])

const showUpdate = ref(false)

const title = ref();
const completed = ref(props.task.is_complete);


const deleteSubmit = async () => {
    await taskStore.deleteTask(props.task)
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