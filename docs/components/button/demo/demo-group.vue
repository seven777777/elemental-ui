<template>
    <div>
        <et-button-group type="success" size="large">
            <et-button>按钮1</et-button>
            <et-button>按钮2</et-button>
        </et-button-group>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.et-button + .et-button {
    margin-left: 10px;
}
</style>
