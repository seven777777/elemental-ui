<template>
    <div :class="`${ns.b('group')}`">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@elemental-ui/hooks';
import { buttonGroupProps } from './button-group';
import { buttonGroupContextKey } from '@elemental-ui/tokens';
import { provide, reactive, toRef } from 'vue';

defineOptions({
    name: 'EtButtonGroup',
});

const ns = useNamespace('button');

const props = defineProps(buttonGroupProps);
provide(
    buttonGroupContextKey,
    reactive({
        size: toRef(props, 'size'),
        type: toRef(props, 'type'),
    })
);
</script>

<style lang="scss" scoped></style>
