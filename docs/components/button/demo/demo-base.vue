<template>
    <div>
        <et-button>按钮</et-button>
        <et-button type="primary">Primary</et-button>
        <et-button type="success" plain>Success</et-button>
        <et-button type="info" round>Info</et-button>
        <et-button type="warning" circle>Warning</et-button>
        <et-button type="danger" disabled>Danger</et-button>
        <et-button type="error" disabled>Error</et-button>
        <et-button size="large">按钮</et-button>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.et-button + .et-button {
    margin-left: 10px;
}
</style>
