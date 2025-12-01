import { SpellAttribute, SpellFamily } from "./enums";
import type { Combo, Spell } from "./interfaces";


export const COMBOS: Combo[] = [
    {
        spells: [
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SpellAttribute.DisintegrationRay }, // arcane ray
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SpellAttribute.Ragnarok } // flash shock
        ]
    },
    {
        spells: [
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SpellAttribute.DisintegrationRay }, // arcane ray
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.NuclearFusion } // satellite
        ]
    },
    {
        spells: [
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SpellAttribute.DisintegrationRay }, // arcane ray
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SpellAttribute.Familiar } // spirit
        ]
    },
    {
        spells: [
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SpellAttribute.ElectromagneticBurst }, // arcane ray
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SpellAttribute.Superconductivity } // electric shock
        ]
    },
    {
        spells: [
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SpellAttribute.Reflect }, // arcane ray
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SpellAttribute.FireAtWill } // magic bolt
        ]
    },
    {
        spells: [
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SpellAttribute.Conflagration }, // blizzard
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SpellAttribute.Flamestrike } // incineration
        ]
    },
    {
        spells: [
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SpellAttribute.ShootingStar }, // blizzard
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SpellAttribute.Constellation } // fireball
        ]
    },
    {
        spells: [
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SpellAttribute.SubZero }, // blizzard
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SpellAttribute.ToxicGaz } // fireball
        ]
    },
    {
        spells: [
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SpellAttribute.ElectricOrb }, // cyclone
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.NuclearFusion } // satellite
        ]
    },
    {
        spells: [
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SpellAttribute.ExtremeWeather }, // cyclone
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SpellAttribute.FireAura } // electric zone
        ]
    },
    {
        spells: [
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SpellAttribute.ExtremeWeather }, // cyclone
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SpellAttribute.FireAtWill } // magic bolt
        ]
    },
    {
        spells: [
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SpellAttribute.Void }, // cyclone
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.AntiGravity } // satellite
        ]
    },
    {
        spells: [
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SpellAttribute.Void }, // cyclone
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.NuclearFusion } // satellite
        ]
    },
    {
        spells: [
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SpellAttribute.ChainLightning }, // electric shock
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SpellAttribute.ChargedParticle } // energy bolt
        ]
    },
    {
        spells: [
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SpellAttribute.ChainLightning }, // electric shock
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SpellAttribute.Familiar } // spirit
        ]
    },
    {
        spells: [
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SpellAttribute.Superconductivity }, // electric shock
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SpellAttribute.Flamestrike } // incineration
        ]
    },
    {
        spells: [
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SpellAttribute.ElectricityBlast }, // electric zone
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.WillOTheWisp } // satellite
        ]
    },
    {
        spells: [
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SpellAttribute.ElectricityBlast }, // electric zone
            { id: "d5e6f7g8-h9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SpellAttribute.DestructionField } // shield
        ]
    },
    {
        spells: [
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SpellAttribute.Emp }, // electric zone
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SpellAttribute.Superconductivity } // electric shock
        ]
    },
    {
        spells: [
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SpellAttribute.FireAura }, // electric zone
            { id: "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4", attribute: SpellAttribute.IceAge } // frost nova
        ]
    },
    {
        spells: [
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SpellAttribute.ChargedParticle }, // energy bolt
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SpellAttribute.Familiar } // spirit
        ]
    },
    {
        spells: [
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SpellAttribute.Flare }, // energy bolt
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SpellAttribute.Constellation } // fireball
        ]
    },
    {
        spells: [
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SpellAttribute.Spark }, // energy bolt
            { id: "d5e6f7g8-h9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SpellAttribute.DestructionField } // shield
        ]
    },
    {
        spells: [
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SpellAttribute.BigBang }, // fireball
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SpellAttribute.Flare } // energy bolt
        ]
    },
    {
        spells: [
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SpellAttribute.Constellation }, // fireball
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.WillOTheWisp } // satellite
        ]
    },
    {
        spells: [
            { id: "001ed428-7728-4205-910a-2ebc523c1323", attribute: SpellAttribute.ToxicGaz }, // fireball
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SpellAttribute.FireAtWill } // magic bolt
        ]
    },
    {
        spells: [
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SpellAttribute.Ragnarok }, // flash shock
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SpellAttribute.MagicMissile } // spirit
        ]
    },
    {
        spells: [
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SpellAttribute.SatansNails }, // flash shock
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SpellAttribute.FireAtWill } // magic bolt
        ]
    },
    {
        spells: [
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SpellAttribute.Wipeout }, // flash shock
            { id: "c4e1f3d2-F8b4-4d3e-9e2a-1b5f6c7d8e9f", attribute: SpellAttribute.Rapture } // armageddon
        ]
    },
    {
        spells: [
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SpellAttribute.Wipeout }, // flash shock
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SpellAttribute.MagicBlade } // spirit
        ]
    },
    {
        spells: [
            { id: "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4", attribute: SpellAttribute.Earthquake }, // frost nova
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.VolcanicEruption } // meteor
        ]
    },
    {
        spells: [
            { id: "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4", attribute: SpellAttribute.IceAge }, // frost nova
            { id: "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SpellAttribute.GreatEruption } // tsunami
        ]
    },
    {
        spells: [
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SpellAttribute.CerberusFlame }, // incineration
            { id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", attribute: SpellAttribute.Reflect } // arcane ray
        ]
    },
    {
        spells: [
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SpellAttribute.Flamestrike }, // incineration
            { id: "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b", attribute: SpellAttribute.Melt } // Lava Zone
        ]
    },
    {
        spells: [
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SpellAttribute.Pyromaniac }, // incineration
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SpellAttribute.Conflagration } // blizzard
        ]
    },
    {
        spells: [
            { id: "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b", attribute: SpellAttribute.Crater }, // Lava Zone
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.NuclearFusion } // satellite
        ]
    },
    {
        spells: [
            { id: "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b", attribute: SpellAttribute.MagmaEruption }, // Lava Zone
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.VolcanicEruption } // meteor
        ]
    },
    {
        spells: [
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SpellAttribute.Doppelganger }, // magic bolt
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SpellAttribute.MagicMissile } // spirit
        ]
    },
    {
        spells: [
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SpellAttribute.MagicArrow }, // magic bolt
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SpellAttribute.Wipeout } // flash shock
        ]
    },
    {
        spells: [
            { id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", attribute: SpellAttribute.Fireworks }, // magic bolt
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SpellAttribute.Flare } // energy bolt
        ]
    },
    {
        spells: [
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.Asteroid }, // meteor
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SpellAttribute.ShootingStar } // blizzard
        ]
    },
    {
        spells: [
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.MeteorShower }, // meteor
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SpellAttribute.ShootingStar } // blizzard
        ]
    },
    {
        spells: [
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.VolcanicEruption }, // meteor
            { id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", attribute: SpellAttribute.CerberusFlame } // incineration
        ]
    },
    {
        spells: [
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.AntiGravity }, // satellite
            { id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SpellAttribute.ElectricityBlast } // electric zone
        ]
    },
    {
        spells: [
            { id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.NuclearFusion }, // satellite
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.Asteroid } // meteor
        ]
    },
    {
        spells: [
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SpellAttribute.Familiar }, // spirit
            { id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", attribute: SpellAttribute.Flare } // energy bolt
        ]
    },
    {
        spells: [
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SpellAttribute.MagicBlade }, // spirit
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SpellAttribute.ChainLightning } // electric shock
        ]
    },
    {
        spells: [
            { id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b", attribute: SpellAttribute.MagicMissile }, // spirit
            { id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", attribute: SpellAttribute.Wipeout } // flash shock
        ]
    },
    {
        spells: [
            { id: "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2", attribute: SpellAttribute.Judgment }, // thunderstorm
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.Asteroid } // meteor
        ]
    },
    {
        spells: [
            { id: "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2", attribute: SpellAttribute.LightningExplosion }, // thunderstorm
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SpellAttribute.ShootingStar } // blizzard
        ]
    },
    {
        spells: [
            { id: "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2", attribute: SpellAttribute.LightningExplosion }, // thunderstorm
            { id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", attribute: SpellAttribute.MeteorShower } // meteor
        ]
    },
    {
        spells: [
            { id: "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2", attribute: SpellAttribute.Thunderclap }, // thunderstorm
            { id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", attribute: SpellAttribute.ChainLightning } // electric shock
        ]
    },
    {
        spells: [
            { id: "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SpellAttribute.GreatEruption }, // tsunami
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", attribute: SpellAttribute.Conflagration } // blizzard
        ]
    },
    {
        spells: [
            { id: "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d", attribute: SpellAttribute.SirensSong }, // tsunami
            { id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", attribute: SpellAttribute.ExtremeWeather } // cyclone
        ]
    }
];


export const SPELLS: Spell[] = [
    {
        id: "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4",
        name: "Arcane Ray",
        family: SpellFamily.EnergyEngineering,
        compatibleSpells: [
            "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", // electric shock
            "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", // flash shock
            "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", // incineration
            "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", // magic bolt
            "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", // satellite 
            "b26bd592-a809-fcb4-892f-8ae96ca54a4b" // spirit
        ]
    },
    {
        id: "c4e1f3d2-F8b4-4d3e-9e2a-1b5f6c7d8e9f",
        name: "Armageddon",
        family: SpellFamily.Utility,
        compatibleSpells: [
            "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809" // flash shock
        ]
    },
    {
        id: "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6",
        name: "blizzard",
        family: SpellFamily.NaturesWrath,
        compatibleSpells: [
            "001ed428-7728-4205-910a-2ebc523c1323", // fireball
            "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", // incineration
            "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", // meteor
            "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2", // thunderstorm
            "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d" // tsunami
        ]
    },
    {
        id: "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f",
        name: "cyclone",
        family: SpellFamily.NaturesWrath,
        compatibleSpells: [
            "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", // electric zone
            "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", // magic bolt
            "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", // satellite
            "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d" // tsunami
        ]
    },
    {
        id: "d592a809-fcb4-892f-8ae9-6ca54a4bb26b",
        name: "electric shock",
        family: SpellFamily.StormyClouds,
        compatibleSpells: [
            "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", // arcane ray
            "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", // electric zone
            "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", // energy bolt
            "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", // incineration
            "b26bd592-a809-fcb4-892f-8ae96ca54a4b", // spirit
            "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2" // thunderstorm
        ]
    },
    {
        id: "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d",
        name: "electric zone",
        family: SpellFamily.StormyClouds,
        compatibleSpells: [
            "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", // cyclone
            "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", // electric shock
            "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4", // frost nova
            "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", // satellite
            "d5e6f7g8-h9i0j-k1l2-m3n4-o5p61a2b3c4d" // shield
        ]
    },
    {
        id: "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j",
        name: "energy bolt",
        family: SpellFamily.EnergyEngineering,
        compatibleSpells: [
            "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", // electric shock
            "001ed428-7728-4205-910a-2ebc523c1323", // fireball
            "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", // magic bolt
            "d5e6f7g8-h9i0j-k1l2-m3n4-o5p61a2b3c4d", // shield
            "b26bd592-a809-fcb4-892f-8ae96ca54a4b" // spirit
        ]
    },
    {
        id: "001ed428-7728-4205-910a-2ebc523c1323",
        name: "fireball",
        family: SpellFamily.LordOfFire,
        compatibleSpells: [
            "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", // blizzard
            "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", // energy bolt
            "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", // magic bolt
            "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f" // satellite
        ]
    },
    {
        id: "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809",
        name: "Flash Shock",
        family: SpellFamily.StormyClouds,
        compatibleSpells: [
            "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", // arcane ray
            "c4e1f3d2-F8b4-4d3e-9e2a-1b5f6c7d8e9f", // armageddon
            "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h", // magic bolt
            "b26bd592-a809-fcb4-892f-8ae96ca54a4b" // spirit
        ]
    },
    {
        id: "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4",
        name: "Frost Nova",
        family: SpellFamily.NaturesWrath,
        compatibleSpells: [
            "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", // electric zone
            "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", // meteor
            "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d" // tsunami
        ]
    },
    {
        id: "6ca54a4b-b26b-d592-a809-fcb4892f8ae9",
        name: "Incineration",
        family: SpellFamily.LordOfFire,
        compatibleSpells: [
            "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", // arcane ray
            "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", // blizzard
            "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", // electric shock
            "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b", // lava zone
            "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f" // meteor
        ]
    },
    {
        id: "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b",
        name: "Lava Zone",
        family: SpellFamily.LordOfFire,
        compatibleSpells: [
            "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", // incineration
            "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", // meteor
            "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f" // fireball
        ]
    },
    {
        id: "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h",
        name: "magic bolt",
        family: SpellFamily.None,
        compatibleSpells: [
            "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", // arcane ray
            "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", // cyclone
            "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", // energy bolt
            "001ed428-7728-4205-910a-2ebc523c1323", // fireball
            "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", // flash shock
            "b26bd592-a809-fcb4-892f-8ae96ca54a4b" // spirit
        ]
    },
    {
        id: "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f",
        name: "meteor",
        family: SpellFamily.LordOfFire,
        compatibleSpells: [
            "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", // blizzard
            "6ca54a4b-b26b-d592-a809-fcb4892f8ae9", // incineration
            "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4", // frost nova
            "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b", // lava zone
            "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f", // satellite
            "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2" // thunderstorm
        ]
    },
    {
        id: "9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f",
        name: "satellite",
        family: SpellFamily.EnergyEngineering,
        compatibleSpells: [
            "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", // arcane ray
            "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", // cyclone
            "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", // electric zone
            "001ed428-7728-4205-910a-2ebc523c1323", // fireball 
            "3c4d5e6f-7g8h-9i0j-k1l2-m3n4o5p61a2b", // lava zone
            "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f" // meteor
        ]
    },
    {
        id: "d5e6f7g8-h9i0j-k1l2-m3n4-o5p61a2b3c4d",
        name: "shield",
        family: SpellFamily.Utility,
        compatibleSpells: [
            "5e6f7g8h-9i0j-k1l2-m3n4-o5p61a2b3c4d", // electric zone
            "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j" // energy bolt
        ]
    },
    {
        id: "b26bd592-a809-fcb4-892f-8ae96ca54a4b",
        name: "spirit",
        family: SpellFamily.EnergyEngineering,
        compatibleSpells: [
            "892f8ae9-6ca5-4a4b-b26b-d592a809fcb4", // arcane ray
            "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", // electric shock
            "k1l2m3n4-o5p6-1a2b-3c4d-5e6f7g8h9i0j", // energy bolt
            "fcb4892f-8ae9-6ca5-4a4b-b26bd592a809", // flash shock
            "k1l2-m3n4-o5p6-1a2b-3c4d5e6f7g8h" // magic bolt
        ]
    },
    {
        id: "f8b4-4d3e-9e2a-1b5f6c7d8e9f-c4e1f3d2",
        name: "thunderstorm",
        family: SpellFamily.StormyClouds,
        compatibleSpells: [
            "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", // blizzard
            "d592a809-fcb4-892f-8ae9-6ca54a4bb26b", // electric shock
            "7g8h9i0j-k1l2-m3n4-o5p6-1a2b3c4d5e6f" // meteor
        ]
    },
    {
        id: "6f7g8h9i-0j-k1l2-m3n4-o5p61a2b3c4d",
        name: "tsunami",
        family: SpellFamily.NaturesWrath,
        compatibleSpells: [
            "1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6", // blizzard
            "7g8h9i0j-k1l2m3n4o5p6-1a2b-3c4d-5e6f", // cyclone
            "o5p61a2b-3c4d-5e6f-7g8h-9i0jk1l2m3n4" // frost nova
        ]
    }
];