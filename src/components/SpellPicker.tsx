import { useRef } from "react";

import type { Spell, DrawerTriggerRef, Combo } from "_types";
import type { AntButtonVariant } from "_enums";


import { Button, Card, Col, Flex, Row } from "antd";
import { DrawerTrigger } from "_components";

import { generateUniqueKey, getUIColorByCustomType } from "_utils";

import { CUSTOM_TYPE } from "_enums";

interface Props {
    label: string;
    title: string;
    variant?: AntButtonVariant;
    spells: Spell[];
    combos: Combo[];
    onSelect?: (selection: Spell) => void;
    spellToCombine?: Spell | null;
}

function SpellPicker(props: Props) {
    const { label, title, variant, spells, onSelect, spellToCombine } = props;

    const drawerRef = useRef<DrawerTriggerRef>(null);

    // const getCommonCombos = (spells: Spell[]): Combo[] => {
    //     return []
    // };

    return (
        <DrawerTrigger
            ref={drawerRef} 
            title={title}
            triggerBtnLabel={label}
            triggerBtnColor={getUIColorByCustomType(CUSTOM_TYPE.Spell)}
            triggerBtnVariant={variant}
        >
            {spellToCombine != null ? (
                <Row gutter={[8, 8]} wrap={true}>
                    {spells.map((spell: Spell) =>
                        <Col key={generateUniqueKey()} span={12}>     
                            <Card
                                key={generateUniqueKey()}
                                size="small"
                                title={spell.name}
                                // extra={<a href="#">More</a>}
                            >
                                <Flex gap="middle" vertical>
                                    {/* <Flex gap="small" wrap>
                                        {getSpellPotentialAttributes(
                                            spell,
                                            combos
                                        ).map((attribute: SpellAttribute) => (
                                            <AttributeTag
                                                key={generateUniqueKey()}
                                                name={attribute}
                                                variant={attribute === spell.activeAttribute ? "solid" : "outlined"}
                                            />
                                        ))}
                                    </Flex> */}

                                    {onSelect != null ? (
                                        <Button
                                            key={generateUniqueKey()}
                                            color={getUIColorByCustomType(
                                                CUSTOM_TYPE.Spell
                                            )}
                                            variant={spell.active ? "solid" : "outlined"}
                                            size="middle"
                                            disabled={spell.active}
                                            onClick={() => {
                                                drawerRef.current?.close();
                                                onSelect(spell);
                                            }}
                                        >
                                            Activate
                                        </Button>
                                    ) : null }
                                </Flex>
                            </Card>
                        </Col>
                    )}
                </Row>
            ) : (
                <Flex gap={"small"} wrap>
                    {spells.map((spell: Spell) =>
                        onSelect != null ? (
                            <Button
                                key={generateUniqueKey()}
                                color={getUIColorByCustomType(
                                    CUSTOM_TYPE.Spell
                                )}
                                variant={spell.active ? "solid" : "outlined"}
                                size="middle"
                                disabled={spell.active}
                                onClick={() => {
                                    drawerRef.current?.close();
                                    onSelect(spell);
                                }}
                            >
                                {spell.name}
                            </Button>
                        ) : null       
                    )}
                </Flex>
            )}
        </DrawerTrigger>
    );
}

export { SpellPicker };
