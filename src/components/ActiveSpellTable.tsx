import { useMemo } from "react";

import type { TableProps } from "antd";
import type { Spell, Combo } from "_types";
import type { SpellAttribute } from "_enums";

import { CUSTOM_TYPE } from "_enums";

import { Table, Button, Flex } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { PickerDrawer } from "_components";

import {
    getActiveSpells,
    getSpellPotentialCombos,
    getSpellPotentialAttributes,
    generateUniqueKey,
    getUIColorByCustomType,
} from "_utils";

interface Props {
    spells: Spell[];
    combos: Combo[];
    onComboSelect: (spell: Spell, combo: Combo | null) => void;
    onSpellAttributeSelect: (
        spell: Spell,
        attribute: SpellAttribute | null
    ) => void;
    onSpellDeactivation: (spell: Spell) => void;
}

function ActiveSpellTable(props: Props) {
    const { spells, combos, onComboSelect, onSpellAttributeSelect, onSpellDeactivation } = props;

    // Pre-sort data before passing to table
    const sortedData = useMemo(() => {
        return [...spells].sort((a, b) => {
            const comboNameA = a.activeCombo?.name || "";
            const comboNameB = b.activeCombo?.name || "";

            // Put empty names LAST
            if (comboNameA === "" && comboNameB !== "") return 1;
            if (comboNameB === "" && comboNameA !== "") return -1;

            // Both non-empty or both empty: sort alphabetically
            const comboComparison = comboNameA.localeCompare(comboNameB);
            if (comboComparison !== 0) {
                return comboComparison;
            }

            // Same combo name, sort by spell name
            return a.name.localeCompare(b.name);
        });
    }, [spells]);

    const columns: TableProps<Spell>["columns"] = [
        {
            title: "Spell",
            dataIndex: "name",
            key: "name",
            render: (_, record: Spell) => {
                return (
                    <>
                        <h4>{record.name}</h4>
                    </>
                );
            },
        },

        {
            title: "Options",
            key: "Options",
            render: (_, record: Spell) => {
                return (
                    <Flex gap="small" wrap>
                        {record.activeAttribute != null ? (
                            <Button
                                key={generateUniqueKey()}
                                color={getUIColorByCustomType(
                                    CUSTOM_TYPE.Attribute
                                )}
                                variant="solid"
                                icon={<CloseOutlined />}
                                iconPlacement={"end"}
                                onClick={() =>
                                    onSpellAttributeSelect(record, null)
                                }
                            >
                                {record.activeAttribute}
                            </Button>
                        ) : (
                            <PickerDrawer
                                title={"Attributes - " + record.name}
                                btnLabel="Attribute"
                                btnColor={getUIColorByCustomType(
                                    CUSTOM_TYPE.Attribute
                                )}
                                items={getSpellPotentialAttributes(record, combos)}
                                onSelect={(selection) => {
                                    onSpellAttributeSelect(
                                        record,
                                        selection as SpellAttribute
                                    );
                                }}
                            />
                        )}
                        {record.activeCombo != null ? (
                            <Button
                                key={generateUniqueKey()}
                                color={getUIColorByCustomType(
                                    CUSTOM_TYPE.Combo
                                )}
                                variant="solid"
                                icon={<CloseOutlined />}
                                iconPlacement={"end"}
                                onClick={() => onComboSelect(record, null)}
                            >
                                {record.activeCombo.name}
                            </Button>
                        ) : (
                            <PickerDrawer
                                title={"Combos - " + record.name}
                                btnLabel="Combo"
                                btnColor={getUIColorByCustomType(
                                    CUSTOM_TYPE.Combo
                                )}
                                items={getSpellPotentialCombos(record, combos)}
                                onSelect={(selection) => {
                                    onComboSelect(record, selection as Combo);
                                }}
                            />
                        )}

                        <Button
                            key={generateUniqueKey()}
                            color="danger"
                            variant="solid"
                            icon={<CloseOutlined />}
                            onClick={() => onSpellDeactivation(record)}
                        >
                        </Button>
                    </Flex>
                );
            },
        },
    ];

    return (
        <>
            <Table
                rowKey="id"
                columns={columns}
                dataSource={getActiveSpells(sortedData)}
                pagination={false}
            />
        </>
    );
}

export { ActiveSpellTable };
