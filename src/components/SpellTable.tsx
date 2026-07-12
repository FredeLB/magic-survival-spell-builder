import { useMemo } from "react";

import type { TableProps } from "antd";
import type { Spell, Combo } from "_types";

import { Badge, Button, Flex, Space, Table } from "antd";
import { AttributeTag, ComboTag, SpellPicker } from "_components";

import { CUSTOM_TYPE } from "_enums";

import {
    generateUniqueKey,
    getUIColorBySpellFamily,
    getUIColorByCustomType,
    getCompatibleSpells,
    getSpellPotentialCombos,
} from "_utils";

interface Props {
    spells: Spell[];
    combos: Combo[];
    hideFamilyColumn: boolean;
    onActivateSpell: (spell: Spell, activate?: boolean) => void;
}

function SpellTable(props: Props) {
    const { spells, combos, hideFamilyColumn, onActivateSpell } = props;

    // Pre-sort data before passing to table
    const sortedTableData = useMemo(() => {
        return [...spells].sort((a, b) => {
            // Active combos first (true comes before false)
            if (a.active !== b.active) {
                return a.active ? -1 : 1;
            }

            // Both have same active status, sort alphabetically by name
            return a.name.localeCompare(b.name);
        });
    }, [spells]);

    const columns: TableProps<Spell>["columns"] = [
        {
            title: "Spell",
            dataIndex: "name",
            key: "spell",
            sorter: (a, b) => a.name.localeCompare(b.name), // Simple alphabetical sort
            render: (_, record: Spell) => {
                return (
                    <Space>
                        <Badge
                            key={generateUniqueKey()}
                            status={record.active ? "success" : "default"}
                        />

                        <p>{record.name}</p>
                    </Space>
                );
            },
        },
        {
            title: "Fam.",
            dataIndex: "family",
            key: "family",
            width: 30,
            hidden: hideFamilyColumn,
            sorter: (a, b) => a.family.localeCompare(b.family), // Simple alphabetical sort
            render: (_, record: Spell) => {
                return (
                    <Flex justify="center">
                        <Badge
                            key={generateUniqueKey()}
                            color={getUIColorBySpellFamily(record.family)}
                            size="default"
                        />
                    </Flex>
                );
            },
        },
        {
            title: "Options",
            key: "options",
            render: (_, record: Spell) => {
                return (
                    <Space orientation="vertical">
                        {record.activeAttribute ? (
                            <AttributeTag name={record.activeAttribute} />
                        ) : null}
                        {record.activeCombo ? (
                            <ComboTag name={record.activeCombo.name} />
                        ) : null}
                    </Space>
                );
            },
        },
        {
            title: "Actions",
            key: "actions",
            render: (_, record: Spell) => {
                return (
                    <Flex gap="small" wrap>   
                        {!record.active ? 
                            <Button
                                color={getUIColorByCustomType(
                                    CUSTOM_TYPE.Spell
                                )}
                                variant="outlined"
                                size="middle"
                                onClick={() => {
                                    onActivateSpell(record);
                                }}
                            >
                                Activate
                            </Button>   
                        : null                        
                        }
                        <SpellPicker
                            title={"Compatible Spells - " + record.name}
                            label="Combine"
                            spells={getCompatibleSpells(record, spells, combos)}
                            combos={getSpellPotentialCombos(record, combos)}
                            onSelect={(selection: Spell) => {
                                onActivateSpell(selection);
                            }}
                            spellToCombine={record}
                        />
                    </Flex>

                );
            },
        },
    ];

    return (
        <Table
            rowKey="id"
            columns={columns}
            dataSource={sortedTableData}
            pagination={false}
            showSorterTooltip={false}
        />
    );
}

export { SpellTable };
