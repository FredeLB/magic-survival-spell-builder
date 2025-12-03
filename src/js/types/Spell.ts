import type { SpellFamily } from "../enums/SpellFamily";

export interface Spell {
    readonly id: string,
    readonly name: string,
    readonly family: SpellFamily,  // This still works!
    readonly compatibleSpells: string[], // ids of compatible spells
}