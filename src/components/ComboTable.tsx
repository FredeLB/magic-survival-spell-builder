import { useMemo } from "react";

import type { TableProps } from "antd";
import type { Combo, Spell } from "_types";
import type { SpellAttribute } from "_enums";

import { Badge, Flex, Space, Table, Tag } from "antd";

import {
    generateUniqueKey,
    getComboSpellsAndAttributes,
    getUIColorByCustomType,
} from "_utils";

import { CUSTOM_TYPE } from "_enums";
import { AttributeTag } from "./AttributeTag";

interface Props {
    combos: Combo[];
    spells: Spell[];
}

function ComboTable(props: Props) {
    const { combos, spells } = props;

    // Pre-sort data before passing to table
    const sortedCombos = useMemo(() => {
        return [...combos].sort((a, b) => {
            // Active combos first (true comes before false)
            if (a.active !== b.active) {
                return a.active ? -1 : 1;
            }
            
            // Both have same active status, sort alphabetically by name
            return a.name.localeCompare(b.name);
        });
    }, [combos]);

    const columns: TableProps<Combo>["columns"] = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name.localeCompare(b.name), // Simple alphabetical sort
            render: (_, record: Combo) => {
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
            title: "Spells & Attributes",
            key: "spells",
            render: (_, record: Combo) => {
                return (
                    <Flex gap="middle" orientation="vertical" wrap>
                        {getComboSpellsAndAttributes(record, spells).map(
                            (spellAndAttr: {
                                spell: Spell;
                                attribute: SpellAttribute;
                            }) => (
                                <Space
                                    key={`spell-${record.id}-attr-${spellAndAttr.spell.id}`}
                                >
                                    <Tag
                                        color={getUIColorByCustomType(
                                            CUSTOM_TYPE.Spell
                                        )}
                                        variant={
                                            spellAndAttr.spell.active
                                                ? "solid"
                                                : "outlined"
                                        }
                                        key={`${record.id}-${spellAndAttr.spell.id}`}
                                    >
                                        {spellAndAttr.spell.name}
                                    </Tag>
                                    <AttributeTag 
                                        name={spellAndAttr.attribute} 
                                        variant={
                                            spellAndAttr.spell
                                                .activeAttribute ===
                                            spellAndAttr.attribute
                                                ? "solid"
                                                : "outlined"
                                        }  
                                    />
                                </Space>
                            )
                        )}
                    </Flex>
                );
            },
        },
    ];

    return (
        <Table
            rowKey="id"
            columns={columns}
            dataSource={sortedCombos}
            pagination={false}
            showSorterTooltip={false}
        />
    );
}

export { ComboTable };
