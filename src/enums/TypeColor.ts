// Runtime objects with const assertions
export const TYPE_COLOR = {
    Combo: 'purple',
} as const;

// Derive types from runtime objects
export type TypeColor = typeof TYPE_COLOR[keyof typeof TYPE_COLOR];

// Helper types for arrays of all values
export type TypeColorValues = typeof TYPE_COLOR;