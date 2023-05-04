<template>
    <div v-if="modalActive" class="modal d-block bg-secondary modal-fade p-2 bg-opacity-50">

        <div class=" modal-dialog modal-dialog-centered modal-sm">
            <div class=" modal-content">
                <div class="modal-body">
                    <slot></slot>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <button @click="modalActive = !modalActive" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                    <button @click="deleteSubmit" type="button" class="btn btn-primary align-content-center">Delete
                        <lord-icon src="https://cdn.lordicon.com/jmkrnisz.json" trigger="loop" delay="1000"
                            colors="primary:#ffffff" style="width:20px;height:20px">
                        </lord-icon>
                    </button>
                </div>

            </div>
        </div>

    </div>
</template>
<script setup>
const props = defineProps(['modalActive', 'deleteSubmit'])
</script>

