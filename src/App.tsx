import { useState } from "react";

import { SPELLS } from "constants/_index";

import type { TabsProps } from "antd";

import { Tabs } from "antd";

import { ComboTable } from "components/ComboTable";
import { BuilderAutoComplete } from "components/BuilderAutoComplete";
import { SpellTable } from "components/SpellTable";
import { ActiveSpellTable } from "components/ActiveSpellTable";

function App() {
    // const [count, setCount] = useState(0);
    const [activeSpells] = useState([
        // Initial active spells can be set here
        [
            "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4","d592a809-fcb4-892f-8ae9-6ca54a4bb26b"
        ],
        [
            "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f"
        ]
    ]);

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Spells",
            children: <SpellTable />,
        },
        {
            key: "2",
            label: "Combos",
            children: <ComboTable />,
        },
    ];


    return (
        <>
            <h1>Spell Builder</h1>
            {/* <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div> */}

            <ActiveSpellTable pairs={activeSpells} />
            <BuilderAutoComplete list={SPELLS} />
            <Tabs defaultActiveKey="1" items={items} />
        </>
    );
}

export default App;
