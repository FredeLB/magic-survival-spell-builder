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
    const sortedData = useMemo(() => {
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
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name.localeCompare(b.name), // Simple alphabetical sort
            render: (_, record: Spell) => {
                return (
                    <>
                        <Flex gap="small" wrap>
                            {record.activeAttribute ? (
                                <Tag
                                    key={generateUniqueKey()}
                                    color={getUIColorByCustomType(
                                        CUSTOM_TYPE.Attribute
                                    )}
                                    variant="solid"
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
                        </Flex>
                        <Space>
                            <Badge 
                                key={generateUniqueKey()}
                                status={record.active ? "success" : "default"}
                            />

                            <p>{record.name}</p>
                        </Space>
                    </>
                );
            },
        },
        {
            title: "Family",
            dataIndex: "family",
            key: "family",
            hidden: hideFamilyColumn,
            sorter: (a, b) => a.family.localeCompare(b.family), // Simple alphabetical sort
            render: (_, record: Spell) => {
                return (
                    <Tag
                        color={getUIColorBySpellFamily(record.family)}
                        key={record.family}
                    >
                        {record.family}
                    </Tag>
                );
            },
        },
        {
            title: "Options",
            key: "options",
            render: (_, record: Spell) => {
                return (
                    <SpellPicker
                        title={"Compatible Spells - " + record.name}
                        label="Combine"
                        spells={getCompatibleSpells(record, spells, combos)}
                        // onSelect={(selection) => {
                        //     activateSpell(selection as Spell);
                        // }}
                    />
                );
            },
        },
    ];

    return (
        <Table
            rowKey="id"
            columns={columns}
            dataSource={sortedData}
            pagination={false}
            showSorterTooltip={false}
        />
    );
}

export { SpellTable };
