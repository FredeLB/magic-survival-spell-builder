import type { SpellAttribute } from "js/enums/SpellAttribute";

export interface Combo {
    name: string,
    spells: {id: string, attribute: SpellAttribute}[],
}