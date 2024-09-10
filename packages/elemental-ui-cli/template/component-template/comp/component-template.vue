<template>
    <h1>demo-component</h1>
    <slot></slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: '{{component-name}}',
    props: {},
    setup: function (props) {
        return {};
    },
});
</script>

<style lang="scss" scoped></style>
