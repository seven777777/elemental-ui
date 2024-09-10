<template>
    <div>
        <et-button size="small" ref="buttonRef" :loading="true">
            <template #icon><Edit /></template>按钮
        </et-button>
    </div>
</template>

<script setup lang="ts">
import { Edit } from '@element-plus/icons-vue';
</script>

<style lang="scss" scoped>
.et-button + .et-button {
    margin-left: 10px;
}
</style>
