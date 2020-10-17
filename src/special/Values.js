/*
    Static or common values in our site should be placed here
    Created by: Ikasuu, Fall 2020
*/

//Latest version of GMS
export const version = 217; 
export const versionName = "Sengoku Returns: Asura War Update"

export const loadingImage = "https://maplestory.io/api/GMS/216/mob/2600302/render/stand";

//Image paths for our page headers
export const HeaderImageUrl = {
    library: `${process.env.PUBLIC_URL}/headers/grandis-library`,
    grandis: `${process.env.PUBLIC_URL}/headers/borderless`,
    fox: `${process.env.PUBLIC_URL}/headers/fox-valley`,
    verdel: `${process.env.PUBLIC_URL}/headers/verdel`,
    ristonia: `${process.env.PUBLIC_URL}/headers/ristonia`
};

export const classes = {
    explorers: [["hero","Hero"], ["paladin","Paladin"], ["dark-knight","Dark Knight"], ["bishop", "Bishop"], ["arch-mage-ice-lightning", "Arch Mage (Ice, Lightning)"], ["arch-mage-fire-poison", "Arch Mage (Fire, Poison)"], ["dual-blade", "Dual Blade"], ["shadower", "Shadower"], ["night-lord", "Night Lord"], ["pathfinder", "Pathfinder"], ["marksman", "Marksman"], ["bowmaster", "Bowmaster"], ["cannoneer", "Cannoneer"], ["buccaneer", "Buccanner"], ["corsair", "Corsair"]],
    cygnusKnights: [["dawn-warrior", "Dawn Warrior"], ["thunder-breaker","Thunder Breaker"], ["night-walker", "Night Walker"], ["wind-archer", "Wind Archer"], ["blaze-wizard", "Blaze Wizard"], ["mihile", "Mihile"]],
    heroes: [["mercedes", "Mercedes"], ["aran", "Aran"], ["phantom", "Phantom"], ["luminous", "Luminous"], ["evan", "Evan"], ["shade", "Shade"]],
    resistance: [["battle-mage", "Battle Mage"], ["blaster", "Blaster"], ["mechanic", "Mechanic"], ["wild-hunter", "Wild Hunter"], ["xenon", "Xenon"], ["demon-slayer", "Demon Slayer"], ["demon-avenger", "Demon Avenger"]],
    nova: [["angelic-buster", "Angelic Buster"], ["kaiser", "Kaiser"], ["cadena", "Cadena"]],
    sengoku: [["kanna", "Kanna"], ["hayato", "Hayato"]],
    flora: [["adele", "Adele"], ["ark", "Ark"], ["illium", "Illium"]],
    other: [["hoyoung", "Hoyoung"], ["kinesis", "Kinesis"], ["zero", "Zero"], ["beast-tamer", "Beast Tamer"]]
}

