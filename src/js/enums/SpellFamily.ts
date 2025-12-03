// Runtime objects with const assertions
export const SPELL_FAMILY = {
    LordOfFire: 'LordOfFire',
    StormyClouds: 'StormyClouds',
    NaturesWrath: 'NaturesWrath',
    EnergyEngineering: 'EnergyEngineering',
    Utility: 'Utility',
    None: 'None',
} as const;

// Derive types from runtime objects
export type SpellFamily = typeof SPELL_FAMILY[keyof typeof SPELL_FAMILY];

// Helper types for arrays of all values
export type SpellFamilyValues = typeof SPELL_FAMILY;