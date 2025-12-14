import type { Combo } from "_types";
import type { CustomType, SpellFamily, SpellAttribute } from "_enums";

export interface Spell {
    readonly type: CustomType;
    readonly id: string,
    readonly name: string,
    readonly family: SpellFamily,  // This still works!
    compatibleSpells: string[], // ids of compatible spells
    active: boolean,
    activeAttribute: SpellAttribute | null,
    activeCombo: Combo | null
}