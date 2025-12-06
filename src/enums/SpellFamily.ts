// Runtime objects with const assertions
export const SPELL_FAMILY = {
    LordOfFire: 'Lord Of Fire',
    StormyClouds: 'Stormy Clouds',
    NaturesWrath: 'Natures Wrath',
    EnergyEngineering: 'Energy Engineering',
    Utility: 'Utility',
    None: 'None',
} as const;

// Derive types from runtime objects
export type SpellFamily = typeof SPELL_FAMILY[keyof typeof SPELL_FAMILY];

// Helper types for arrays of all values
export type SpellFamilyValues = typeof SPELL_FAMILY;