//Weapons for class overviews, contains icon path and formatted name
export const weapons = {
    oneHSword: [`https://maplestory.io/api/GMS/${version}/item/1302005/icon`, "One-Handed Sword"],
    oneHAxe: [`https://maplestory.io/api/GMS/${version}/item/1312006/icon`, "One-Handed Axe"],
    oneHBlunt: [`https://maplestory.io/api/GMS/${version}/item/1322223/icon`, "One-Handed Blunt Weapon"],
    wand: [`https://maplestory.io/api/GMS/${version}/item/1372009/icon`, "Wand"],
    staff: [`https://maplestory.io/api/GMS/${version}/item/1382035/icon`, "Staff"],
    dagger: [`https://maplestory.io/api/GMS/${version}/item/1332011/icon`, "Dagger"],
    shiningRod: [`https://maplestory.io/api/GMS/${version}/item/1212008/icon`, "Shining Rod"],
    soulShooter: [`https://maplestory.io/api/GMS/${version}/item/1222005/icon`, "Soul Shooter"],
    twoHSword: [`https://maplestory.io/api/GMS/${version}/item/1402002/icon`, "Two-Handed Sword"],
    twoHAxe: [`https://maplestory.io/api/GMS/${version}/item/1412065/icon`, "Two-Handed Axe"],
    twoHBlunt: [`https://maplestory.io/api/GMS/${version}/item/1422171/icon`, "Two-Handed Blunt Weapon"],
    spear: [`https://maplestory.io/api/GMS/${version}/item/1432187/icon`, "Spear"],
    polearm: [`https://maplestory.io/api/GMS/${version}/item/1442242/icon`, "Polearm"],
    bow: [`https://maplestory.io/api/GMS/${version}/item/1452226/icon`, "Bow"],
    crossbow: [`https://maplestory.io/api/GMS/${version}/item/1462213/icon`, "Crossbow"],
    dualBowguns: [`https://maplestory.io/api/GMS/${version}/item/1522012/icon`, "Dual Bowguns"],
    claw: [`https://maplestory.io/api/GMS/${version}/item/1472053/icon`, "Claw"],
    cane: [`https://maplestory.io/api/GMS/${version}/item/1362013/icon`, "Cane"],
    knuckle: [`https://maplestory.io/api/GMS/${version}/item/1482011/icon`, "Knuckle"],
    gun: [`https://maplestory.io/api/GMS/${version}/item/1492004/icon`, "Gun"],
    handCannon: [`https://maplestory.io/api/GMS/${version}/item/1532010/icon`, "Hand Cannon"],
    whipBlade: [`https://maplestory.io/api/GMS/${version}/item/1242010/icon`, "Whip Blade"],
    desperado: [`https://maplestory.io/api/GMS/${version}/item/1232007/icon`, "Desperado"],
    katana: [`https://maplestory.io/api/GMS/${version}/item/1542003/icon`, "Katana"],
    fanKanna: [`https://maplestory.io/api/GMS/${version}/item/1552015/icon`, "Fan"],
    scepter: [`https://maplestory.io/api/GMS/${version}/item/1252006/icon`, "Scepter"],
    psyLimiter: [`https://maplestory.io/api/GMS/${version}/item/1262011/icon`, "Psy-limiter"],
    armCannon: [`https://maplestory.io/api/GMS/${version}/item/1582025/icon`, "Arm Cannon"],
    heavySword: [`https://maplestory.io/api/GMS/${version}/item/1562007/icon`, "Beta - Heavy Sword"],
    longSword: [`https://maplestory.io/api/GMS/${version}/item/1572007/icon`, "Alpha - Long Sword"],
    chain: [`https://maplestory.io/api/GMS/${version}/item/1272005/icon`, "Chain"],
    lucentGauntlet: [`https://maplestory.io/api/GMS/${version}/item/1282028/icon`, "Lucent Gauntlet"],
    ancientBow: [`https://maplestory.io/api/GMS/${version}/item/1592005/icon`, "Ancient Bow"],
    ritualFan: [`https://maplestory.io/api/GMS/${version}/item/1292036/icon`, "Ritual Fan"],
    bladecaster: [`https://maplestory.io/api/GMS/${version}/item/1213026/icon`, "Bladecaster"]
};

