<template>
    <i :class="bem.b()" :style="style">
        <slot />
    </i>
</template>

<script setup lang="ts">
import { useNamespace } from '@elemental-ui/hooks';
import { iconProps } from './icon';
import { computed, type CSSProperties } from 'vue';
import { isUndefined, addUnit } from '@elemental-ui/utils';

defineOptions({
    name: 'EtIcon',
});

const bem = useNamespace('icon');
const props = defineProps(iconProps);
const style = computed<CSSProperties>(() => {
    if (!props.size && !props.color) return {};
    return {
        fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
        '--color': props.color, // 通过 CSS 变量方式进行设置 color
    };
});
</script>
