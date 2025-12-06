// import { useState } from "react";
import { COMBOS, SPELLS } from "constants/_index";

import type { TableProps, TableColumnsType } from "antd";
import type { Combo, Spell } from "types/_index";

import type { SpellAttribute } from "enums/_index";

import { Table } from "antd";

interface ExpandedComboType {
    spell: Spell;
    attribute: SpellAttribute;
}

function ComboTable() {

    const columns: TableProps<Combo>["columns"] = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name.localeCompare(b.name), // Simple alphabetical sort
            render: (name: string) => <div>{name}</div>,
        },
    ];

    const expandColumns: TableColumnsType<ExpandedComboType> = [
        { 
            title: 'Spell', 
            dataIndex: 'spell', 
            key: 'spell',
            render: (spell: Spell) => <div>{spell.name}</div>,
        },
        { 
            title: 'attribute', 
            dataIndex: 'attribute', 
            key: 'attribute' 
        },
    ];

    const getSpells = (comboSpells: {id: string, attribute: SpellAttribute}[]) => {
        return comboSpells.map((spell: {id: string, attribute: SpellAttribute}) => {
            return {
                spell: SPELLS.find((s) => s.id === spell.id)!,
                attribute: spell.attribute,
            };
        });
    };


    return (
        <Table
            rowKey="name"
            columns={columns}
            dataSource={COMBOS}
            pagination={false}
            expandable={{
                expandedRowRender: (combo: Combo) => {        
                    return (
                        <Table<ExpandedComboType>
                            rowKey={(record) => record.spell.id}
                            columns={expandColumns}
                            dataSource={getSpells(combo.spells)}
                            pagination={false}
                        />
                    )
                },
            }}
        />
    );
}

export { ComboTable };
