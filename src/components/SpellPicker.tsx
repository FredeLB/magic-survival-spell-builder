import { useRef } from "react";

import type { Spell, DrawerTriggerRef } from "_types";
import type { AntButtonVariant } from "_enums";


import { Card, Button, Flex } from "antd";
import { DrawerTrigger } from "_components";

import { generateUniqueKey, getUIColorByCustomType } from "_utils";

import { CUSTOM_TYPE } from "_enums";

interface Props {
    label: string;
    title: string;
    variant?: AntButtonVariant;
    spells: Spell[];
    onSelect?: (selection: Spell) => void;
}

function SpellPicker(props: Props) {
    const { label, title, variant, spells, onSelect } = props;

    const drawerRef = useRef<DrawerTriggerRef>(null);

    return (
        <DrawerTrigger
            ref={drawerRef} 
            title={title}
            triggerBtnLabel={label}
            triggerBtnColor={getUIColorByCustomType(CUSTOM_TYPE.Spell)}
            triggerBtnVariant={variant ?? "solid"}
        >
            <Flex gap="small" wrap>
                {spells.map((spell: Spell) =>
                    onSelect != null ? (
                        <Button
                            key={generateUniqueKey()}
                            color={getUIColorByCustomType(
                                CUSTOM_TYPE.Spell
                            )}
                            variant="solid"
                            onClick={() => {
                                drawerRef.current?.close();
                                onSelect(spell);
                            }}
                        >
                            {spell.name}
                        </Button>
                    ) : (
                        <Card
                            key={generateUniqueKey()}
                            size="small"
                            title={spell.name}
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

export { SpellPicker };