//Secondary Weapons for class overviews, contains icon path and formatted name
export const secondaryWeapons = {
    warShield: [`https://maplestory.io/api/GMS/${version}/item/1092012/icon`, "Shield"],
    mageShield: [`https://maplestory.io/api/GMS/${version}/item/1092021/icon`, "Shield"],
    thiefShield: [`https://maplestory.io/api/GMS/${version}/item/1092050/icon`, "Shield"],
    medallion: [`https://maplestory.io/api/GMS/${version}/item/1352202/icon`, "Medallion"],
    rosary: [`https://maplestory.io/api/GMS/${version}/item/1352212/icon`, "Rosary"],
    ironChain: [`https://maplestory.io/api/GMS/${version}/item/1352222/icon`, "Iron Chain"],
    magicBookB: [`https://maplestory.io/api/GMS/${version}/item/1352252/icon`, "Magic Book"],
    magicBookI: [`https://maplestory.io/api/GMS/${version}/item/1352242/icon`, "Magic Book"],
    magicBookF: [`https://maplestory.io/api/GMS/${version}/item/1352232/icon`, "Magic Book"],
    arrowFletching: [`https://maplestory.io/api/GMS/${version}/item/1352262/icon`, "Arrow Fletching"],
    bowThimble: [`https://maplestory.io/api/GMS/${version}/item/1352272/icon`, "Bow Thimble"],
    charm: [`https://maplestory.io/api/GMS/${version}/item/1352292/icon`, "Charm"],
    scabbard: [`https://maplestory.io/api/GMS/${version}/item/1352282/icon`, "Dagger Scabbard"],
    katara: [`https://maplestory.io/api/GMS/${version}/item/1342007/icon`, "Katara"],
    wristband: [`https://maplestory.io/api/GMS/${version}/item/1352902/icon`, "Wrist Band"],
    farsight: [`https://maplestory.io/api/GMS/${version}/item/1352912/icon`, "Far Sight"],
    powderKeg: [`https://maplestory.io/api/GMS/${version}/item/1352922/icon`, "Powder Keg"],
    fist: [`https://maplestory.io/api/GMS/${version}/item/1352823/icon`, "Fist"],
    martialFist: [`https://maplestory.io/api/SEA/189/item/1352824/icon`, "Martial Fist"],
    jewel: [`https://maplestory.io/api/GMS/${version}/item/1352972/icon`, "Jewel"],
    soulShield: [`https://maplestory.io/api/GMS/${version}/item/1098003/icon`, "Soul Shield"],
    mass: [`https://maplestory.io/api/GMS/${version}/item/1352932/icon`, "Mass"],
    document: [`https://maplestory.io/api/GMS/${version}/item/1352942/icon`, "Document"],
    magicArrow: [`https://maplestory.io/api/GMS/${version}/item/1352003/icon`, "Magic Arrow"],
    card: [`https://maplestory.io/api/GMS/${version}/item/1352103/icon`, "Card"],
    orb: [`https://maplestory.io/api/GMS/${version}/item/1352403/icon`, "Orb"],
    foxMarble: [`https://maplestory.io/api/GMS/${version}/item/1353103/icon`, "Fox Marble"],
    charge: [`https://maplestory.io/api/GMS/${version}/item/1353403/icon`, "Charge"],
    magicMarble: [`https://maplestory.io/api/GMS/${version}/item/1352952/icon`, "Magic Marble"],
    arrowhead: [`https://maplestory.io/api/GMS/${version}/item/1352962/icon`, "Arrowhead"],
    magnum: [`https://maplestory.io/api/GMS/${version}/item/1352703/icon`, "Magnum"],
    demonAegis: [`https://maplestory.io/api/GMS/${version}/item/1099004/icon`, "Demon Aegis"],
    coreController: [`https://maplestory.io/api/GMS/${version}/item/1353004/icon`, "Core Controller"],
    dragonEssence: [`https://maplestory.io/api/GMS/${version}/item/1352503/icon`, "Dragon Essence"],
    warpForge: [`https://maplestory.io/api/GMS/${version}/item/1353303/icon`, "Warp Forge"],
    soulRing: [`https://maplestory.io/api/GMS/${version}/item/1352604/icon`, "Soul Ring"],
    fanKanna: [`https://maplestory.io/api/GMS/${version}/item/1552015/icon`, "Haku Fan"],
    kodachi: [`https://maplestory.io/api/GMS/${version}/item/1352803/icon`, "Kodachi"],
    whistle: [`https://maplestory.io/api/GMS/${version}/item/1352813/icon`, "Whistle"],
    chessPiece: [`https://maplestory.io/api/GMS/${version}/item/1353203/icon`, "Chess Piece"],
    lucentWings: [`https://maplestory.io/api/GMS/${version}/item/1353503/icon`, "Lucent Wings"],
    abyssalPath: [`https://maplestory.io/api/GMS/${version}/item/1353603/icon`, "Abyssal Path"],
    relic: [`https://maplestory.io/api/GMS/${version}/item/1353703/icon`, "Relic"],
    fanTassel: [`https://maplestory.io/api/GMS/${version}/item/1353803/icon`, "Fan Tassel"],
    bladebinder: [`https://maplestory.io/api/GMS/${version}/item/1354003/icon`, "Bladebinder"]
};

