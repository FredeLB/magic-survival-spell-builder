import type { Spell } from "types/_index";

export interface SpellPair {
    first: Spell;
    second: Spell | null;
}