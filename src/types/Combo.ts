import type { SpellAttribute } from "enums/_index";

export interface Combo {
    id: string,
    name: string,
    spells: {id: string, attribute: SpellAttribute}[],
}