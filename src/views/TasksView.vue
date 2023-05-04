<template>
    <div class="card card-max-width">

        <div class="p-5">
            <h4 class="card-title"> Welcome! </h4>
            <form @submit.prevent="addSubmit" class="mb-3">
                <div class="input-group">
                    <input type="text" placeholder="Add your new task" class="form-control" v-model="title" minlength="4"
                        required />
                    <button type="submit" class="btn btn-primary">Add Task</button>
                </div>
            </form>

            <div class="overflow-auto">
                <h5> Tasks To Do </h5>
                <ul class="list-group">
                    <TaskComponent :task="incompleted" v-for="incompleted in taskStore.incompletedTasks" />

                </ul>
            </div>
            <div>
                <h5>Tasks completed</h5>
                <ul class="list-group">

                    <TaskComponent :task="completed" v-for="completed in taskStore.completedTasks" />

                </ul>
            </div>


        </div>
    </div>
</template>

<script setup>

import { useTaskStore } from '@/stores/tasks'
import { onMounted, ref } from 'vue';

import TaskComponent from '../components/TaskComponent.vue';

const taskStore = useTaskStore();


const title = ref();


onMounted(async () => {
    await taskStore.fetchTasks()
}
)

const addSubmit = async () => {
    await taskStore.addTask(title.value)
    title.value = '';
}

</script>