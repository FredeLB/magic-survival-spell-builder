import type { Spell } from 'types/_index'; 
import { SPELL_FAMILY } from 'enums/_index';  


export const SPELLS: Spell[] = [
    {
        id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4",
        name: "Arcane Ray",
        family: SPELL_FAMILY.EnergyEngineering,
        compatibleSpells: [
            "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", // electric shock
            "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", // flash shock
            "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", // incineration
            "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", // magic bolt
            "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", // satellite 
            "b26bd592-a809-fcb4-892f-8ae96ca54a4b" // spirit
        ],
        active: false
    },
    {
        id: "c4e1f3d2-F8b4-4d3e-9e2a-1b5f6c7d8e9f",
        name: "Armageddon",
        family: SPELL_FAMILY.Utility,
        compatibleSpells: [
            "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809" // flash shock
        ],
        active: false
    },
    {
        id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6",
        name: "Blizzard",
        family: SPELL_FAMILY.NaturesWrath,
        compatibleSpells: [
            "001ed428-7728-4205-910a-2ebc523c1323", // fireball
            "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", // incineration
            "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", // meteor
            "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2", // thunderstorm
            "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d" // tsunami
        ],
        active: false
    },
    {
        id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f",
        name: "Cyclone",
        family: SPELL_FAMILY.NaturesWrath,
        compatibleSpells: [
            "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", // electric zone
            "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", // magic bolt
            "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", // satellite
            "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d" // tsunami
        ],
        active: false
    },
    {
        id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b",
        name: "Electric Shock",
        family: SPELL_FAMILY.StormyClouds,
        compatibleSpells: [
            "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", // arcane ray
            "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", // electric zone
            "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", // energy bolt
            "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", // incineration
            "b26bd592-a809-fcb4-892f-8ae96ca54a4b", // spirit
            "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2" // thunderstorm
        ],
        active: false
    },
    {
        id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d",
        name: "Electric Zone",
        family: SPELL_FAMILY.StormyClouds,
        compatibleSpells: [
            "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", // cyclone
            "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", // electric shock
            "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4", // frost nova
            "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", // satellite
            "d5e6f7g8-h9i0j-k1l2-m3n4-o5p61a2b3c4d" // shield
        ],
        active: false
    },
    {
        id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j",
        name: "Energy Bolt",
        family: SPELL_FAMILY.EnergyEngineering,
        compatibleSpells: [
            "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", // electric shock
            "001ed428-7728-4205-910a-2ebc523c1323", // fireball
            "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", // magic bolt
            "d5e6f7g8-h9i0j-k1l2-m3n4-o5p61a2b3c4d", // shield
            "b26bd592-a809-fcb4-892f-8ae96ca54a4b" // spirit
        ],
        active: false
    },
    {
        id: "001ed428-7728-4205-910a-2ebc523c1323",
        name: "Fireball",
        family: SPELL_FAMILY.LordOfFire,
        compatibleSpells: [
            "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", // blizzard
            "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", // energy bolt
            "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", // magic bolt
            "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f" // satellite
        ],
        active: false
    },
    {
        id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809",
        name: "Flash Shock",
        family: SPELL_FAMILY.StormyClouds,
        compatibleSpells: [
            "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", // arcane ray
            "c4e1f3d2-F8b4-4d3e-9e2a-1b5f6c7d8e9f", // armageddon
            "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", // magic bolt
            "b26bd592-a809-fcb4-892f-8ae96ca54a4b" // spirit
        ],
        active: false
    },
    {
        id: "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4",
        name: "Frost Nova",
        family: SPELL_FAMILY.NaturesWrath,
        compatibleSpells: [
            "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", // electric zone
            "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", // meteor
            "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d" // tsunami
        ],
        active: false
    },
    {
        id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9",
        name: "Incineration",
        family: SPELL_FAMILY.LordOfFire,
        compatibleSpells: [
            "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", // arcane ray
            "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", // blizzard
            "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", // electric shock
            "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b", // lava zone
            "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f" // meteor
        ],
        active: false
    },
    {
        id: "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b",
        name: "Lava Zone",
        family: SPELL_FAMILY.LordOfFire,
        compatibleSpells: [
            "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", // incineration
            "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", // meteor
            "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f" // fireball
        ],
        active: false
    },
    {
        id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h",
        name: "Magic Bolt",
        family: SPELL_FAMILY.None,
        compatibleSpells: [
            "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", // arcane ray
            "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", // cyclone
            "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", // energy bolt
            "001ed428-7728-4205-910a-2ebc523c1323", // fireball
            "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", // flash shock
            "b26bd592-a809-fcb4-892f-8ae96ca54a4b" // spirit
        ],
        active: false
    },
    {
        id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f",
        name: "Meteor",
        family: SPELL_FAMILY.LordOfFire,
        compatibleSpells: [
            "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", // blizzard
            "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", // incineration
            "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4", // frost nova
            "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b", // lava zone
            "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", // satellite
            "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2" // thunderstorm
        ],
        active: false
    },
    {
        id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f",
        name: "Satellite",
        family: SPELL_FAMILY.EnergyEngineering,
        compatibleSpells: [
            "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", // arcane ray
            "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", // cyclone
            "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", // electric zone
            "001ed428-7728-4205-910a-2ebc523c1323", // fireball 
            "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b", // lava zone
            "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f" // meteor
        ],
        active: false
    },
    {
        id: "d5e6f7g8-h9i0j-k1l2-m3n4-o5p61a2b3c4d",
        name: "Shield",
        family: SPELL_FAMILY.Utility,
        compatibleSpells: [
            "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", // electric zone
            "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j" // energy bolt
        ],
        active: false
    },
    {
        id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b",
        name: "Spirit",
        family: SPELL_FAMILY.EnergyEngineering,
        compatibleSpells: [
            "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", // arcane ray
            "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", // electric shock
            "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", // energy bolt
            "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", // flash shock
            "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h" // magic bolt
        ],
        active: false
    },
    {
        id: "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2",
        name: "Thunderstorm",
        family: SPELL_FAMILY.StormyClouds,
        compatibleSpells: [
            "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", // blizzard
            "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", // electric shock
            "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f" // meteor
        ],
        active: false
    },
    {
        id: "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d",
        name: "Tsunami",
        family: SPELL_FAMILY.NaturesWrath,
        compatibleSpells: [
            "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", // blizzard
            "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", // cyclone
            "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4" // frost nova
        ],
        active: false
    }
];