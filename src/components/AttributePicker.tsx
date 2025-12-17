import { useRef } from "react";

import type { DrawerTriggerRef } from "_types";
import type { AntButtonVariant, SpellAttribute } from "_enums";


import { Card, Button, Flex } from "antd";
import { DrawerTrigger } from "_components";

import { generateUniqueKey, getUIColorByCustomType } from "_utils";

import { CUSTOM_TYPE } from "_enums";

interface Props {
    label: string;
    title: string;
    variant?: AntButtonVariant;
    attributes: SpellAttribute[];
    onSelect?: (attribute: SpellAttribute) => void;
}

function AttributePicker(props: Props) {
    const { label, title, variant, attributes, onSelect } = props;

    const drawerRef = useRef<DrawerTriggerRef>(null);

    return (
        <DrawerTrigger
            ref={drawerRef} 
            title={title}
            triggerBtnLabel={label}
            triggerBtnColor={getUIColorByCustomType(CUSTOM_TYPE.Attribute)}
            triggerBtnVariant={variant}
        >
            <Flex gap="small" wrap>
                {attributes.map((attribute: SpellAttribute) =>
                    onSelect != null ? (
                        <Button
                            key={generateUniqueKey()}
                            color={getUIColorByCustomType(
                                CUSTOM_TYPE.Attribute
                            )}
                            variant="outlined"
                            size="middle"
                            onClick={() => {
                                drawerRef.current?.close();
                                onSelect(attribute);
                            }}
                        >
                            {attribute}
                        </Button>
                    ) : (
                        <Card
                            key={generateUniqueKey()}
                            size="small"
                            title={attribute}
                            style={{ width: "100%" }}
                            // extra={<a href="#">More</a>}
                        >
                            
                        </Card>
                    )
                )}
            </Flex>
        </DrawerTrigger>
    );
}

export { AttributePicker };
