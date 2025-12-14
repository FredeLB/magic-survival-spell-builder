// Runtime objects with const assertions
export const CUSTOM_TYPE = {
    Combo: 'Combo',
    Spell: 'Spell',
    Family: 'Family',
    Attribute: 'Attribute',
} as const;

// Derive types from runtime objects
export type CustomType = typeof CUSTOM_TYPE[keyof typeof CUSTOM_TYPE];

// Helper types for arrays of all values
export type CustomTypeValues = typeof CUSTOM_TYPE;