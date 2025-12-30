import type { TagProps } from 'antd';

export type AntTagVariant = NonNullable<TagProps['variant']>;
export const ANT_TAG_VARIANT: readonly AntTagVariant[] = [
    "outlined", "solid", "filled"
] as const;


