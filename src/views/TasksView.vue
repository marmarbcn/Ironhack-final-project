<template>
    <div class="card card-max-width">
        <div class="p-5">
            <h4> Welcome back, </h4>
            <h4 class="card-title">My Tasks</h4>
            <div>
                <ul>
                    <li v-for="incompleted in taskStore.incompletedTasks"> {{ incompleted.id }}:{{ incompleted.title }}{{
                        incompleted.is_complete }}
                        <Task :task="incompleted" />
                    </li>
                    <span>Completed</span>
                    <li v-for="completed in taskStore.completedTasks"> {{ completed.id }}:{{ completed.title }}{{
                        completed.is_complete }}
                        <Task :task="completed" />
                    </li>
                </ul>
            </div>
            <form @submit.prevent="addSubmit" class="mb-3">
                <input type="text" placeholder="Add your new task" class="form-control" v-model="title" minlength="4"
                    required />
                <button type="submit" class="btn btn-primary">Add Task</button>
            </form>

        </div>
    </div>


    <RouterLink to="/dashboard">Dashboard</RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useTaskStore } from '@/stores/tasks'
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';

import Task from '@/components/Task.vue'

const taskStore = useTaskStore();
const { tasks } = storeToRefs(taskStore);


const title = ref();


onMounted(async () => {
    await taskStore.fetchTasks()
}
)

const addSubmit = async () => {
    await taskStore.addTask(title.value)
    console.log(title.value)
    title.value = '';
}





</script>