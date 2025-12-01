import type { SpellAttribute, SpellFamily } from "./enums";

export interface Spell {
    id: string,
    name: string,
    family: SpellFamily,
    compatibleSpells: string[], // ids of compatible spells
}

export interface Combo {
    spells: {id: string, attribute: SpellAttribute}[],
}