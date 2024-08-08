<template>
    <div :class="bem.b()">
        <i :class="bem.be('box', 'inner')">123</i>
    </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@elemental-ui/hooks';
const bem = useNamespace('icon');
</script>
p
