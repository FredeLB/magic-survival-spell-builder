import type { ButtonProps } from 'antd';

export type AntButtonColor = NonNullable<ButtonProps['color']>;
export const ANT_BUTTON_COLORS: readonly AntButtonColor[] = [
    "default", "primary", "danger", "blue", "purple", "cyan", "green",
    "magenta", "pink", "red", "orange", "yellow", "volcano",
    "geekblue", "lime", "gold"
] as const;

export type AntButtonVariant = NonNullable<ButtonProps['variant']>;
export const ANT_BUTTON_VARIANT: readonly AntButtonVariant[] = [
    "link", "text", "outlined", "dashed", "solid", "filled"
] as const;


