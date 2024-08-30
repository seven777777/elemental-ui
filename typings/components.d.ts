import type Icon from '@elemental-ui/components/icon';
// For this project development
import '@vue/runtime-core';

declare module '@vue/runtime-core' {
    // GlobalComponents for Volar
    export interface GlobalComponents {
        EtIcon: typeof Icon;
    }
}

export {};
