import { useMemo } from "react";

import type { TableProps } from "antd";
import type { Spell, Combo } from "_types";

import { Badge, Flex, Space, Table, Tag } from "antd";
import { SpellPicker } from "_components";

import {
    generateUniqueKey,
    getUIColorByCustomType,
    getUIColorBySpellFamily,
    getCompatibleSpells,
} from "_utils";

import { CUSTOM_TYPE } from "_enums";

interface Props {
    spells: Spell[];
    combos: Combo[];
    hideFamilyColumn: boolean;
}

function SpellTable(props: Props) {
    const { spells, combos, hideFamilyColumn } = props;

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
                    <Space orientation="vertical">
                        <Space>
                            <Badge 
                                key={generateUniqueKey()}
                                status={record.active ? "success" : "default"}
                            />

                            <p>{record.name}</p>
                        </Space>

                        <SpellPicker
                            title={"Compatible Spells - " + record.name}
                            label="Combine"
                            spells={getCompatibleSpells(record, spells, combos)}
                            // onSelect={(selection) => {
                            //     activateSpell(selection as Spell);
                            // }}
                        />
                    </Space>
                );
            },
        },
        {
            title: "Family",
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
                            <Tag
                                key={generateUniqueKey()}
                                color={getUIColorByCustomType(
                                    CUSTOM_TYPE.Attribute
                                )}
                                variant="solid"
                                style={{
                                    maxWidth: '100px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    display: 'inline-block',
                                    verticalAlign: 'middle',
                                    cursor: 'pointer'
                                }}
                            >
                                {record.activeAttribute}
                            </Tag>
                        ) : null}
                        {record.activeCombo ? (
                            <Tag
                                key={generateUniqueKey()}
                                color={getUIColorByCustomType(
                                    CUSTOM_TYPE.Combo
                                )}
                                variant="solid"
                            >
                                {record.activeCombo.name}
                            </Tag>
                        ) : null}
                    </Space>
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
