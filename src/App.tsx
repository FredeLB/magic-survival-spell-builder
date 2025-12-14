import { useState } from "react";

import type { TabsProps } from "antd";
import type { Combo, Spell } from "_types";
import type { SpellAttribute } from "enums/SpellAttribute";

import { Flex, Space, Switch, Tabs } from "antd";
import {
    ActiveSpellTable,
    ComboTable,
    SpellPicker,
    SpellTable,
} from "_components";

import { getInactiveSpells, getComboSpellsAndAttributes, getActiveSpells } from "_utils"

import { COMBOS, SPELLS } from "_constants";


function App() {
    const [spells, setSpells] = useState<Spell[]>(SPELLS);
    const [combos, setCombos] = useState<Combo[]>(COMBOS);
    const [hideFamilyColumn, setHideFamilyColumn] = useState<boolean>(true);

    const items: TabsProps["items"] = [
        {
            key: "1",
            label: "Spells",
            children: (
                <SpellTable
                    spells={spells}
                    combos={combos}
                    hideFamilyColumn={hideFamilyColumn}
                />
            ),
        },
        {
            key: "2",
            label: "Combos",
            children: <ComboTable spells={spells} combos={combos} />,
        },
    ];

    const activateSpell = (targetSpell: Spell, activate: boolean = true) => {
        const newSpells = spells.map((spell: Spell) => {
            if (targetSpell.id !== spell.id) {
                // No change
                return spell;
            } else {
                let newSpell = {
                    ...spell,
                    active: activate,
                }

                if(!activate){
                    newSpell = {
                        ...newSpell,
                        activeAttribute: null,
                        activeCombo: null,
                    }
                }
                return newSpell;
            }
        });

        if(!activate && targetSpell.activeCombo?.id != null && getActiveSpells(newSpells).find((spell: Spell) => spell.activeCombo?.id === targetSpell.activeCombo?.id) == null){
            setCombos(combos.map((combo: Combo) => {
                if(combo.id !== targetSpell.activeCombo?.id){
                    // no change
                    return combo
                } else {
                    console.log('snap')
                    return {
                        ...combo,
                        active: false,
                    };
                }
            }))
        }

        // Re-render with the new array
        setSpells(newSpells);
    };

    const activateSpellCombo = (
        targetSpell: Spell,
        comboToActivate: Combo | null
    ) => {
        const newSpells = spells.map((spell: Spell) => {
            if (targetSpell.id !== spell.id) {
                // No change
                return spell;
            } else {
                return {
                    ...spell,
                    activeCombo: comboToActivate,
                };
            }
        });

        const newCombos = combos.map((combo: Combo) => {
            if(comboToActivate == null && targetSpell.activeCombo != null){ // if deactivate combo
                if(combo.id === targetSpell.activeCombo.id){
                    return {
                        ...combo,
                        active: getActiveSpells(newSpells).find((spell: Spell) => spell.activeCombo?.id === targetSpell.activeCombo?.id) != null
                    }
                }
            } else if(comboToActivate != null && comboToActivate.id === combo.id){
                return {
                    ...combo,
                    active: true
                }
            } 
            
            // Do nothing
            return combo
        });


        // Re-render with the new array
        setCombos(newCombos);
        setSpells(newSpells);
    };

    const activateSpellAttribute = (
        spelltoActivate: Spell,
        attribute: SpellAttribute | null
    ) => {
        const newSpells = spells.map((spell: Spell) => {
            if (spelltoActivate.id !== spell.id) {
                // No change
                return spell;
            } else {
                return {
                    ...spell,
                    activeAttribute: attribute,
                };
            }
        });
        // Re-render with the new array
        setSpells(newSpells);
    };

    return (
        <>
            <h1>Spell Builder</h1>

            <ActiveSpellTable
                spells={spells}
                combos={combos}
                onComboSelect={(spell: Spell, combo: Combo | null) => {
                    activateSpellCombo(spell, combo);
                }}
                onSpellAttributeSelect={(
                    spell: Spell,
                    attribute: SpellAttribute | null
                ) => {
                    activateSpellAttribute(spell, attribute);
                }}
                onSpellDeactivation={(spell: Spell) => {
                    activateSpell(spell, false)
                }}
            />

            <Flex align="center" gap="large">
                <SpellPicker
                    title="Available Spells"
                    label="Activate Spell"
                    spells={getInactiveSpells(spells)}
                    onSelect={(selection) => {
                        activateSpell(selection as Spell);
                    }}
                />

                <Flex align="center" gap="small">
                    <p>Hide Family: </p>
                    <Switch
                        defaultChecked
                        size="default"
                        onChange={(checked: boolean) => {
                            setHideFamilyColumn(checked);
                        }}
                    />
                </Flex>
            </Flex>

            {/* <BuilderAutoComplete list={spells} /> */}
            <Tabs defaultActiveKey="1" items={items} />
        </>
    );
}

export default App;
