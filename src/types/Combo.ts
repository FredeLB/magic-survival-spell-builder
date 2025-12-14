import type { SpellAttribute } from "_enums";
import type { CustomType } from '_enums';  

export interface Combo {
    readonly type: CustomType;
    readonly id: string,
    readonly name: string,
    readonly spells: {id: string, attribute: SpellAttribute}[],
    active: boolean,
}