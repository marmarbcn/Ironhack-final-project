<template>
    <div class="card card-max-width">

        <div class="p-5">
            <h4> Welcome back, </h4>
            <h4 class="card-title">My Tasks</h4>
            <form @submit.prevent="addSubmit" class="mb-3">
                <input type="text" placeholder="Add your new task" class="form-control" v-model="title" minlength="4"
                    required />
                <button type="submit" class="btn btn-primary">Add Task</button>
            </form>
            <div>
                <ul class="list-group">
                    <Task :task="incompleted" v-for="incompleted in taskStore.incompletedTasks" />

                </ul>
            </div>
            <div>
                <span>Completed</span>
                <ul class="list-group">

                    <Task :task="completed" v-for="completed in taskStore.completedTasks" />

                </ul>
            </div>


        </div>
    </div>
</template>

<script setup>

import { useTaskStore } from '@/stores/tasks'
import { onMounted, ref } from 'vue';

import Task from '@/components/Task.vue'

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