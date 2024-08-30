<template>
    <button
        ref="_ref"
        :class="[
            ns.b(),
            ns.m(_type),
            ns.m(_size),
            ns.is('disabled', disabled),
            ns.is('plain', plain),
            ns.is('round', round),
            ns.is('circle', circle),
        ]"
        :disabled="disabled"
        :autofocus="autofocus"
        :type="nativeType"
        @click="handleClick"
    >
        <template v-if="loading">
            <slot v-if="$slots.loading" name="loading" />
            <et-icon v-else :class="ns.is('loading')"
                ><component :is="loadingIcon"
            /></et-icon>
        </template>
        <et-icon v-else-if="icon || $slots.icon">
            <component :is="icon" v-if="icon" />
            <slot v-else name="icon" />
        </et-icon>
        <slot />
    </button>
</template>

<script setup lang="ts">
import { useNamespace } from '@elemental-ui/hooks';
import { buttonEmits, buttonProps } from './button';
import { computed, inject, ref } from 'vue';
import { buttonGroupContextKey } from '@elemental-ui/tokens';
defineOptions({
    name: 'EtButton',
});

const props = defineProps(buttonProps);
// 使用 inject 取出祖先组件提供的依赖
const buttonGroupContext = inject(buttonGroupContextKey, undefined);

const _size = computed(() => props.size || buttonGroupContext?.size);
const _type = computed(() => props.type || buttonGroupContext?.type || '');

const emit = defineEmits(buttonEmits);

// classname的BEM命名
const ns = useNamespace('button');
// html元素
const _ref = ref<HTMLButtonElement>();

// 点击事件函数
const handleClick = (evt: MouseEvent) => {
    emit('click', evt);
};

// 按钮暴露自己的属性和方法
defineExpose({
    ref: _ref,
});
</script>

<style lang="scss" scoped></style>
