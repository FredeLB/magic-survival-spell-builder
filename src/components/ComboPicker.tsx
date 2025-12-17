import { useRef } from "react";

import type { Combo, DrawerTriggerRef } from "_types";
import type { AntButtonVariant } from "_enums";


import { Card, Button, Flex } from "antd";
import { DrawerTrigger } from "_components";

import { generateUniqueKey, getUIColorByCustomType } from "_utils";

import { CUSTOM_TYPE } from "_enums";

interface Props {
    label: string;
    title: string;
    variant?: AntButtonVariant;
    combos: Combo[];
    onSelect?: (selection: Combo) => void;
}

function ComboPicker(props: Props) {
    const { label, title, variant, combos, onSelect } = props;

    const drawerRef = useRef<DrawerTriggerRef>(null);

    return (
        <DrawerTrigger
            ref={drawerRef} 
            title={title}
            triggerBtnLabel={label}
            triggerBtnColor={getUIColorByCustomType(CUSTOM_TYPE.Combo)}
            triggerBtnVariant={variant}
        >
            <Flex gap="small" wrap>
                {combos.map((combo: Combo) =>
                    onSelect != null ? (
                        <Button
                            key={generateUniqueKey()}
                            color={getUIColorByCustomType(
                                CUSTOM_TYPE.Combo
                            )}
                            variant={combo.active ? "solid" : "outlined"}
                            size="middle"
                            onClick={() => {
                                drawerRef.current?.close();
                                onSelect(combo);
                            }}
                        >
                            {combo.name}
                        </Button>
                    ) : (
                        <Card
                            key={generateUniqueKey()}
                            size="small"
                            title={combo.name}
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

export { ComboPicker };
