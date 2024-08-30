import type { ExtractPropTypes, PropType } from 'vue';
import type Button from './button.vue';
import { Loading } from '@element-plus/icons-vue';

export const buttonEmits = {
    click: (evt: MouseEvent) => evt instanceof MouseEvent,
};

export type ButtonEmits = typeof buttonEmits;

// 使用type定义按钮样式
export type ButtonType =
    | ''
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'info'
    | 'danger'
    | 'text';

// type原始类型
export type ButtonNativeType = 'button' | 'submit' | 'reset';

// size组件大小
export type ButtonSize = '' | 'default' | 'small' | 'large';

// 定义props
export const buttonProps = {
    size: String as PropType<ButtonSize>,
    type: {
        type: String as PropType<ButtonType>,
    },
    nativeType: {
        type: String as PropType<ButtonNativeType>,
        default: 'button',
    },
    disabled: Boolean,
    autofocus: Boolean,
    round: Boolean,
    plain: Boolean,
    circle: Boolean,
    icon: {
        type: [Object, String] as PropType<object | string>,
        default: '',
    },
    loading: Boolean,
    loadingIcon: {
        type: [Object, String] as PropType<object | string>,
        default: () => Loading,
    },
} as const;

// Props类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

// Button组件实例类型
export type ButtonInstance = InstanceType<typeof Button>;
