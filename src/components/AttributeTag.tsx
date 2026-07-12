import type { AntTagVariant } from "_enums";

import { Tag } from "antd";

import { generateUniqueKey, getUIColorByCustomType } from "_utils";

import { CUSTOM_TYPE } from "_enums";



interface Props {
    name?: string;
    variant?: AntTagVariant;
}

function AttributeTag(props: Props) {
    const { name, variant } = props;

    return (
        <Tag
            key={generateUniqueKey()}
            color={getUIColorByCustomType(
                CUSTOM_TYPE.Attribute
            )}
            variant={variant ?? "solid"}
            style={{
                maxWidth: '140px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                display: 'inline-block',
                verticalAlign: 'middle',
                cursor: 'pointer'
            }}
        >
            {name}
        </Tag>
    );
}

export { AttributeTag };
