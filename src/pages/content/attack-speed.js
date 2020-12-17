import React from 'react';
import '../../css/page.css';

function AttackSpeed() {
    return (
        <div>
        Modified from: <a style={{color: '#03afe7'}} href="http://www.basilmarket.com/General-Attack-Speed-101-Wiki-303" target="_blank" rel="noopener noreferrer">http://www.basilmarket.com/General-Attack-Speed-101-Wiki-303</a>
        <h2><strong>Attack Speed of your Weapon</strong></h2>
        <hr />
        Each Weapon in the game has an Attack Speed value in their description as follows:
        Faster &gt; Fast &gt; Normal &gt; Slow &gt; Slower
        The values for each Attack Speed can be classified as such:
        <ul>
            <li>Faster (3)</li>
            <li>Fast (4)</li>
            <li>Fast (5)</li>
            <li>Normal (6)</li>
            <li>Slow (7)</li>
            <li>Slow (8)</li>
            <li>Slower (9)</li>
        </ul>
        Fast and Slow have two values to them because there are certain weapons that have the same Attack Speed label but may be noticeably faster than the other
        An example of this is the Lv. 80 <img src="https://maplestory.io/api/GMS/210.1.1/item/1442019/icon" data-v-e6b15fb6 /> Eclipse polearm weapon. Like most other polearms, it is labeled as a Slow speed weapon, but those who have used this weapon can tell that the Eclipse polearm attacks faster than other Slow speed polearms. Thus, the Eclipse polearm is designated as Slow (7), while other Slow speed polearms are labeled Slow (8)
        There are also 3 attack speed values that exceed Faster (3), which are:
        <ul>
            <li>Fastest (0)</li>
            <li>Fastest (1)</li>
            <li>Fastest (2)</li>
        </ul>
        Currently, no weapon comes with the above 3 Fastest attack speed values
        <strong>[Note]: </strong>Hurricane-type / Key-down skills like <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/1/18/Skill_Hurricane.png/revision/latest?cb=20110502142405" alt="Skill Hurricane" data-image-key="Skill_Hurricane.png" data-image-name="Skill Hurricane.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/1/18/Skill_Hurricane.png/revision/latest?cb=20110502142405" width={32} height={32} /> <a style={{color: '#03afe7'}} href="https://maplestory.fandom.com/wiki/Hurricane" target="_blank" rel="noopener noreferrer">Hurricane</a>, <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/a/a2/Skill_Mille_Aiguilles.png/revision/latest?cb=20111226182135" alt="Skill Mille Aiguilles" data-image-key="Skill_Mille_Aiguilles.png" data-image-name="Skill Mille Aiguilles.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/a/a2/Skill_Mille_Aiguilles.png/revision/latest?cb=20111226182135" width={32} height={32} /> <a style={{color: '#03afe7'}} href="https://maplestory.fandom.com/wiki/Mille_Aiguilles" target="_blank" rel="noopener noreferrer">Mille Aiguilles</a>, <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/7/70/Skill_Ishtar%27s_Ring.png/revision/latest?cb=20110810053956" alt="Skill Ishtar's Ring" data-image-key="Skill_Ishtar%27s_Ring.png" data-image-name="Skill Ishtar's Ring.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/7/70/Skill_Ishtar%27s_Ring.png/revision/latest?cb=20110810053956" width={32} height={32} /> <a style={{color: '#03afe7'}} href="https://maplestory.fandom.com/wiki/Ishtar's_Ring" target="_blank" rel="noopener noreferrer">Ishtar's Ring</a>, <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Beam_Dance.png/revision/latest?cb=20121217234717" alt="Skill Beam Dance" data-image-key="Skill_Beam_Dance.png" data-image-name="Skill Beam Dance.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Beam_Dance.png/revision/latest?cb=20121217234717" width={32} height={32} /> <a style={{color: '#03afe7'}} href="https://maplestory.fandom.com/wiki/Beam_Dance" target="_blank" rel="noopener noreferrer">Beam Dance</a>, or <img src="https://vignette.wikia.nocookie.net/maplestory/images/7/71/Skill_Wild_Arrow_Blast.png/revision/latest?cb=20110515144423" alt="Skill Wild Arrow Blast" /> <a href="https://maplestory.fandom.com/wiki/Wild_Arrow_Blast" target="_blank" rel="noopener noreferrer">Wild Arrow Blast</a> are not affected by Attack Speed
        <h2><strong>Weapon Attack Speeds
            </strong>
        </h2>
        <hr />
        <h3>Fast (4)</h3>
        <ul>
            <li>
                Dagger [1H] (Fast 4)
                <ul>
                    <li>Sweetwater is (Faster 3)</li>
                </ul>
            </li>
            <li>
                Claw [2H] (Fast 4)
                <ul>
                    <li>Genesis is (Fast 5)</li>
                </ul>
            </li>
            <li>Chain [1H] (Fast 4)</li>
            <li>Ritual Fan [1H] (Fast 4)</li>
            <li>Bladecaster / Tuner [1H] (Fast 4)</li>
        </ul>
        <h3>Fast (5)</h3>
        <ul>
            <li>Sword [1H] (Fast 5)</li>
            <li>
                Axe [1H] (Fast 5)
                <ul>
                    <li>Sweetwater Axe is (Normal 6)</li>
                </ul>
            </li>
            <li>
                Blunt Weapon [1H] (Fast 5)
                <ul>
                    <li>Sweetwater Mace is (Normal 6)</li>
                </ul>
            </li>
            <li>
                Soul Shooter [1H] (Fast 5)
                <ul>
                    <li>Sweetwater is (Normal 6)</li>
                </ul>
            </li>
            <li>
                Polearm [2H] (Fast 5)
                <ul>
                    <li>Sweetwater is (Normal 6)</li>
                </ul>
            </li>
            <li>Cane [1H] (Fast 5)</li>
            <li>Knuckle [2H] (Fast 5)</li>
            <li>Gun [2H] (Fast 5)</li>
            <li>Whip Blade [1H] (Fast 5)</li>
            <li>Katana [2H] (Fast 5)</li>
            <li>Arm Cannon [2H] (Fast 5)</li>
        </ul>
        <h3>Normal (6)</h3>
        <ul>
            <li>Wand [1H] (Normal 6)</li>
            <li>Shining Rod [1H] (Normal 6)</li>
            <li>Sword [2H] (Normal 6)</li>
            <li>Axe [2H] (Normal 6)</li>
            <li>Blunt Weapon [2H] (Normal 6)</li>
            <li>Spear [2H] (Normal 6)</li>
            <li>Bow [2H] (Normal 6)</li>
            <li>Crossbow [2H] (Normal 6)</li>
            <li>Dual Bowguns [2H] (Normal 6)</li>
            <li>Desperado [1H] (Normal 6)</li>
            <li>Scepter [1H] (Normal 6)</li>
            <li>Psy-limiter [1H] (Normal 6)</li>
            <li>Alpha Long Sword [1H] (Normal 6)</li>
            <li>Lucent Gauntlet [1H] (Normal 6)</li>
            <li>Ancient Bow [1H] (Normal 6)</li>
        </ul>
        <h3>Slow (8)</h3>
        <ul>
            <li>
                Staff [1H] (Slow 8)
                <ul>
                    <li>Elemental Staves is (Fast 4)</li>
                    <li>ACS Staff and Genesis is (Normal 6)</li>
                </ul>
            </li>
            <li>Hand Cannon [2H] (Slow 8)</li>
            <li>
                Kanna Fan [2H] (Slow 8)
                <ul>
                    <li>ACS and Genesis is (Normal 6)</li>
                </ul>
            </li>
            <li>Beta Heavy Sword [1H] (Slow 8)</li>
        </ul>
        <h2><strong>Weapon Boosting Skills and Sources</strong></h2>
        <hr />
        All classes have a standard <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/4/48/Skill_Polearm_Booster.png/revision/latest?cb=20100603074001" alt="Skill Polearm Booster" data-image-key="Skill_Polearm_Booster.png" data-image-name="Skill Polearm Booster.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/4/48/Skill_Polearm_Booster.png/revision/latest?cb=20100603074001" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Magic_Booster_%28Evan%29.png/revision/latest?cb=20100531000939" alt="Skill Magic Booster (Evan)" data-image-key="Skill_Magic_Booster_%28Evan%29.png" data-image-name="Skill Magic Booster (Evan).png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Magic_Booster_%28Evan%29.png/revision/latest?cb=20100531000939" width={32} height={32} /> Weapon Booster skill. Most Booster skills increase your attack speed by +2 stages, but some only increases by +1 stage (i.e. <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/b/b6/Skill_Melody_Cross.png/revision/latest?cb=20120731153256" alt="Skill Melody Cross" data-image-key="Skill_Melody_Cross.png" data-image-name="Skill Melody Cross.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/b/b6/Skill_Melody_Cross.png/revision/latest?cb=20120731153256" width={32} height={32} /> Angelic Buster's <a style={{color: '#03afe7'}} href="https://maplestory.fandom.com/wiki/Melody_Cross" target="_blank" rel="noopener noreferrer">Melody Cross</a>)
        A few classes have skills other than their typical weapon boosting skill that further that boosts their attack speed (i.e. Buccaneer or Thunder Breaker's <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Speed_Infusion.png/revision/latest?cb=20110508020039" alt="Skill Speed Infusion" data-image-key="Skill_Speed_Infusion.png" data-image-name="Skill Speed Infusion.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Speed_Infusion.png/revision/latest?cb=20110508020039" width={32} height={32} /> <a style={{color: '#03afe7'}} href="https://maplestory.fandom.com/wiki/Speed_Infusion" target="_blank" rel="noopener noreferrer">Speed Infusion</a> provides another +2 AS, a Kaiser using <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/4/4d/Skill_Dragon_Link.png/revision/latest?cb=20160609063015" alt="Skill Dragon Link" data-image-key="Skill_Dragon_Link.png" data-image-name="Skill Dragon Link.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/4/4d/Skill_Dragon_Link.png/revision/latest?cb=20160609063015" width={32} height={32} /> key-command skills when their Dragon Gauge is filled provides another +2 AS, etc.)
        As well, there are sources beyond your class's skills that you can obtain to further increase your Attack Speed (i.e. +1 AS Inner Ability +1 AS from <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Speed_Infusion.png/revision/latest?cb=20110508020039" alt="Skill Speed Infusion" data-image-key="Skill_Speed_Infusion.png" data-image-name="Skill Speed Infusion.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Speed_Infusion.png/revision/latest?cb=20110508020039" width={32} height={32} /> <a style={{color: '#03afe7'}} href="https://maplestory.fandom.com/wiki/Decent_Speed_Infusion" target="_blank" rel="noopener noreferrer">Decent Speed Infusion</a>, +1 AS from <img className src="https://vignette.wikia.nocookie.net/maplestory/images/1/1e/Use_Extreme_Green_Potion.png/revision/latest?cb=20170206074332" alt="Use Extreme Green Potion" data-image-key="Use_Extreme_Green_Potion.png" data-image-name="Use Extreme Green Potion.png" width={22} height={31} /> <a style={{color: '#03afe7'}} href="https://maplestory.fandom.com/wiki/Extreme_Green_Potion" target="_blank" rel="noopener noreferrer">Extreme Green Potion</a> from Monster Park, etc.)
        <h2><strong>Calculating your final attack speed</strong></h2>
        <hr />
        The actual math in calculating your final Attack Speed is very easy. You just take your weapon's Attack Speed then subtract it by the total Attack Speed boosts you get from your skills and sources
        <h3>Examples:</h3>
        A Dark Knight wielding a <img src="https://maplestory.io/api/GMS/210.1.1/item/1432167/icon" data-v-e6b15fb6 /> Fafnir Brionak, which is Normal (6). The Dark Knight uses their <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/a/a5/Skill_Weapon_Booster_%28Spearman%29.png/revision/latest?cb=20110420132354" alt="Skill Weapon Booster (Spearman)" data-image-key="Skill_Weapon_Booster_%28Spearman%29.png" data-image-name="Skill Weapon Booster (Spearman).png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/a/a5/Skill_Weapon_Booster_%28Spearman%29.png/revision/latest?cb=20110420132354" width={32} height={32} /> Weapon Booster skill that gives +2 AS, plus he has <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Speed_Infusion.png/revision/latest?cb=20110508020039" alt="Skill Speed Infusion" data-image-key="Skill_Speed_Infusion.png" data-image-name="Skill Speed Infusion.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Speed_Infusion.png/revision/latest?cb=20110508020039" width={32} height={32} /> Decent Speed Infusion that gives +1 AS (for a total of +3 AS).
        Thus, their final attack speed is: Normal (6) - (+3 AS) = Faster (3).
        A Cannoneer with a <img src="https://maplestory.io/api/GMS/210.1.1/item/1532098/icon" data-v-e6b15fb6 /> Fafnir Lost Cannon, which is Slow (8). The Cannoneer gets +2 AS from their <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/cd/Skill_Cannon_Booster.png/revision/latest?cb=20110605012635" alt="Skill Cannon Booster" data-image-key="Skill_Cannon_Booster.png" data-image-name="Skill Cannon Booster.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/cd/Skill_Cannon_Booster.png/revision/latest?cb=20110605012635" width={32} height={32} /> Weapon Booster skill, +1 AS from the <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/7/71/Skill_Reinforced_Cannon.png/revision/latest?cb=20110606022210" alt="Skill Reinforced Cannon" data-image-key="Skill_Reinforced_Cannon.png" data-image-name="Skill Reinforced Cannon.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/7/71/Skill_Reinforced_Cannon.png/revision/latest?cb=20110606022210" width={32} height={32} /> Reinforced Cannon skill, +1 AS from the <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/7/76/Skill_Cannon_Overload.png/revision/latest?cb=20110608083829" alt="Skill Cannon Overload" data-image-key="Skill_Cannon_Overload.png" data-image-name="Skill Cannon Overload.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/7/76/Skill_Cannon_Overload.png/revision/latest?cb=20110608083829" width={32} height={32} /> Cannon Overload skill, +1 AS from the <img src="https://maplestory.io/api/GMS/210.1.1/item/2023126/icon" data-v-e6b15fb6 /> Extreme Green Potion (for a total of +5 AS).
        Thus, their final attack speed is: Slow (8) - (+5 AS) = Faster (3).
        However, there TWO speed caps in place to prevent players from going crazy over attack speed
        <h2>Speed Cap 1 - The Soft Speed Cap</h2>
        <hr />
        The first speed cap is the Soft Speed Cap, which is Fastest (2).
        Most attack speed boosting sources and skills cannot bypass the soft speed cap, including, but not limited to the following:
        <ul>
            <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Speed_Infusion.png/revision/latest?cb=20110508020039" alt="Skill Speed Infusion" data-image-key="Skill_Speed_Infusion.png" data-image-name="Skill Speed Infusion.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Speed_Infusion.png/revision/latest?cb=20110508020039" width={32} height={32} /> <a href="https://maplestory.fandom.com/wiki/Decent_Speed_Infusion" target="_blank" rel="noopener noreferrer">Decent Speed Infusion</a></li>
            <li>+1 Attack Speed Inner Ability</li>
            <li>Almost all Weapon Booster skills from your class' skills</li>
        </ul>
        <h3>Example:</h3>
        A Shadower with a <img src="https://maplestory.io/api/GMS/210.1.1/item/1332225/icon" data-v-e6b15fb6 /> Fafnir Damascus, which is Fast (4). The Shadower gets +2 AS from their <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/6/6c/Skill_Dagger_Booster.png/revision/latest?cb=20110504071007" alt="Skill Dagger Booster" data-image-key="Skill_Dagger_Booster.png" data-image-name="Skill Dagger Booster.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/6/6c/Skill_Dagger_Booster.png/revision/latest?cb=20110504071007" width={32} height={32} /> Weapon Booster skill. They also have +1 AS Inner Ability. You may think her final attack speed is Fastest (1), since Fast (4) - (+3 AS) = Fastest (1). However, their weapon boosting skill nor the +1 attack speed inner ability can break the soft speed cap of Fastest (2). Thus, they are stuck at Fastest (2) despite her inner ability
        <h2>Speed Cap 2 - The Hard Speed Cap</h2>
        <hr />
        The absolute fastest attack speed a player can achieve is Fastest (0), no exceptions.
        Fastest (0) is thus known as the Hard Speed Cap
        There are a handful of Attack Speed boost sources that can ignore the soft speed cap of Faster (2). These are the following:
        <ul>
            <li>Rune of Decay (+1 attack speed)</li>
            <li>Rune of Destruction (+1 attack speed)</li>
            <li>Rune of Swiftness (+3 attack speed)</li>
            <li><img src="https://maplestory.io/api/GMS/210.1.1/item/2023126/icon" data-v-e6b15fb6 /> <a href="https://maplestory.fandom.com/wiki/Extreme_Green_Potion" target="_blank" rel="noopener noreferrer">Extreme Green Potion</a> (+1 attack speed)</li>
            <li><img src="https://maplestory.io/api/GMS/210.1.1/item/2591401/icon" data-v-e6b15fb6 /> <a href="https://maplestory.fandom.com/wiki/Fickle_Queen" target="_blank" rel="noopener noreferrer">Crimson Queen soul's attack speed buff</a> (+1 attack speed)</li>
            <li>Battle Mage's <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/cc/Skill_Hasty_Aura.png/revision/latest?cb=20150312015436" alt="Skill Hasty Aura" data-image-key="Skill_Hasty_Aura.png" data-image-name="Skill Hasty Aura.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/cc/Skill_Hasty_Aura.png/revision/latest?cb=20150312015436" width={32} height={32} /> <a href="https://maplestory.fandom.com/wiki/Hasty_Aura" target="_blank" rel="noopener noreferrer">Hasty Aura</a> (+2 attack speed)</li>
            <li>Zero's <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/9/9c/Skill_Divine_Speed.png/revision/latest?cb=20140107015542" alt="Skill Divine Speed" data-image-key="Skill_Divine_Speed.png" data-image-name="Skill Divine Speed.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/9/9c/Skill_Divine_Speed.png/revision/latest?cb=20140107015542" width={32} height={32} /> <a href="https://maplestory.fandom.com/wiki/Divine_Speed" target="_blank" rel="noopener noreferrer">Divine Speed</a> (+1 attack speed)</li>
            <li>Kaiser's <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/ef/Skill_Kaiser%27s_Majesty.png/revision/latest?cb=20121015212936" alt="Skill Kaiser's Majesty" data-image-key="Skill_Kaiser%27s_Majesty.png" data-image-name="Skill Kaiser's Majesty.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/ef/Skill_Kaiser%27s_Majesty.png/revision/latest?cb=20121015212936" width={32} height={32} /> <a href="https://maplestory.fandom.com/wiki/Kaiser's_Majesty" target="_blank" rel="noopener noreferrer">Kaiser's Majesty</a> (+1 attack speed)</li>
        </ul>
        <p>You will need only one of these Attack Speed boosts to break through the Soft Speed cap to be able to reach the Hard Speed cap</p>
        <strong>Note:</strong> Depending on your server, you may have a Hard Speed Cap of 2. GMS and MSEA has a Hard Speed Cap of 0
        <h3>Example:</h3>
        An Aran with the <img src="https://maplestory.io/api/GMS/210.1.1/item/1442002/icon" data-v-e6b15fb6 /> Eviscerator polearm, which is Slower (9). The Aran gets +2 AS from their <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/4/48/Skill_Polearm_Booster.png/revision/latest?cb=20100603074001" alt="Skill Polearm Booster" data-image-key="Skill_Polearm_Booster.png" data-image-name="Skill Polearm Booster.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/4/48/Skill_Polearm_Booster.png/revision/latest?cb=20100603074001" width={32} height={32} /> Weapon Booster skill, +1 AS from <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/5/55/Skill_Polearm_Mastery.png/revision/latest?cb=20100603082005" alt="Skill Polearm Mastery" data-image-key="Skill_Polearm_Mastery.png" data-image-name="Skill Polearm Mastery.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/5/55/Skill_Polearm_Mastery.png/revision/latest?cb=20100603082005" width={32} height={32} /> Polearm Mastery skill, +1 AS from <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Speed_Infusion.png/revision/latest?cb=20110508020039" alt="Skill Speed Infusion" data-image-key="Skill_Speed_Infusion.png" data-image-name="Skill Speed Infusion.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Speed_Infusion.png/revision/latest?cb=20110508020039" width={32} height={32} /> Decent Speed Infusion, +1 from Inner Ability, and +1 from <img className src="https://vignette.wikia.nocookie.net/maplestory/images/1/1e/Use_Extreme_Green_Potion.png/revision/latest?cb=20170206074332" alt="Use Extreme Green Potion" data-image-key="Use_Extreme_Green_Potion.png" data-image-name="Use Extreme Green Potion.png" width={22} height={31} /> Extreme Green Potion (for a total of +6 AS).
        Thus, their attack speed would be: Slower (9) - (+6 AS) = Fastest (3).
        Later, they find a Rune of Swiftness and uses it, granting them another +3 attack speed that can ignore the soft speed cap (for a total of +9 attack speed). Their final Attack Speed is Fastest (0)
        <h2><a name="tl-dr" /></h2>
        </div>
    );
}

export default AttackSpeed;