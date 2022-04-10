<script setup>
import ShowcaseSubpage from "../components/ShowcaseSubpage.vue";

var heading = "Home Page";
var content_text = `
This is the Home Page.`;
</script>

<template>
    <ShowcaseSubpage :title="heading" :content="content_text" />
</template>
