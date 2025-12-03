import type { Combo } from '../js/types/_index'; 
import { SPELL_ATTRIBUTE } from '../js/enums/_index';  


export const COMBOS: Combo[] = [
    {
        name: "Energy Bombardment",
        spells: [
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SPELL_ATTRIBUTE.DisintegrationRay }, // arcane ray
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SPELL_ATTRIBUTE.Ragnarok } // flash shock
        ]
    },
    {
        name: "Plasma Ray",
        spells: [
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SPELL_ATTRIBUTE.DisintegrationRay }, // arcane ray
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.NuclearFusion } // satellite
        ]
    },
    {
        name: "Genocide",
        spells: [
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SPELL_ATTRIBUTE.DisintegrationRay }, // arcane ray
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.Familiar } // spirit
        ]
    },
    {
        name: "Terra Current",
        spells: [
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SPELL_ATTRIBUTE.ElectromagneticBurst }, // arcane ray
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SPELL_ATTRIBUTE.Superconductivity } // electric shock
        ]
    },
    {
        name: "Prism Spray",
        spells: [
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SPELL_ATTRIBUTE.Reflect }, // arcane ray
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SPELL_ATTRIBUTE.FireAtWill } // magic bolt
        ]
    },
    {
        name: "Ether Blaze",
        spells: [
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.Conflagration }, // blizzard
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SPELL_ATTRIBUTE.Flamestrike } // incineration
        ]
    },
    {
        name: "Genesis",
        spells: [
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.ShootingStar }, // blizzard
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SPELL_ATTRIBUTE.Constellation } // fireball
        ]
    },
    {
        name: "Winter Storm",
        spells: [
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.SubZero }, // blizzard
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SPELL_ATTRIBUTE.ToxicGaz } // fireball
        ]
    },
    {
        name: "Neutron Generation",
        spells: [
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SPELL_ATTRIBUTE.ElectricOrb }, // cyclone
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.NuclearFusion } // satellite
        ]
    },
    {
        name: "Super Cyclone",
        spells: [
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SPELL_ATTRIBUTE.ExtremeWeather }, // cyclone
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.FireAura } // electric zone
        ]
    },
    {
        name: "Ruler of Storms",
        spells: [
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SPELL_ATTRIBUTE.ExtremeWeather }, // cyclone
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SPELL_ATTRIBUTE.FireAtWill } // magic bolt
        ]
    },
    {
        name: "Vortex",
        spells: [
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SPELL_ATTRIBUTE.Void }, // cyclone
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.AntiGravity } // satellite
        ]
    },
    {
        name: "Black Hole",
        spells: [
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SPELL_ATTRIBUTE.Void }, // cyclone
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.NuclearFusion } // satellite
        ]
    },
    {
        name: "Heart of Lightning",
        spells: [
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SPELL_ATTRIBUTE.ChainLightning }, // electric shock
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SPELL_ATTRIBUTE.ChargedParticle } // energy bolt
        ]
    },
    {
        name: "Current Overload",
        spells: [
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SPELL_ATTRIBUTE.ChainLightning }, // electric shock
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.Familiar } // spirit
        ]
    },
    {
        name: "Lightning Breath",
        spells: [
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SPELL_ATTRIBUTE.Superconductivity }, // electric shock
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SPELL_ATTRIBUTE.Flamestrike } // incineration
        ]
    },
    {
        name: "Lightning Calibration",
        spells: [
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.ElectricityBlast }, // electric zone
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.WillOTheWisp } // satellite
        ]
    },
    {
        name: "Destroyer",
        spells: [
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.ElectricityBlast }, // electric zone
            { id: "d5e6f7g8-h9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.DestructionField } // shield
        ]
    },
    {
        name: "Meisner Effect",
        spells: [
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.Emp }, // electric zone
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SPELL_ATTRIBUTE.Superconductivity } // electric shock
        ]
    },
    {
        name: "Frozen Heart",
        spells: [
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.FireAura }, // electric zone
            { id: "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4", attribute: SPELL_ATTRIBUTE.IceAge } // frost nova
        ]
    },
    {
        name: "Crazed Spray",
        spells: [
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SPELL_ATTRIBUTE.ChargedParticle }, // energy bolt
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.Familiar } // spirit
        ]
    },
    {
        name: "Origin Explosion",
        spells: [
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SPELL_ATTRIBUTE.Flare }, // energy bolt
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SPELL_ATTRIBUTE.Constellation } // fireball
        ]
    },
    {
        name: "Reaction",
        spells: [
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SPELL_ATTRIBUTE.Spark }, // energy bolt
            { id: "d5e6f7g8-h9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.DestructionField } // shield
        ]
    },
    {
        name: "Demon Equation",
        spells: [
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SPELL_ATTRIBUTE.BigBang }, // fireball
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SPELL_ATTRIBUTE.Flare } // energy bolt
        ]
    },
    {
        name: "Ghastly Rampage",
        spells: [
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SPELL_ATTRIBUTE.Constellation }, // fireball
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.WillOTheWisp } // satellite
        ]
    },
    {
        name: "Black Death",
        spells: [
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SPELL_ATTRIBUTE.ToxicGaz }, // fireball
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SPELL_ATTRIBUTE.FireAtWill } // magic bolt
        ]
    },
    {
        name: "Brandish",
        spells: [
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SPELL_ATTRIBUTE.Ragnarok }, // flash shock
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.MagicMissile } // spirit
        ]
    },
    {
        name: "Frenzy",
        spells: [
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SPELL_ATTRIBUTE.SatansNails }, // flash shock
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SPELL_ATTRIBUTE.FireAtWill } // magic bolt
        ]
    },
    {
        name: "Exidium",
        spells: [
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SPELL_ATTRIBUTE.Wipeout }, // flash shock
            { id: "c4e1f3d2-F8b4-4d3e-9e2a-1b5f6c7d8e9f", attribute: SPELL_ATTRIBUTE.Rapture } // armageddon
        ]
    },
    {
        name: "Gate",
        spells: [
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SPELL_ATTRIBUTE.Wipeout }, // flash shock
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.MagicBlade } // spirit
        ]
    },
    {
        name: "Great Rift",
        spells: [
            { id: "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4", attribute: SPELL_ATTRIBUTE.Earthquake }, // frost nova
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.VolcanicEruption } // meteor
        ]
    },
    {
        name: "Snowflake Blossom",
        spells: [
            { id: "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4", attribute: SPELL_ATTRIBUTE.IceAge }, // frost nova
            { id: "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.GreatEruption } // tsunami
        ]
    },
    {
        name: "Breath of Fire",
        spells: [
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SPELL_ATTRIBUTE.CerberusFlame }, // incineration
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SPELL_ATTRIBUTE.Reflect } // arcane ray
        ]
    },
    {
        name: "Inferno",
        spells: [
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SPELL_ATTRIBUTE.Flamestrike }, // incineration
            { id: "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b", attribute: SPELL_ATTRIBUTE.Melt } // Lava Zone
        ]
    },
    {
        name: "Hellfire",
        spells: [
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SPELL_ATTRIBUTE.Pyromaniac }, // incineration
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.Conflagration } // blizzard
        ]
    },
    {
        name: "Age of the sun",
        spells: [
            { id: "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b", attribute: SPELL_ATTRIBUTE.Crater }, // Lava Zone
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.NuclearFusion } // satellite
        ]
    },
    {
        name: "Furnace",
        spells: [
            { id: "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b", attribute: SPELL_ATTRIBUTE.MagmaEruption }, // Lava Zone
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.VolcanicEruption } // meteor
        ]
    },
    {
        name: "Avatar",
        spells: [
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SPELL_ATTRIBUTE.Doppelganger }, // magic bolt
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.MagicMissile } // spirit
        ]
    },
    {
        name: "Blaster",
        spells: [
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SPELL_ATTRIBUTE.MagicArrow }, // magic bolt
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SPELL_ATTRIBUTE.Wipeout } // flash shock
        ]
    },
    {
        name: "Pyrotechnics",
        spells: [
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SPELL_ATTRIBUTE.Fireworks }, // magic bolt
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SPELL_ATTRIBUTE.Flare } // energy bolt
        ]
    },
    {
        name: "Great Impact",
        spells: [
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.Asteroid }, // meteor
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.ShootingStar } // blizzard
        ]
    },
    {
        name: "War Climate",
        spells: [
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.MeteorShower }, // meteor
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.ShootingStar } // blizzard
        ]
    },
    {
        name: "Flame Storm",
        spells: [
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.VolcanicEruption }, // meteor
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SPELL_ATTRIBUTE.CerberusFlame } // incineration
        ]
    },
    {
        name: "Magna Field",
        spells: [
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.AntiGravity }, // satellite
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.ElectricityBlast } // electric zone
        ]
    },
    {
        name: "Hyperion",
        spells: [
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.NuclearFusion }, // satellite
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.Asteroid } // meteor
        ]
    },
    {
        name: "Supernova",
        spells: [
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.Familiar }, // spirit
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SPELL_ATTRIBUTE.Flare } // energy bolt
        ]
    },
    {
        name: "Telekinetic Sword ",
        spells: [
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.MagicBlade }, // spirit
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SPELL_ATTRIBUTE.ChainLightning } // electric shock
        ]
    },
    {
        name: "Mana Spear",
        spells: [
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SPELL_ATTRIBUTE.MagicMissile }, // spirit
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SPELL_ATTRIBUTE.Wipeout } // flash shock
        ]
    },
    {
        name: "Astrape",
        spells: [
            { id: "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2", attribute: SPELL_ATTRIBUTE.Judgment }, // thunderstorm
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.Asteroid } // meteor
        ]
    },
    {
        name: "Orbital Strike",
        spells: [
            { id: "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2", attribute: SPELL_ATTRIBUTE.LightningExplosion }, // thunderstorm
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.ShootingStar } // blizzard
        ]
    },
    {
        name: "Empyrean Wrath",
        spells: [
            { id: "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2", attribute: SPELL_ATTRIBUTE.LightningExplosion }, // thunderstorm
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SPELL_ATTRIBUTE.MeteorShower } // meteor
        ]
    },
    {
        name: "Lightning Bolts",
        spells: [
            { id: "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2", attribute: SPELL_ATTRIBUTE.Thunderclap }, // thunderstorm
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SPELL_ATTRIBUTE.ChainLightning } // electric shock
        ]
    },
    {
        name: "Phoenix",
        spells: [
            { id: "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.GreatEruption }, // tsunami
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SPELL_ATTRIBUTE.Conflagration } // blizzard
        ]
    },
    {
        name: "Great flood",
        spells: [
            { id: "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SPELL_ATTRIBUTE.SirensSong }, // tsunami
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SPELL_ATTRIBUTE.ExtremeWeather } // cyclone
        ]
    }
];