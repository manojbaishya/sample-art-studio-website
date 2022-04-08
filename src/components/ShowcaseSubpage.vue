<script setup>
import HeaderBar from '@/components/HeaderBar.vue';
import ContentPanel from '@/components/ContentPanel.vue'
</script>


<template>
    <div class="flex-1">
        <HeaderBar />
        <ContentPanel :text="content" />
    </div>
</template>

<script>

export default {
    data: function () {
        return {

        }
    },
    props: ['content']
}

</script>