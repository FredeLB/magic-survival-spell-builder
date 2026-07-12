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

export const getActiveSpells = (spells: Spell[]): Spell[] => {
    return spells.filter((spell: Spell) => spell.active === true);
};

export const getInactiveSpells = (spells: Spell[]): Spell[] => {
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
            if (s.id === spell.id && !attributes.includes(s.attribute)) {
                attributes = [
                    ...attributes,
                    s.attribute
                ]
            }
        })
    })

    return attributes
};

export function getComboSpellsAndAttributes(combo: Combo, spells: Spell[]): { spell: Spell, attribute: SpellAttribute }[] {
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
    return `${Date.now()}-${Math.random()}`
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

export function setItem(key: string, value: unknown) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error saving to localStorage', error);
    }
}

export function getItem(key: string) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
    } catch (error) {
        console.error('Error reading from localStorage', error);
    }
}

export function mergeCombos(stored: Combo[], constants: Combo[]): Combo[] {
    return constants.map((constantCombo) => {
        const storedCombo = stored.find((c) => c.id === constantCombo.id);
        if (!storedCombo) return constantCombo;

        return {
            ...constantCombo,
            active: storedCombo.active,
        };
    });
}

export function mergeSpells(
    stored: Spell[],
    constants: Spell[],
    mergedCombos: Combo[]
): Spell[] {
    return constants.map((constantSpell) => {
        const storedSpell = stored.find((s) => s.id === constantSpell.id);
        if (!storedSpell) return constantSpell;

        const activeCombo = storedSpell.activeCombo
            ? mergedCombos.find((c) => c.id === storedSpell.activeCombo!.id) ?? null
            : null;

        return {
            ...constantSpell,
            active: storedSpell.active,
            activeAttribute: storedSpell.activeAttribute,
            activeCombo,
        };
    });
}