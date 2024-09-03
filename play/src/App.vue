<template>
    <div>
        <et-icon color="green" :size="12">Icon</et-icon>
    </div>
    <div>
        <et-button>按钮</et-button>
        <et-button type="primary">Primary</et-button>
        <et-button type="success" plain>Success</et-button>
        <et-button type="info" round>Info</et-button>
        <et-button type="warning" circle>Warning</et-button>
        <et-button type="danger" disabled>Danger</et-button>
        <et-button size="large">按钮</et-button>
        <et-button
            size="small"
            ref="buttonRef"
            @click="handlerClick"
            :loading="true"
        >
            <template #icon><Edit /></template>按钮
        </et-button>
    </div>
    <div>
        <et-button-group type="success" size="large">
            <et-button>按钮1</et-button>
            <et-button>按钮2</et-button>
        </et-button-group>
    </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { Edit } from '@element-plus/icons-vue';

// import EtIcon from '@elemental-ui/components/icon';
// import '@elemental-ui/theme-chalk/src/index.scss';
const handlerClick = (e: Event) => {
    console.log(e);
};

const buttonRef = ref();
nextTick(() => {
    console.log('buttonRef', buttonRef.value.ref);
});
</script>
