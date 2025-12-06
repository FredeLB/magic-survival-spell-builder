import { COMBOS, SPELLS } from "constants/_index";
import type { Combo, Spell } from "types/_index";

export function getCompatibleSpells(spell: Spell) {
    const compatibleSpells: Spell[] = [];

    // Find all spells that are compatible with the given spell
    COMBOS.forEach((combo: Combo) => {
        const spellIds = combo.spells.map((s) => s.id);
        if (spellIds.includes(spell.id)) {
            // Add all compatible spells from this combo, excluding the original spell
            combo.spells.forEach((s) => {
                if (s.id !== spell.id) {
                    const compatibleSpell = SPELLS.find(
                        (sp) => sp.id === s.id
                    );
                    if (
                        compatibleSpell &&
                        !compatibleSpells.includes(compatibleSpell)
                    ) {
                        compatibleSpells.push(compatibleSpell);
                    }
                }
            });
        }
    });

    return compatibleSpells;
};