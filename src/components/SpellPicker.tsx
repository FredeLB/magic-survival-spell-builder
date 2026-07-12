import { useRef } from "react";

import type { Spell, DrawerTriggerRef, Combo } from "_types";
import type { AntButtonVariant } from "_enums";


import { Button, Card, Col, Divider, Flex, Row, Space, Typography } from "antd";
import { AttributeTag, ComboTag, DrawerTrigger } from "_components";

import { generateUniqueKey, getUIColorByCustomType } from "_utils";

import { CUSTOM_TYPE } from "_enums";

const { Text } = Typography;

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
    const { label, title, variant, spells, combos, onSelect, spellToCombine } = props;

    const drawerRef = useRef<DrawerTriggerRef>(null);

    const getCommonCombos = (spell: Spell): Combo[] => {
        return combos.filter((combo: Combo) => {
            const comboSpellIds = combo.spells.map((s) => s.id);
            return (
                comboSpellIds.includes(spell.id) &&
                spellToCombine != null &&
                comboSpellIds.includes(spellToCombine.id)
            );
        });
    };

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
                        <Col key={generateUniqueKey()} span={24}>     
                            <Card
                                key={generateUniqueKey()}
                                size="small"
                                title={spell.name}
                                // extra={<a href="#">More</a>}
                            >
                                <Flex gap="middle" vertical>
                                    {getCommonCombos(spell).map((combo: Combo) =>
                                        <Flex key={generateUniqueKey()} gap="small" vertical>
                                            <Space key={generateUniqueKey()}>
                                            <Text>Combo: </Text>
                                                <ComboTag 
                                                    key={generateUniqueKey()} 
                                                    name={combo.name} 
                                                    variant={combo.active ? "solid" : "outlined"}    
                                                />
                                            </Space>
                                            <Space key={generateUniqueKey()}>
                                                <Text>Attribute: </Text>
                                                <AttributeTag 
                                                    name={combo.spells.find((c) => c.id == spell.id)?.attribute} 
                                                    variant={spell.activeAttribute === combo.spells.find((c) => c.id == spell.id)?.attribute ? "solid" : "outlined"}
                                                />
                                            </Space>
                                            <Space key={generateUniqueKey()}>
                                                <Text>Attribute ({spellToCombine.name}): </Text>
                                                <AttributeTag 
                                                    name={combo.spells.find((c) => c.id == spellToCombine.id)?.attribute} 
                                                    variant={spellToCombine.activeAttribute === combo.spells.find((c) => c.id == spellToCombine.id)?.attribute ? "solid" : "outlined"}
                                                />
                                            </Space>
                                            <Divider key={generateUniqueKey()} />
                                        </Flex>
                                    )}

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
