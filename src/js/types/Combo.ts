import type { SpellAttribute } from "../enums/SpellAttribute";

export interface Combo {
    name: string,
    spells: {id: string, attribute: SpellAttribute}[],
}