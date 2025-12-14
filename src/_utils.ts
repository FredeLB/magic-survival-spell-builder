import type { Combo, Spell } from "_types";
import type { SpellAttribute, CustomType, AntButtonColor, SpellFamily } from "_enums";

import { CUSTOM_TYPE, SPELL_FAMILY } from "_enums";


export function getCompatibleSpells(targetSpell: Spell, spells: Spell[], combos: Combo[]): Spell[] {
    const compatibleSpells: Spell[] = [];

    // Find all spells that are compatible with the given spell
    combos.forEach((combo: Combo) => {
        const spellIds = combo.spells.map((s) => s.id);
        if (spellIds.includes(targetSpell.id)) {
            // Add all compatible spells from this combo, excluding the original spell
            combo.spells.forEach((s) => {
                if (s.id !== targetSpell.id) {
                    const compatibleSpell = spells.find(
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

    return compatibleSpells.sort((a, b) => {
        // sort by spell name
        return a.name.localeCompare(b.name);
    });
};

export function getActiveSpells(spells: Spell[]): Spell[] {
    return spells.filter((spell: Spell) => spell.active === true)
};

export function getInactiveSpells(spells: Spell[]): Spell[] {
    return spells.filter((spell: Spell) => spell.active === false)
};

export function getSpellPotentialCombos(targetSpell: Spell, combos: Combo[]): Combo[] {
    return combos.filter((combo: Combo) => {
        const spellIds = combo.spells.map((s) => s.id);
        if (spellIds.includes(targetSpell.id)) {
            return combo;
        }
    });
};

export function getSpellPotentialAttributes(spell: Spell, combos: Combo[]): SpellAttribute[] {
    let attributes: SpellAttribute[] = []

    combos.forEach((combo: Combo) => {
        combo.spells.forEach((s) => {
            if(s.id === spell.id && !attributes.includes(s.attribute)){
                attributes = [
                    ...attributes,
                    s.attribute
                ]
            }
        })
    })

    return attributes
};

export function getComboSpellsAndAttributes(combo: Combo, spells: Spell[]):  {spell: Spell, attribute: SpellAttribute}[] {
    return combo.spells.map(
        (spell: { id: string; attribute: SpellAttribute }) => {
            return {
                spell: spells.find((s) => s.id === spell.id)!,
                attribute: spell.attribute,
            };
        }
    ).sort((a, b) => {
        // sort by spell name
        return a.spell.name.localeCompare(b.spell.name);
    });;
};

export function generateUniqueKey(): string {
    return  `${Date.now()}-${Math.random()}`
}

export function getUIColorByCustomType(customType: CustomType | undefined): AntButtonColor {
    let color;

    switch (customType) {
        case CUSTOM_TYPE.Combo:
            color = "purple";
            break;
        case CUSTOM_TYPE.Spell:
            color = "orange";
            break;
        case CUSTOM_TYPE.Attribute:
            color = "magenta";
            break;
        default:
            color = undefined;
    }
    
    return color as AntButtonColor
}

export function getUIColorBySpellFamily(family: SpellFamily | undefined): AntButtonColor {
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
            color = undefined;
    }
    
    return color as AntButtonColor
}

export function getCustomType(item: unknown): CustomType | undefined {
    return item != null && typeof item === "object" && "type" in item ? item.type as CustomType : undefined;
}