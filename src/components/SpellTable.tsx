// import { useState } from "react";
import { SPELLS } from "constants/_index";

import type { TableProps } from "antd";
import type { Spell } from "types/_index";
import { SPELL_FAMILY, type SpellFamily } from "enums/SpellFamily";

import { Table, Tag } from "antd";
import { getCompatibleSpells } from "utils";

function SpellTable() {
    const columns: TableProps<Spell>["columns"] = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name.localeCompare(b.name), // Simple alphabetical sort
            render: (name: string) => <div>{name}</div>,
        },
        {
            title: "Family",
            dataIndex: "family",
            key: "family",
            sorter: (a, b) => a.family.localeCompare(b.family), // Simple alphabetical sort
            // render: (family: SpellFamily) => <div>{family}</div>,
            render: (family: SpellFamily) => {
                let color;
                switch (family) {
                    case SPELL_FAMILY.LordOfFire:
                        color = "red";
                        break;
                    case SPELL_FAMILY.StormyClouds:
                        color = "cyan";
                        break;
                    case SPELL_FAMILY.NaturesWrath:
                        color = "green";
                        break;
                    case SPELL_FAMILY.EnergyEngineering:
                        color = "blue";
                        break;
                    default:
                        color = "black";
                }
                return (
                    <Tag color={color} key={family}>
                        {family}
                    </Tag>
                );
            },
        },
    ];

    const expandColumns: TableProps<Spell>["columns"] = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => a.name.localeCompare(b.name), // Simple alphabetical sort
            render: (name: string) => <div>{name}</div>,
        },
    ];

    return (
        <Table
            rowKey="name"
            columns={columns}
            dataSource={SPELLS}
            pagination={false}
            expandable={{
                expandedRowRender: (spell: Spell) => {
                    return (
                        <Table<Spell>
                            rowKey={(record) => record.id}
                            columns={expandColumns}
                            dataSource={getCompatibleSpells(spell)}
                            pagination={false}
                        />
                    );
                },
            }}
        />
    );
}

export { SpellTable };