//Ammo for class overviews, contains icon path and formatted name
export const weaponConsumable = {
    arrowB: [`https://maplestory.io/api/GMS/${version}/item/2060013/icon`, "Arrows"],
    arrowC: [`https://maplestory.io/api/GMS/${version}/item/2061012/icon`, "Arrows"],
    throwingStar: [`https://maplestory.io/api/GMS/${version}/item/2070018/icon`, "Throwing Stars"],
    bullet: [`https://maplestory.io/api/GMS/${version}/item/2330005/icon`, "Bullets"]
};

//Common 5th Job Skills
export const commonFifth = {
    goddessBlessing: {
        "name": "Maple World Goddess Blessing",
        "shortDesc": "MP Cost: 500, Increases stat bonuses for class-wide buff skills like Maple Warrior by 350% for 60 sec, Damage: +17% Cooldown: 180 sec",
        "id": 400001042,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/f/f3/Skill_Maple_World_Goddess%27s_Blessing.png/revision/latest?cb=20191122065037"],
        "animations": ["https://orangemushroom.files.wordpress.com/2019/06/maple-world-goddess-blessing-effect.gif?w=600"],
        "type": "Buff",
        "desc": "Increases the effects of <img src='https://vignette.wikia.nocookie.net/maplestory/images/a/a1/Skill_Maple_Warrior.png/revision/latest?cb=20100602085809' alt='Skill Maple Warrior' width='32' height='32'> greatly and grants increased %Damage"
    },
    expWarrior:{
        "name": "Blitz Shield",
        "shortDesc": "HP Cost: 5% of Max HP, Creates a protective shield that blocks 20% of your Max HP as damage for 5 sec. When the shield expires or the skill is activated again, it detonates and inflicts 1000% damage to 12 enemies 5 times.Your shield must be active for at least 2 sec before it can be detonated. Cooldown: 15 sec",
        "id": 400001010,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/8/80/Skill_Blitz_Shield.png/revision/latest?cb=20170629201925"],
        "animations": ["https://orangemushroom.files.wordpress.com/2016/12/blitz-shield-effect.gif?w=267&h=252"],
        "type": "Buff",
        "desc": "Creates a shield based on your %Max HP that blocks damage",
        "details": [
            "When the shield expires or the Skill Key is pressed, the shield explodes damaging nearby enemies <ul> <li>Shield must be active for at least 2 secs before it can be detonated</li> </ul>"
        ]
    },
    expMagician:{
        "name": "Unreliable Memory",
        "shortDesc": "MP Cost: 150, Uses one random skill or active Hyper Skill from 1st to 4th jobs. Ignores MP cost and cooldown of selected skill. Cannot trigger unlearned skills. Cooldown: 10 sec [Passive Effect: INT +25]",
        "id": 400001021,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/0/05/Skill_Unreliable_Memory.png/revision/latest?cb=20170629202924"],
        "animations": ["https://orangemushroom.files.wordpress.com/2016/12/unstable-memorize-effect.gif?w=600"],
        "type": "Active",
        "desc": "Uses one random skill or active Hyper Skill from 1st to 4th Job",
        "details": [
            "Ignores MP Cost and cooldowns",
            "Cannot trigger unlearned skills",
            "<strong>[Passive]</strong>: Grants flat INT"
        ]
    },
    expBowman: {
        "name": "Fury of the Wild",
        "shortDesc": "MP Cost: 800, Duration: 40 sec, Max Enemies Hit: 10, Damage: 825%, Number of Attacks: 7 Cooldown: 108 sec",
        "id": 400001012,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/3/35/Skill_Fury_of_the_Wild.png/revision/latest?cb=20190615205233"],
        "animations": ["https://media3.giphy.com/media/llsZlPVsm7sAZFcb8i/giphy.gif"],
        "type": "Summon",
        "desc": "Transforms Phoenix into a more powerful form",
        "details": [
            "Can only be used when <img src='https://vignette.wikia.nocookie.net/maplestory/images/5/58/Skill_Phoenix.png/revision/latest?cb=20110502142452' alt='Skill Phoenix' width='32' height='32'> is active"
        ]
    },
    expThief: {
        "name": "Shadow Walker",
        "shortDesc": "MP Cost: 850, Duration: 30 sec. Initiates a form of stealth that is not canceled by skills or attacks. Final Damage increased by 15% added on top of Advanced Dark Sight's Final Damage bonus. Cooldown: 195 sec",
        "id": 400001013,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/f/fe/Skill_Shadow_Walker.png/revision/latest?cb=20170629203944"],
        "animations": ["https://orangemushroom.files.wordpress.com/2016/12/ultimate-dark-sight-effect.gif?w=600"],
        "type": "Buff",
        "desc": "Activates a special <img width='32' height='32' src='https://vignette.wikia.nocookie.net/maplestory/images/d/dd/Skill_Dark_Sight.png/revision/latest?cb=20100308114826' alt='Skill Dark Sight'> where attacking will not cancel the buff",
        "details": [
            "Additionally increases %Final Damage added on top of <img width='32' height='32' src='https://vignette.wikia.nocookie.net/maplestory/images/9/9d/Skill_Advanced_Dark_Sight.png/revision/latest?cb=20100615145647' alt='Skill Advanced Dark Sight'>"
        ]
    },
    weaponAura:{
        "name": "Weapon Aura",
        "shortDesc": "HP Cost: 10%, Ignores 15% Enemy DEF for 130 sec, Final Damage: +5%. Aura Wave (Usable Every 5 sec) - Using certain offensive skills will generate waves, inflicting 1000% damage on up to 10 enemies 6 times. Cooldown: 180 Sec.",
        "id": 400011000,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/3/3a/Skill_Weapon_Aura.png/revision/latest?cb=20161204065742"],
        "animations": ["https://orangemushroom.files.wordpress.com/2016/07/aura-weapon-effect.gif?w=600"],
        "type": "Buff Attack",
        "desc": "Causes your attacks to periodically create a damaging wave"
    },
    impenetrableSkin:{
        "name": "Impenetrable Skin",
        "shortDesc": "HP Cost: 5% of Max HP, Duration: 35 sec, Knockdown Immunity and Status Resistance: +75 Damage increases +3% when hit, Max Stack: 10 times Cooldown: 240 sec [Passive Effects - STR: +25, Max HP: +1250]",
        "id": 400011066,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/7/77/Skill_Impenetrable_Skin.png/revision/latest?cb=20171201185329"],
        "animations": ["https://orangemushroom.files.wordpress.com/2017/07/body-of-steel-effect.gif?w=600"],
        "type": "Buff",
        "desc": "While active you gain increased Abnormal Status Resistance and 100% Knockback Resistance. As well, when you are hit you gain a stacking %Damage buff"
    },
    manaOverload:{
        "name": "Mana Overload",
        "shortDesc": "Consumes +2% Max MP to increase the Final Damage of all your skills (excluding summons) by 10% Consumes 0.5% Max HP for jobs without MP Can be toggled On/Off Cooldown: 35 sec",
        "id": 400021000,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/6/67/Skill_Mana_Overload.png/revision/latest?cb=20161018183739"],
        "animations": ["https://orangemushroom.files.wordpress.com/2016/07/overload-mana-effect.gif?w=396"],
        "type": "Buff",
        "desc": "When toggled, increases the %Final Damage of all your skills (excluding summons)",
        "details": [
            "Consumes %Max MP every second when toggled<ul><li>Consumes %Max HP for classes without MP</li></ul>"
        ]
    },
    etherealForm:{
        "name": "Ethereal Form",
        "shortDesc": "HP Cost: 1000, Duration: 3 sec, Gain Knockdown Immunity and lose 7750 MP instead of taking damage, when MP is 0 you lose 1750 HP Cooldown: 60 sec",
        "id": 400021060,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/0/0e/Skill_Ethereal_Form.png/revision/latest?cb=20171203075802"],
        "animations": ["https://orangemushroom.files.wordpress.com/2017/07/ethereal-form-effect.gif?w=600"],
        "type": "Buff",
        "desc": "While active, you gain 100% Knockback Resistance and lose a fixed amount of MP instead of taking damage",
        "details": [
            "When MP is 0 you take a fixed amount of HP damage"
        ]
    },
    guidedArrow: {
        "name": "Guided Arrow",
        "shortDesc": "MP Cost: 350, Duration: 60 sec, Arrow Damage: 800% damage 90 times to 1 nearby enemy when in combat Cooldown: 60 sec",
        "id": 400031000,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/c/c6/Skill_Guided_Arrow.png/revision/latest?cb=20161204065740"],
        "animations": ["https://orangemushroom.files.wordpress.com/2016/07/guided-arrow-effect.gif?w=600"],
        "type": "Summon",
        "desc": "Creates a spirit arrow that seeks and attacks nearby enemies",
        "details": [
            "Unaffected by Damage Reflect"
        ]
    },
    viciousShot: {
        "name": "Vicious Shot",
        "shortDesc": "MP Cost: 500, Duration: 30 sec, Allows Critical Rate to exceed 100% and Critical Damage to increase by 45% of Critical Rate. The attack's additional Critical Rate is not applied. Cooldown: 120 sec",
        "id": 400031023,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/9/90/Skill_Vicious_Shot.png/revision/latest?cb=20171203075957"],
        "animations": ["https://orangemushroom.files.wordpress.com/2017/07/critical-reinforce-effect.gif?w=600"],
        "type": "Buff",
        "desc": "While active, allows your %Crit Rate to exceed 100% and increases your %Crit Rate depending on how much %Crit Rate you have"
    },
    venomBurst: {
        "name": "Venom Burst",
        "shortDesc": "MP Cost: 300, Consumes all active Damage-over-Time stacks on up to 12 poisoned enemies in range and instantly inflicts 100% of their remaining damage plus an additional 1000% damage 6 times Additional damage is +15% per remaining second of consumed DoT stacks up to 5 Afterwards, spreads the original DoT damage to up to 10 nearby enemies Cooldown: 8 sec [Passive Effects - Bonus DoT Chance: 50% to deal 310% damage every 1 sec for 8 sec]",
        "id": 400041000,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Venom_Burst.png/revision/latest?cb=20161204065741"],
        "animations": ["https://orangemushroom.files.wordpress.com/2016/07/venom-burst-effect.gif?w=600"],
        "type": "Attack",
        "desc": "Consumes all active Damage-over-Time stacks on nearby enemies to instantly deal the remaining damage plus some additional %Final Damage",
        "details": [
            "When activated, the original DoT will spread to nearby enemies",
            "<strong>[Passive]</strong>: Permanently adds a bonus chance to apply a DoT effect to enemies when attacking"
        ]
    },
    lastResort: {
        "name": "Last Resort",
        "shortDesc": "HP Cost: 10% of Max HP, reduces Avoidability (including Bonus Evasion) and increases Final Damage for 30 sec, Hit Damage increased if attacked within a certain percentage of your max HP. Enters 2nd Stage with remaining duration being reduced to 50% when skill is used again during 1st Stage, skill ends when used again during 2nd Stage. 1st Stage - Avoidability: -20%, Hit Damage: +10%, Final Damage: +12% 2nd Stage - Avoidability: -90%, Hit Damage: +40%, Final Damage: +35% Cooldown: 78 sec [Passive Effect - ATT Power: +25]",
        "id": 400041032,
        "icons": ["https://vignette.wikia.nocookie.net/maplestory/images/3/3f/Skill_Last_Resort.png/revision/latest?cb=20171203090611"],
        "animations": ["https://orangemushroom.files.wordpress.com/2017/07/ready-to-die-effect-stage-1.gif?w=700&h="],
        "type": "Buff",
        "desc": "Reduces your %Avoidability while increases %Final Damage and %Damage Taken from %Max HP attacks ",
        "details": [
            "There are two possible stages of the buff, pressing the Skill Key again will go to the second stage which increases the effects of both the debuff and buff portions of the Skill",
            "<strong>[Passive]</strong>: Permanently grants flat Attack"
        ]
    }
};

export default HeaderImageUrl;