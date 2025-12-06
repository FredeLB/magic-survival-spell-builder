// import { useState } from "react";
import { SPELLS } from "constants/_index";

import type { TableProps } from "antd";
import type { Spell, SpellPair } from "types/_index";

import { Table } from "antd";

import { SpellDrawer } from "components/SpellDrawer";


interface ActiveSpellTableProps {
    pairs: string[][];
}

function ActiveSpellTable(props: ActiveSpellTableProps) {
    
    const { pairs } = props;

    const columns: TableProps<SpellPair>["columns"] = [
        {
            title: "Spell #1",
            dataIndex: "first",
            key: "first",
            render: (first: Spell) => <div>{first.name}</div>,
        },
        {
            title: "Spell #2",
            dataIndex: "second",
            key: "second",
            render: (spell: Spell) => {
                if(!spell) {
                    return (
                        <SpellDrawer 
                            title="Potential Combos"
                            btnLabel="Choose Spell"
                            spells={SPELLS}
                        />
                    );
                } else {
                    return (
                        <div>{spell.name}</div>
                    );
                }
            },
        },
    ];


    const getSpellPairs: SpellPair[] = pairs?.map((pair: string[]) => {
        return {
            first: SPELLS.find((s) => s.id === pair[0])!, // Fetch Spell object for first
            second: SPELLS.find((s) => s.id === pair[1])!, // Fetch Spell object for second
        };
    });


    return (
        <Table
            rowKey={(record) => record.first.id + (record.second ? record.second.id : "")}
            columns={columns}
            dataSource={getSpellPairs}
            pagination={false}
        />
    );
}

export { ActiveSpellTable };
