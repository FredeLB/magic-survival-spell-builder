import type { Combo } from '_types'; 
import { SPELL_ATTRIBUTE, CUSTOM_TYPE } from '_enums';  

export const COMBOS: Combo[] = [
    {
        id: "f1c9a8b6-d3e2-4f7a-9b5c-8e3a2d1c7b6a",
        name: "Energy Bombardment",
        spells: [
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SPELL_ATTRIBUTE.DisintegrationRay }, // arcane ray
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SPELL_ATTRIBUTE.Ragnarok } // flash shock
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "a2b3c4d5-e6f7-8g9h-0i1j-k2l3m4n5o6p7",
        name: "Plasma Ray",
        spells: [
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SPELL_ATTRIBUTE.DisintegrationRay }, // arcane ray
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.NuclearFusion } // satellite
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "b3c4d5e6-f7g8-9h0i-1j2k-3l4m5n6o7p8q",
        name: "Genocide",
        spells: [
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SPELL_ATTRIBUTE.DisintegrationRay }, // arcane ray
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.Familiar } // spirit
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "c4d5e6f7-g8h9-0i1j-2k3l-4m5n6o7p8q9r",
        name: "Terra Current",
        spells: [
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SPELL_ATTRIBUTE.ElectromagneticBurst }, // arcane ray
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SPELL_ATTRIBUTE.Superconductivity } // electric shock
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "d5e6f7g8-h9i0-1j2k-3l4m-5n6o7p8q9r0s",
        name: "Prism Spray",
        spells: [
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SPELL_ATTRIBUTE.Reflect }, // arcane ray
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SPELL_ATTRIBUTE.FireAtWill } // magic bolt
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "e6f7g8h9-i0j1-2k3l-4m5n-6o7p8q9r0s1t",
        name: "Ether Blaze",
        spells: [
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.Conflagration }, // blizzard
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SPELL_ATTRIBUTE.Flamestrike } // incineration
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "f7g8h9i0-j1k2-3l4m-5n6o-7p8q9r0s1t2u",
        name: "Genesis",
        spells: [
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.ShootingStar }, // blizzard
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SPELL_ATTRIBUTE.Constellation } // fireball
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "g8h9i0j1-k2l3-4m5n-6o7p-8q9r0s1t2u3v",
        name: "Winter Storm",
        spells: [
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.SubZero }, // blizzard
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SPELL_ATTRIBUTE.ToxicGaz } // fireball
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "h9i0j1k2-l3m4-5n6o-7p8q-9r0s1t2u3v4w",
        name: "Neutron Generation",
        spells: [
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SPELL_ATTRIBUTE.ElectricOrb }, // cyclone
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.NuclearFusion } // satellite
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "i0j1k2l3-m4n5-6o7p-8q9r-0s1t2u3v4w5x",
        name: "Super Cyclone",
        spells: [
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SPELL_ATTRIBUTE.ExtremeWeather }, // cyclone
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.FireAura } // electric zone
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "j1k2l3m4-n5o6-7p8q-9r0s-1t2u3v4w5x6y",
        name: "Ruler of Storms",
        spells: [
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SPELL_ATTRIBUTE.ExtremeWeather }, // cyclone
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SPELL_ATTRIBUTE.FireAtWill } // magic bolt
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "k2l3m4n5-o6p7-8q9r-0s1t-2u3v4w5x6y7z",
        name: "Vortex",
        spells: [
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SPELL_ATTRIBUTE.Void }, // cyclone
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.AntiGravity } // satellite
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "l3m4n5o6-p7q8-9r0s-1t2u-3v4w5x6y7z8a",
        name: "Black Hole",
        spells: [
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SPELL_ATTRIBUTE.Void }, // cyclone
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.NuclearFusion } // satellite
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "m4n5o6p7-q8r9-0s1t-2u3v-4w5x6y7z8a9b",
        name: "Heart of Lightning",
        spells: [
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SPELL_ATTRIBUTE.ChainLightning }, // electric shock
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SPELL_ATTRIBUTE.ChargedParticle } // energy bolt
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "n5o6p7q8-r9s0-1t2u-3v4w-5x6y7z8a9b0c",
        name: "Current Overload",
        spells: [
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SPELL_ATTRIBUTE.ChainLightning }, // electric shock
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.Familiar } // spirit
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "o6p7q8r9-s0t1-2u3v-4w5x-6y7z8a9b0c1d",
        name: "Lightning Breath",
        spells: [
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SPELL_ATTRIBUTE.Superconductivity }, // electric shock
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SPELL_ATTRIBUTE.Flamestrike } // incineration
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "p7q8r9s0-t1u2-3v4w-5x6y-7z8a9b0c1d2e",
        name: "Lightning Calibration",
        spells: [
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.ElectricityBlast }, // electric zone
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.WillOTheWisp } // satellite
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "q8r9s0t1-u2v3-4w5x-6y7z-8a9b0c1d2e3f",
        name: "Destroyer",
        spells: [
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.ElectricityBlast }, // electric zone
            { id: "d5e6f7g8-h9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.DestructionField } // shield
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "r9s0t1u2-v3w4-5x6y-7z8a-9b0c1d2e3f4g",
        name: "Meisner Effect",
        spells: [
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.Emp }, // electric zone
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SPELL_ATTRIBUTE.Superconductivity } // electric shock
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "s0t1u2v3-w4x5-6y7z-8a9b-0c1d2e3f4g5h",
        name: "Frozen Heart",
        spells: [
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.FireAura }, // electric zone
            { id: "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4", attribute: SPELL_ATTRIBUTE.IceAge } // frost nova
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "t1u2v3w4-x5y6-7z8a-9b0c-1d2e3f4g5h6i",
        name: "Crazed Spray",
        spells: [
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SPELL_ATTRIBUTE.ChargedParticle }, // energy bolt
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.Familiar } // spirit
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "u2v3w4x5-y6z7-8a9b-0c1d-2e3f4g5h6i7j",
        name: "Origin Explosion",
        spells: [
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SPELL_ATTRIBUTE.Flare }, // energy bolt
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SPELL_ATTRIBUTE.Constellation } // fireball
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "v3w4x5y6-z7a8-9b0c-1d2e-3f4g5h6i7j8k",
        name: "Reaction",
        spells: [
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SPELL_ATTRIBUTE.Spark }, // energy bolt
            { id: "d5e6f7g8-h9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.DestructionField } // shield
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "w4x5y6z7-a8b9-0c1d-2e3f-4g5h6i7j8k9l",
        name: "Demon Equation",
        spells: [
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SPELL_ATTRIBUTE.BigBang }, // fireball
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SPELL_ATTRIBUTE.Flare } // energy bolt
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "x5y6z7a8-b9c0-1d2e-3f4g-5h6i7j8k9l0m",
        name: "Ghastly Rampage",
        spells: [
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SPELL_ATTRIBUTE.Constellation }, // fireball
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.WillOTheWisp } // satellite
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "y6z7a8b9-c0d1-2e3f-4g5h-6i7j8k9l0m1n",
        name: "Black Death",
        spells: [
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SPELL_ATTRIBUTE.ToxicGaz }, // fireball
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SPELL_ATTRIBUTE.FireAtWill } // magic bolt
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "z7a8b9c0-d1e2-3f4g-5h6i-7j8k9l0m1n2o",
        name: "Brandish",
        spells: [
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SPELL_ATTRIBUTE.Ragnarok }, // flash shock
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.MagicMissile } // spirit
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "a8b9c0d1-e2f3-4g5h-6i7j-8k9l0m1n2o3p",
        name: "Frenzy",
        spells: [
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SPELL_ATTRIBUTE.SatansNails }, // flash shock
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SPELL_ATTRIBUTE.FireAtWill } // magic bolt
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "b9c0d1e2-f3g4-5h6i-7j8k-9l0m1n2o3p4q",
        name: "Exidium",
        spells: [
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SPELL_ATTRIBUTE.Wipeout }, // flash shock
            { id: "c4e1f3d2-F8b4-4d3e-9e2a-1b5f6c7d8e9f", attribute: SPELL_ATTRIBUTE.Rapture } // armageddon
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "c0d1e2f3-g4h5-6i7j-8k9l-0m1n2o3p4q5r",
        name: "Gate",
        spells: [
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SPELL_ATTRIBUTE.Wipeout }, // flash shock
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.MagicBlade } // spirit
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "d1e2f3g4-h5i6-7j8k-9l0m-1n2o3p4q5r6s",
        name: "Great Rift",
        spells: [
            { id: "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4", attribute: SPELL_ATTRIBUTE.Earthquake }, // frost nova
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.VolcanicEruption } // meteor
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "e2f3g4h5-i6j7-8k9l-0m1n-2o3p4q5r6s7t",
        name: "Snowflake Blossom",
        spells: [
            { id: "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4", attribute: SPELL_ATTRIBUTE.IceAge }, // frost nova
            { id: "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.GreatEruption } // tsunami
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "f3g4h5i6-j7k8-9l0m-1n2o-3p4q5r6s7t8u",
        name: "Breath of Fire",
        spells: [
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SPELL_ATTRIBUTE.CerberusFlame }, // incineration
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SPELL_ATTRIBUTE.Reflect } // arcane ray
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "g4h5i6j7-k8l9-0m1n-2o3p-4q5r6s7t8u9v",
        name: "Inferno",
        spells: [
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SPELL_ATTRIBUTE.Flamestrike }, // incineration
            { id: "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b", attribute: SPELL_ATTRIBUTE.Melt } // Lava Zone
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "h5i6j7k8-l9m0-1n2o-3p4q-5r6s7t8u9v0w",
        name: "Hellfire",
        spells: [
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SPELL_ATTRIBUTE.Pyromaniac }, // incineration
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.Conflagration } // blizzard
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "i6j7k8l9-m0n1-2o3p-4q5r-6s7t8u9v0w1x",
        name: "Age of the sun",
        spells: [
            { id: "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b", attribute: SPELL_ATTRIBUTE.Crater }, // Lava Zone
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.NuclearFusion } // satellite
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "j7k8l9m0-n1o2-3p4q-5r6s-7t8u9v0w1x2y",
        name: "Furnace",
        spells: [
            { id: "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b", attribute: SPELL_ATTRIBUTE.MagmaEruption }, // Lava Zone
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.VolcanicEruption } // meteor
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "k8l9m0n1-o2p3-4q5r-6s7t-8u9v0w1x2y3z",
        name: "Avatar",
        spells: [
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SPELL_ATTRIBUTE.Doppelganger }, // magic bolt
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.MagicMissile } // spirit
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "l9m0n1o2-p3q4-5r6s-7t8u-9v0w1x2y3z4a",
        name: "Blaster",
        spells: [
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SPELL_ATTRIBUTE.MagicArrow }, // magic bolt
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SPELL_ATTRIBUTE.Wipeout } // flash shock
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "m0n1o2p3-q4r5-6s7t-8u9v-0w1x2y3z4a5b",
        name: "Pyrotechnics",
        spells: [
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SPELL_ATTRIBUTE.Fireworks }, // magic bolt
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SPELL_ATTRIBUTE.Flare } // energy bolt
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "n1o2p3q4-r5s6-7t8u-9v0w-1x2y3z4a5b6c",
        name: "Great Impact",
        spells: [
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.Asteroid }, // meteor
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.ShootingStar } // blizzard
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "o2p3q4r5-s6t7-8u9v-0w1x-2y3z4a5b6c7d",
        name: "War Climate",
        spells: [
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.MeteorShower }, // meteor
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.ShootingStar } // blizzard
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "p3q4r5s6-t7u8-9v0w-1x2y-3z4a5b6c7d8e",
        name: "Flame Storm",
        spells: [
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.VolcanicEruption }, // meteor
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SPELL_ATTRIBUTE.CerberusFlame } // incineration
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "q4r5s6t7-u8v9-0w1x-2y3z-4a5b6c7d8e9f",
        name: "Magna Field",
        spells: [
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.AntiGravity }, // satellite
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.ElectricityBlast } // electric zone
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "r5s6t7u8-v9w0-1x2y-3z4a-5b6c7d8e9f0g",
        name: "Hyperion",
        spells: [
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.NuclearFusion }, // satellite
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.Asteroid } // meteor
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "s6t7u8v9-w0x1-2y3z-4a5b-6c7d8e9f0g1h",
        name: "Supernova",
        spells: [
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.Familiar }, // spirit
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SPELL_ATTRIBUTE.Flare } // energy bolt
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "t7u8v9w0-x1y2-3z4a-5b6c-7d8e9f0g1h2i",
        name: "Telekinetic Sword",
        spells: [
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.MagicBlade }, // spirit
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SPELL_ATTRIBUTE.ChainLightning } // electric shock
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "u8v9w0x1-y2z3-4a5b-6c7d-8e9f0g1h2i3j",
        name: "Mana Spear",
        spells: [
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.MagicMissile }, // spirit
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SPELL_ATTRIBUTE.Wipeout } // flash shock
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "v9w0x1y2-z3a4-5b6c-7d8e-9f0g1h2i3j4k",
        name: "Astrape",
        spells: [
            { id: "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2", attribute: SPELL_ATTRIBUTE.Judgment }, // thunderstorm
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.Asteroid } // meteor
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "w0x1y2z3-a4b5-6c7d-8e9f-0g1h2i3j4k5l",
        name: "Orbital Strike",
        spells: [
            { id: "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2", attribute: SPELL_ATTRIBUTE.LightningExplosion }, // thunderstorm
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.ShootingStar } // blizzard
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "x1y2z3a4-b5c6-7d8e-9f0g-1h2i3j4k5l6m",
        name: "Empyrean Wrath",
        spells: [
            { id: "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2", attribute: SPELL_ATTRIBUTE.LightningExplosion }, // thunderstorm
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.MeteorShower } // meteor
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "y2z3a4b5-c6d7-8e9f-0g1h-2i3j4k5l6m7n",
        name: "Lightning Bolts",
        spells: [
            { id: "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2", attribute: SPELL_ATTRIBUTE.Thunderclap }, // thunderstorm
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SPELL_ATTRIBUTE.ChainLightning } // electric shock
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "z3a4b5c6-d7e8-9f0g-1h2i-3j4k5l6m7n8o",
        name: "Phoenix",
        spells: [
            { id: "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.GreatEruption }, // tsunami
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.Conflagration } // blizzard
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    },
    {
        id: "a4b5c6d7-e8f9-0g1h-2i3j-4k5l6m7n8o9p",
        name: "Great flood",
        spells: [
            { id: "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.SirensSong }, // tsunami
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SPELL_ATTRIBUTE.ExtremeWeather } // cyclone
        ],
        active: false,
        type: CUSTOM_TYPE.Combo
    }
];