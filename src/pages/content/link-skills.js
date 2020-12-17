import React from 'react'

function LinkSkills() {
    return (
<div>
        <p><img src="https://i.imgur.com/MuIiQA4.png" /></p>
        <p>Link Skills are unique to each class and can be given to your other characters on the same world. Link Skills mostly come as passives but there are a few Active Link Skills too</p>
        <p>Once a character reaches Level 70, they can share their Link Skill with another character. When you Share your Link Skill, both characters will gain the effect of the Link Skill. Sometimes Link Skills may have different effects for the character with the linked version. Link Skills grow stronger at Level 120 (Skill Level 2) and most grow stronger again at Level 210 (Skill Level 3). Some Link Skills can stack increasing the strength of the Link Skill by linking the same Link Skill multiple times from different characters of the same class group</p>
        <p>A character can have up to 12 Link Skills (13 if considering themselves) linked to them at one time and each Link Skill can only be linked to one character at a time. Each Link Skill can be linked to a different character twice per day</p>
        <p>For Link Skills that stack, linking them will automatically stack them together. Although, the class must be unique for the Link Skills to stack (ex. cannot be two Dark Knights, must be a Dark Knight and a Paladin or Hero)</p>
        <p>Some advice in choosing Link Skills, choose ones that provide stats you need. For example, I am trying to reach 100% Crit Chance, I try to get as many %Crit Chance Link Skills to help me reach that goal. There are also other essential stats that are useful for all classes such as %Damage, %Boss Damage or %Ignore DEF. Other important Link Skills include ones that increase the amount of EXP gained</p>
        <p><img src="https://i.imgur.com/waEl3bv.png" /></p>
        <p>To manage your Link Skills, open up your Skills Tab UI, and click into your Beginner skills. There you will find a skill called Link Manager</p>
        <strong>Note:</strong> If you do not see your Link Skill in the Link Manager, you may have to accept a quest in the Lightbulb tab on the left-hand side of the screen. If you still do not see it, try relogging
        <h3 id="top">Quick Jumps</h3>
        <ul>
          <li><a href="#explorers">Explorers</a></li>
          <li><a href="#cygnusknights">Cygnus Knights</a></li>
          <li><a href="#heroes">Heroes</a></li>
          <li><a href="#resistance">Resistance</a></li>
          <li><a href="#nova">Nova</a></li>
          <li><a href="#sengoku">Sengoku</a></li>
          <li><a href="#flora">Flora</a></li>
          <li><a href="#other">Other</a></li>
          <li><a href="#notable">Notable Link Skills</a></li>
          <li><a href="#builds">Examples of Link Skill Builds</a></li>
        </ul>
        <hr />
        <p><a style={{color: '#03afe7'}} href="#top">Go to top</a></p>
        <h2 id="explorers">Explorers</h2>
        <hr />
        <p><strong>[Hero, Paladin and Dark Knight]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/d/dc/Skill_Invincible_Belief.png/revision/latest?cb=20191124005023" alt="Skill Invincible Belief" width={32} height={32} /> [Master Level 6] Invincible Belief [Passive]: </strong>Recovers %Max HP every 1 sec for 3 secs if you fall below 15% Max HP
            <ul>
              <li>
                Can stack up to 3 times for each unique Explorer Warrior class character
                <ul>
                  <li>Each Link Skill can only go up to Level 2 (stacking for a total of Skill Level 6)</li>
                </ul>
              </li>
              <li>Has a cooldown (410 - 210 secs depending on Skill Level)</li>
              <li>Useful for BOSSING because of increased SURVIVABILITY</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Bishop, Arch Mage (Ice, Lightning) and Arch Mage (Fire, Poision)]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/1/1c/Skill_Empirical_Knowledge.png/revision/latest?cb=20191123114304" alt="Skill Empirical Knowledge" width={32} height={32} /> [Master Level 6] Empirical Knowledge [Passive]: </strong>When attacking, your attacks have a chance to debuff against the enemy with the highest Max HP
            <ul>
              <li><strong>[Debuff]: </strong>Increases %Damage and %Ignore DEF against this enemy (stacking up to 3 times)</li>
              <li>
                Can stack up to 3 times for each unique Explorer Magician class character
                <ul>
                  <li>Each Link Skill can only go up to Level 2 (stacking for a total of Skill Level 6)</li>
                </ul>
              </li>
              <li>Useful for BOSSING because of INCREASED DAMAGE and IGNORE DEF is ESSENTIAL TO DEALING FULL DAMAGE</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Bow Master, Marksman and Pathfinder]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Adventurer%27s_Curiosity.png/revision/latest?cb=20191123115130" alt="Skill Adventurer's Curiosity" width={32} height={32} /> [Master Level 6] Adventurer's Curiosity [Passive]: </strong>Increases %Crit Rate. Additionally increases chance to add monsters to Monster Collection
            <ul>
              <li>
                Can stack up to 3 times for each unique Explorer Archer class character
                <ul>
                  <li>Each Link Skill can only go up to Level 2 (stacking for a total of Skill Level 6)</li>
                </ul>
              </li>
              <li>
                Useful for ALL CLASSES with LOW OR LESS THAN 100% CRIT RATE
                <ul>
                  <li>Additionally great for adding monsters to Monster Collection!!</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Shadower, Night Lord, and Dual Blade]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/7/78/Skill_Thief%27s_Cunning.png/revision/latest?cb=20191123120726" alt="Skill Thief's Cunning" width={32} height={32} /> [Master Level 6] Thief's Cunning [Passive]: </strong>Increases %Damage whenever you debuff an enemy
            <ul>
              <li>
                Can stack up to 3 times for each unique Explorer Thief class character
                <ul>
                  <li>Each Link Skill can only go up to Level 2 (stacking for a total of Skill Level 6)</li>
                </ul>
              </li>
              <li>Useful for INCREASING DAMAGE for CLASSES WITH DEBUFFS</li>
              <li>Has a cooldown (20 secs)</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Corsair, Buccaneer, and Cannoneer]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Pirate_Blessing.png/revision/latest?cb=20110627095502" alt="Skill Pirate Blessing" width={32} height={32} /> [Master Level 6] Pirate Blessing [Passive]: </strong>Increases STR, DEX, INT, LUK, Max HP/MP and %Damage Reduction
            <ul>
              <li>Affected by %Stat</li>
              <li>
                Can stack up to 3 times for each unique Explorer Thief class character
                <ul>
                  <li>Each Link Skill can only go up to Level 2 (stacking for a total of Skill Level 6)</li>
                </ul>
              </li>
              <li>Useful for INCREASING DAMAGE and TRAINING characters pre-200 because of increased SURVIVABILITY</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Jett]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e8/Skill_Core_Aura.png/revision/latest?cb=20120619031149" alt="Skill Core Aura" width={32} height={30} /> [Master Level 1] Core Aura [Passive]: </strong>Grants a random amount of STR, DEX, INT, LUK, Attack, and Magic Attack
            <ul>
              <li>The stats change every day, there are items dropped from monsters or from the Cash Shop that help you reroll the stats. There is also an item in the Cash Shop that lock the stats preventing it from changing</li>
              <li>NOT VERY USEFUL because requires CASH ITEMS to be good</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><a style={{color: '#03afe7'}} href="#top">Go to top</a></p>
        <h2 id="cygnusknights">Cygnus Knights</h2>
        <hr />
        <p><strong>[Dawn Warrior, Wind Archer, Thunder Breaker, Night Walker, and Blaze Wizard]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Skill_Cygnus_Blessing.png/revision/latest?cb=20130525122103" alt="Skill Cygnus Blessing" width={32} height={32} /> [Master Level 10] Cygnus Blessing [Passive]: </strong>Increases Attack, Magic Attack, Abnormal Status Resistance and %Elemental Resistance
            <ul>
              <li>
                Can be stacked up to 5 times, once for each unique Cygnus Knight character you have on the same world
                <ul>
                  <li>Each Link Skill can only go up to Level 2 (stacking for a total of Skill Level 10)</li>
                </ul>
              </li>
              <li>
                Useful for INCREASING DAMAGE and REDUCING DURATION OF DEBUFFS
                <ul>
                  <li>Important in bosses like Chaos Pink Bean</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Mihile]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Knight%27s_Watch.png/revision/latest?cb=20120322172705" alt="Skill Knight's Watch" width={32} height={32} /> [Master Level 3] Knight's Watch [Active]: </strong>Temporarily increases 100% Knockback Resistance
            <ul>
              <li>Has a cooldown (180 secs)</li>
              <li>Useful for BOSSING with CLASSES WITHOUT 100% KNOCKBACK RESISTANCE</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><a style={{color: '#03afe7'}} href="#top">Go to top</a></p>
        <h2 id="heroes">Heroes</h2>
        <hr />
        <p><strong>[Mercedes]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Elven_Blessing_%28Linked%29.png/revision/latest?cb=20120317030640" alt="Skill Elven Blessing (Linked)" width={32} height={32} /> [Master Level 3] Elven Blessing [Active + Passive]: </strong>Permanently increases EXP gained from monsters
            <ul>
              <li>Additionally can be activated to teleport to Elluel, Mercedes' hometown</li>
              <li>Has a cooldown (1800 secs)</li>
              <li>Useful for TRAINING because of INCREASED EXP</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Aran]</strong></p>
        <ul>
          <li>
            <strong> <img className src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Skill_Combo_Kill_Blessing.png/revision/latest?cb=20160623050748" alt="Skill Combo Kill Blessing" width={32} height={32} /> [Master Level 3] Combo Kill Blessing [Passive]: </strong>Increases the amount of EXP given from Combo Kill orbs
            <ul>
              <li>Useful for TRAINING because of INCREASED EXP</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Phantom]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/ec/Skill_Phantom_Instinct.png/revision/latest?cb=20120129155124" alt="Skill Phantom Instinct" width={32} height={32} /> [Master Level 3] Phantom Instinct [Passive]: </strong>Increases %Crit Rate
            <ul>
              <li>Useful for ALL CLASSES with LOW OR LESS THAN 100% CRIT RATE</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Luminous]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/b/bc/Skill_Light_Wash.png/revision/latest?cb=20191125065228" alt="Skill Light Wash" width={32} height={32} /> [Master Level 3] Light Wash [Passive]: </strong>Increases %Ignore DEF
            <ul>
              <li>Useful for BOSSING because IGNORE DEF is ESSENTIAL TO DEALING FULL DAMAGE</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Evan] </strong></p>
        <ul>
          <li>
            <strong><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/0/07/Skill_Rune_Persistence.png/revision/latest?cb=20160624211333" alt="Skill Rune Persistence" width={32} height={32} /> [Master Level 3] Rune Persistence [Passive]: </strong>Increases the duration of Runes
            <ul>
              <li>
                Useful for TRAINING because of INCREASED EXP
                <ul>
                  <li>Runes provide a 2x EXP buff when active</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Shade] </strong></p>
        <ul>
          <li>
            <strong><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Skill_Close_Call.png/revision/latest?cb=20140809015342" alt="Skill Close Call" width={32} height={32} /> [Master Level 2] Close Call [Passive]: </strong>Whenever you are hit by a fatal attack, there is a chance to survive the hit<br />
            <ul>
              <li>Useful for BOSSING because of increased SURVIVABILITY</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><a style={{color: '#03afe7'}} href="#top">Go to top</a></p>
        <h2 id="resistance">Resistance</h2>
        <hr />
        <p><strong>[Wild Hunter, Battle Mage, Mechanic, and Blaster]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/9/92/Skill_Spirit_of_Freedom.png/revision/latest?cb=20160821170212" alt="Skill Spirit of Freedom" width={32} height={32} /> [Master Level 8] Spirit of Freedom [Passive]: </strong>After reviving, you will not take damage for a short amount of time
            <ul>
              <li>
                Can stack up to 4 times for each unique Resistance class character
                <ul>
                  <li>Each Link Skill can only go up to Level 2 (stacking for a total of Skill Level 8)</li>
                </ul>
              </li>
              <li>Useful for BOSSING because of increased UTILITY</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Demon Avenger]</strong></p>
        <ul>
          <li>
            <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Wild_Rage.png/revision/latest?cb=20140623054437" alt="Skill Wild Rage" width={32} height={32} /> <strong>[Master Level 3] </strong><strong>Wild Rage [Passive]: </strong>Increases %Damage
            <ul>
              <li>Useful for INCREASING DAMAGE</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Demon Slayer]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Fury_Unleashed.png/revision/latest?cb=20140808220635" alt="Skill Fury Unleashed" width={32} height={32} /> [Master Level 3] Fury Unleashed [Passive]: </strong>Increases %Boss Damage
            <ul>
              <li>Useful for BOSSING</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Xenon]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/Skill_Hybrid_Logic.png/revision/latest?cb=20121223163512" alt="Skill Hybrid Logic" width={32} height={32} /> [Master Level 2] Hybrid Logic [Passive]: </strong>Increases %All Stats<br />
            <ul>
              <li>Useful for INCREASING DAMAGE</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><a style={{color: '#03afe7'}} href="#top">Go to top</a></p>
        <h2 id="nova">Nova</h2>
        <hr />
        <p><strong>[Angelic Buster]</strong></p>
        <ul>
          <li>
            <strong> <img className src="https://vignette.wikia.nocookie.net/maplestory/images/6/6b/Skill_Terms_and_Conditions.png/revision/latest?cb=20120803105421" alt="Skill Terms and Conditions" width={32} height={32} /> [Master Level 3] Terms and Conditions [Buff]: </strong>Temporarily increases %Damage
            <ul>
              <li>Useful for BOSSING for classes with BURST ATTACKS</li>
              <li>Has a cooldown (90 secs)</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Cadena] </strong></p>
        <ul>
          <li>
            <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Skill_Unfair_Advantage.png/revision/latest?cb=20171205075511" alt="Skill Unfair Advantage" width={32} height={32} /> <strong>[Master Level 2] </strong><strong>Unfair Advantage [Passive]: </strong>Increases %Damage against enemies lower level than you or is affected by a debuff (Abnormal Status)<br />
            <ul>
              <li>Useful for TRAINING because of INCREASED DAMAGE</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Kaiser] </strong></p>
        <ul>
          <li>
            <strong><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c6/Skill_Iron_Will_%28Kaiser%29.png/revision/latest?cb=20120717143209" alt="Skill Iron Will (Kaiser)" width={32} height={32} /> [Master Level 3] Iron Will [Passive]: </strong>Increases %Max HP
            <ul>
              <li>Useful for TRAINING characters pre-200 because of increased SURVIVABILITY</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><a style={{color: '#03afe7'}} href="#top">Go to top</a></p>
        <h2 id="sengoku">Sengoku</h2>
        <hr />
        <p><strong>[Hayato] </strong></p>
        <ul>
          <li>
            <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/5/51/Skill_Keen_Edge.png/revision/latest?cb=20180520131734" alt="Skill Keen Edge" width={32} height={32} /> <strong>[Master Level 2] </strong><strong>Keen Edge [Passive]: </strong>Increases All Stats, Attack, and Magic Attack<br />
            <ul>
              <li>Useful for INCREASING DAMAGE</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Kanna] </strong></p>
        <ul>
          <li>
            <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/a/af/Skill_Elementalism.png/revision/latest?cb=20171223042231" alt="Skill Elementalism" width={32} height={32} /> <strong>[Master Level 2] </strong><strong>Elementalism [Passive]: </strong>Increases %Damage<br />
            <ul>
              <li>Useful for INCREASING DAMAGE</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><a style={{color: '#03afe7'}} href="#top">Go to top</a></p>
        <h2 id="flora">Flora</h2>
        <hr />
        <p><strong>[Ark] </strong></p>
        <ul>
          <li>
            <strong><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/Skill_Solus.png/revision/latest?cb=20180815050834" alt="Skill Solus" width={32} height={32} /> [Master Level 3] Solus [Passive]:</strong> Grants a stacking %Damage buff (up to 5 times) when in combat
            <ul>
              <li>Useful for INCREASING DAMAGE</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Illium] </strong></p>
        <ul>
          <li>
            <strong><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c5/Skill_Tide_of_Battle.png/revision/latest?cb=20171217081538" alt="Skill Tide of Battle" width={32} height={32} /> [Master Level 2] Tide of Battle [Passive]: </strong>While you move, you gain a stacking %Damage buff (up to 6 times). If you stop moving, the buff will disappear shortly<br />
            <ul>
              <li>Useful for INCREASING DAMAGE for classes that MOVE A LOT</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Adele] </strong></p>
        <ul>
          <li>
            <strong><img className="alignnone size-full wp-image-39333" title src="https://orangemushroom.files.wordpress.com/2019/12/noblesse.png?w=600" alt="Noblesse" data-attachment-id={39333} data-permalink="https://orangemushroom.net/2019/12/31/kmst-ver-1-2-096-new-high-lef-warrior-adele/noblesse/" data-orig-file="https://orangemushroom.files.wordpress.com/2019/12/noblesse.png" data-orig-size="32,32" data-comments-opened={1} data-image-meta="{" data-image-title="Noblesse" data-image-description data-medium-file="https://orangemushroom.files.wordpress.com/2019/12/noblesse.png?w=32" data-large-file="https://orangemushroom.files.wordpress.com/2019/12/noblesse.png?w=32" /> [Master Level 2] Noble Fire [Passive]: </strong>Increases %Boss Damage. As well, when you are on the same map as your party members, you gain additional %Damage<br />
            <ul>
              <li>Useful for BOSSING</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><a style={{color: '#03afe7'}} href="#top">Go to top</a></p>
        <h2 id="other">Other</h2>
        <hr />
        <p><strong>[Beast Tamer] </strong></p>
        <ul>
          <li>
            <strong><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" alt="Skill Focus Spirit" width={32} height={32} /> [Master Level 3] Focus Spirit [Passive]: </strong>Provides %Boss Damage, %Crit Rate, %Max HP/MP
            <ul>
              <li>Useful for ALL CLASSES with LOW OR LESS THAN 100% CRIT RATE and for BOSSING</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Hoyoung]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/7/7b/Skill_Bravado.png/revision/latest?cb=20191117083357" alt="Skill Bravado" width={32} height={32} /> [Master Level 2] Bravado [Passive]: </strong>Increases %Ignore DEF and %Damage on enemies with 100% HP (full health)<br />
            <ul>
              <li>Useful for TRAINING because of INCREASED DAMAGE</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Kinesis]</strong></p>
        <ul>
          <li>
            <strong> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/cc/Skill_Judgment_%28Kinesis%29.png/revision/latest?cb=20160610024748" alt="Skill Judgment (Kinesis)" width={32} height={32} /> [Master Level 2] Judgment [Passive]: </strong>Increases %Crit Damage<br />
            <ul>
              <li>Useful for INCREASED DAMAGE</li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><strong>[Zero] </strong></p>
        <ul>
          <li>
            <strong><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Rhinne%27s_Blessing.png/revision/latest?cb=20140107015609" alt="Skill Rhinne's Blessing" width={32} height={32} /> [Master Level 6] Rhinne's Blessing [Passive]: </strong>Increases %Damage Reduction and %Ignore DEF
            <ul>
              <li>Can go up to Skill Level 6 by complete Zero storyline</li>
              <li>
                Useful for BOSSING because IGNORE DEF is ESSENTIAL TO DEALING FULL DAMAGE
                <ul>
                  <li>Also useful for TRAINING pre-200 because of increased SURVIVABILITY</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
        <p><a style={{color: '#03afe7'}} href="#top">Go to top</a></p>
        <h2 id="notable">Notable Link Skills:</h2>
        <p>Some Link Skills may fit multiple roles, for example, Beast Tamer's Link Skill <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" alt="Skill Focus Spirit" data-image-key="Skill_Focus_Spirit.png" data-image-name="Skill Focus Spirit.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" width={32} height={32} /> provides %Boss Damage, %Crit Rate and %Max HP/MP</p>
        <h3>For Damage:</h3>
        <ul>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/Skill_Solus.png/revision/latest?cb=20180815050834" alt="Skill Solus" data-image-key="Skill_Solus.png" data-image-name="Skill Solus.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/Skill_Solus.png/revision/latest?cb=20180815050834" width={32} height={32} /> <strong>[Ark] </strong>- %Damage</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Wild_Rage.png/revision/latest?cb=20140623054437" alt="Skill Wild Rage" data-image-key="Skill_Wild_Rage.png" data-image-name="Skill Wild Rage.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Wild_Rage.png/revision/latest?cb=20140623054437" width={32} height={32} /> <strong>[Demon Avenger] </strong>- %Damage</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/7/78/Skill_Thief%27s_Cunning.png/revision/latest?cb=20191123120726" alt="Skill Thief's Cunning" data-image-key="Skill_Thief%27s_Cunning.png" data-image-name="Skill Thief's Cunning.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/7/78/Skill_Thief%27s_Cunning.png/revision/latest?cb=20191123120726" width={32} height={32} /> <strong>[Explorer Thieves] </strong>- %Damage (for classes with debuffs)</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Pirate_Blessing.png/revision/latest?cb=20110627095502" alt="Skill Pirate Blessing" data-image-key="Skill_Pirate_Blessing.png" data-image-name="Skill Pirate Blessing.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Pirate_Blessing.png/revision/latest?cb=20110627095502" width={32} height={32} /> <strong>[Explorer Pirates] </strong>- All Stats (affected by %Stat)</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c5/Skill_Tide_of_Battle.png/revision/latest?cb=20171217081538" alt="Skill Tide of Battle" data-image-key="Skill_Tide_of_Battle.png" data-image-name="Skill Tide of Battle.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/c5/Skill_Tide_of_Battle.png/revision/latest?cb=20171217081538" width={32} height={32} /> <strong>[Illium] </strong>- %Damage</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/a/af/Skill_Elementalism.png/revision/latest?cb=20171223042231" alt="Skill Elementalism" data-image-key="Skill_Elementalism.png" data-image-name="Skill Elementalism.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/a/af/Skill_Elementalism.png/revision/latest?cb=20171223042231" width={32} height={32} /> <strong>[Kanna] </strong>- %Damage</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/cc/Skill_Judgment_%28Kinesis%29.png/revision/latest?cb=20160610024748" alt="Skill Judgment (Kinesis)" data-image-key="Skill_Judgment_%28Kinesis%29.png" data-image-name="Skill Judgment (Kinesis).png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/cc/Skill_Judgment_%28Kinesis%29.png/revision/latest?cb=20160610024748" width={32} height={32} /> <strong>[Kinesis] </strong>- %Crit Damage</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/Skill_Hybrid_Logic.png/revision/latest?cb=20121223163512" alt="Skill Hybrid Logic" data-image-key="Skill_Hybrid_Logic.png" data-image-name="Skill Hybrid Logic.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/Skill_Hybrid_Logic.png/revision/latest?cb=20121223163512" width={32} height={32} /> <strong>[Xenon] </strong>- %All Stat</li>
        </ul>
        <h3>For Bossing + Ignore DEF:</h3>
        <ul>
          <li><img className src="https://vignette.wikia.nocookie.net/maplestory/images/6/6b/Skill_Terms_and_Conditions.png/revision/latest?cb=20120803105421" alt="Skill Terms and Conditions" data-image-key="Skill_Terms_and_Conditions.png" data-image-name="Skill Terms and Conditions.png" width={32} height={32} /> <strong>[Angelic Buster] </strong>- For Burst skills</li>
          <li><strong><img className="alignnone size-full wp-image-39333" title src="https://orangemushroom.files.wordpress.com/2019/12/noblesse.png?w=600" alt="Noblesse" data-attachment-id={39333} data-permalink="https://orangemushroom.net/2019/12/31/kmst-ver-1-2-096-new-high-lef-warrior-adele/noblesse/" data-orig-file="https://orangemushroom.files.wordpress.com/2019/12/noblesse.png" data-orig-size="32,32" data-comments-opened={1} data-image-meta="{" data-image-title="Noblesse" data-image-description data-medium-file="https://orangemushroom.files.wordpress.com/2019/12/noblesse.png?w=32" data-large-file="https://orangemushroom.files.wordpress.com/2019/12/noblesse.png?w=32" /></strong> <strong>[Adele] </strong>- %Boss Damage</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" alt="Skill Focus Spirit" data-image-key="Skill_Focus_Spirit.png" data-image-name="Skill Focus Spirit.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" width={32} height={32} /> <strong>[Beast Tamer] </strong>- %Boss Damage, %Crit Rate and %Max HP/MP</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Skill_Cygnus_Blessing.png/revision/latest?cb=20130525122103" alt="Skill Cygnus Blessing" data-image-key="Skill_Cygnus_Blessing.png" data-image-name="Skill Cygnus Blessing.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Skill_Cygnus_Blessing.png/revision/latest?cb=20130525122103" width={32} height={32} /> <strong>[Cygnus Knights] </strong>- Useful for Abnormal Status Resistance and slight damage boost</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Fury_Unleashed.png/revision/latest?cb=20140808220635" alt="Skill Fury Unleashed" data-image-key="Skill_Fury_Unleashed.png" data-image-name="Skill Fury Unleashed.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Fury_Unleashed.png/revision/latest?cb=20140808220635" width={32} height={32} /> <strong>[Demon Slayer] </strong>- %Boss Damage</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/1/1c/Skill_Empirical_Knowledge.png/revision/latest?cb=20191123114304" alt="Skill Empirical Knowledge" data-image-key="Skill_Empirical_Knowledge.png" data-image-name="Skill Empirical Knowledge.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/1/1c/Skill_Empirical_Knowledge.png/revision/latest?cb=20191123114304" width={32} height={32} /> <strong>[Explorer Mages] </strong>- %Ignore DEF</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/b/bc/Skill_Light_Wash.png/revision/latest?cb=20191125065228" alt="Skill Light Wash" data-image-key="Skill_Light_Wash.png" data-image-name="Skill Light Wash.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/b/bc/Skill_Light_Wash.png/revision/latest?cb=20191125065228" width={32} height={32} /> <strong>[Luminous] </strong>- %Ignore DEF</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Knight%27s_Watch.png/revision/latest?cb=20120322172705" alt="Skill Knight's Watch" data-image-key="Skill_Knight%27s_Watch.png" data-image-name="Skill Knight's Watch.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Knight%27s_Watch.png/revision/latest?cb=20120322172705" width={32} height={32} /><strong> [Mihile] </strong>- 100% Knockback Resistance buff for classes with &lt; 100% resistance</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/9/92/Skill_Spirit_of_Freedom.png/revision/latest?cb=20160821170212" alt="Skill Spirit of Freedom" data-image-key="Skill_Spirit_of_Freedom.png" data-image-name="Skill Spirit of Freedom.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/9/92/Skill_Spirit_of_Freedom.png/revision/latest?cb=20160821170212" width={32} height={32} /> <strong>[Resistance] </strong>- iFrames after reviving</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Skill_Close_Call.png/revision/latest?cb=20140809015342" alt="Skill Close Call" data-image-key="Skill_Close_Call.png" data-image-name="Skill Close Call.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Skill_Close_Call.png/revision/latest?cb=20140809015342" width={32} height={32} /> <strong>[Shade] </strong>- Utility, chance to not die from fatal attacks</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Rhinne%27s_Blessing.png/revision/latest?cb=20140107015609" alt="Skill Rhinne's Blessing" data-image-key="Skill_Rhinne%27s_Blessing.png" data-image-name="Skill Rhinne's Blessing.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Rhinne%27s_Blessing.png/revision/latest?cb=20140107015609" width={32} height={32} /> <strong>[Zero] </strong>- %Ignore DEF</li>
        </ul>
        <h3>For Training:</h3>
        <ul>
          <li><img className src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Skill_Combo_Kill_Blessing.png/revision/latest?cb=20160623050748" alt="Skill Combo Kill Blessing" data-image-key="Skill_Combo_Kill_Blessing.png" data-image-name="Skill Combo Kill Blessing.png" width={32} height={32} /> <strong>[Aran] </strong>- Useful for pre-200</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Skill_Unfair_Advantage.png/revision/latest?cb=20171205075511" alt="Skill Unfair Advantage" data-image-key="Skill_Unfair_Advantage.png" data-image-name="Skill Unfair Advantage.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Skill_Unfair_Advantage.png/revision/latest?cb=20171205075511" width={32} height={32} /> <strong>[Cadena] </strong>- Increased %Damage to lower level enemies + enemies with Abnormal Statuses</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/0/07/Skill_Rune_Persistence.png/revision/latest?cb=20160624211333" alt="Skill Rune Persistence" data-image-key="Skill_Rune_Persistence.png" data-image-name="Skill Rune Persistence.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/0/07/Skill_Rune_Persistence.png/revision/latest?cb=20160624211333" width={32} height={32} /> <strong>[Evan] </strong>- Useful all levels especially pre-200</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/7/7b/Skill_Bravado.png/revision/latest?cb=20191117083357" alt="Skill Bravado" data-image-key="Skill_Bravado.png" data-image-name="Skill Bravado.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/7/7b/Skill_Bravado.png/revision/latest?cb=20191117083357" width={32} height={32} /> <strong>[Hoyoung] </strong>- Useful if you need a small boost to one-shot enemies</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c6/Skill_Iron_Will_%28Kaiser%29.png/revision/latest?cb=20120717143209" alt="Skill Iron Will (Kaiser)" data-image-key="Skill_Iron_Will_%28Kaiser%29.png" data-image-name="Skill Iron Will (Kaiser).png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/c6/Skill_Iron_Will_%28Kaiser%29.png/revision/latest?cb=20120717143209" width={32} height={32} /> <strong>[Kaiser] </strong>- For pre-200 if you die a lot</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Elven_Blessing_%28Linked%29.png/revision/latest?cb=20120317030640" alt="Skill Elven Blessing (Linked)" data-image-key="Skill_Elven_Blessing_%28Linked%29.png" data-image-name="Skill Elven Blessing (Linked).png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Elven_Blessing_%28Linked%29.png/revision/latest?cb=20120317030640" width={32} height={32} /> <strong>[Mercedes] </strong>- Best results for training Lv. 200+</li>
        </ul>
        <h3>For Low Crit Rate:</h3>
        <ul>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Adventurer%27s_Curiosity.png/revision/latest?cb=20191123115130" alt="Skill Adventurer's Curiosity" data-image-key="Skill_Adventurer%27s_Curiosity.png" data-image-name="Skill Adventurer's Curiosity.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Adventurer%27s_Curiosity.png/revision/latest?cb=20191123115130" width={32} height={32} /> <strong>[Explorer Archers] - </strong>Up to 10%</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" alt="Skill Focus Spirit" data-image-key="Skill_Focus_Spirit.png" data-image-name="Skill Focus Spirit.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" width={32} height={32} /> <strong>[Beast Tamer] </strong>- Up to 10%</li>
          <li><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/ec/Skill_Phantom_Instinct.png/revision/latest?cb=20120129155124" alt="Skill Phantom Instinct" data-image-key="Skill_Phantom_Instinct.png" data-image-name="Skill Phantom Instinct.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/ec/Skill_Phantom_Instinct.png/revision/latest?cb=20120129155124" width={32} height={32} /> <strong>[Phantom] </strong>- Up to 20%</li>
        </ul>
        <hr />
        <p><a style={{color: '#03afe7'}} href="#top">Go to top</a></p>
        <h2 id="builds">Examples of Link Skill Builds:</h2>
        <hr />
        <h3>Training:</h3>
        <p><img className src="https://vignette.wikia.nocookie.net/maplestory/images/8/86/Skill_Combo_Kill_Blessing.png/revision/latest?cb=20160623050748" alt="Skill Combo Kill Blessing" data-image-key="Skill_Combo_Kill_Blessing.png" data-image-name="Skill Combo Kill Blessing.png" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/Skill_Solus.png/revision/latest?cb=20180815050834" alt="Skill Solus" data-image-key="Skill_Solus.png" data-image-name="Skill Solus.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/Skill_Solus.png/revision/latest?cb=20180815050834" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Skill_Unfair_Advantage.png/revision/latest?cb=20171205075511" alt="Skill Unfair Advantage" data-image-key="Skill_Unfair_Advantage.png" data-image-name="Skill Unfair Advantage.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/a/ab/Skill_Unfair_Advantage.png/revision/latest?cb=20171205075511" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Wild_Rage.png/revision/latest?cb=20140623054437" alt="Skill Wild Rage" data-image-key="Skill_Wild_Rage.png" data-image-name="Skill Wild Rage.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Wild_Rage.png/revision/latest?cb=20140623054437" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/0/07/Skill_Rune_Persistence.png/revision/latest?cb=20160624211333" alt="Skill Rune Persistence" data-image-key="Skill_Rune_Persistence.png" data-image-name="Skill Rune Persistence.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/0/07/Skill_Rune_Persistence.png/revision/latest?cb=20160624211333" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Adventurer%27s_Curiosity.png/revision/latest?cb=20191123115130" alt="Skill Adventurer's Curiosity" data-image-key="Skill_Adventurer%27s_Curiosity.png" data-image-name="Skill Adventurer's Curiosity.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Adventurer%27s_Curiosity.png/revision/latest?cb=20191123115130" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/7/78/Skill_Thief%27s_Cunning.png/revision/latest?cb=20191123120726" alt="Skill Thief's Cunning" data-image-key="Skill_Thief%27s_Cunning.png" data-image-name="Skill Thief's Cunning.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/7/78/Skill_Thief%27s_Cunning.png/revision/latest?cb=20191123120726" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Pirate_Blessing.png/revision/latest?cb=20110627095502" alt="Skill Pirate Blessing" data-image-key="Skill_Pirate_Blessing.png" data-image-name="Skill Pirate Blessing.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Pirate_Blessing.png/revision/latest?cb=20110627095502" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/7/7b/Skill_Bravado.png/revision/latest?cb=20191117083357" alt="Skill Bravado" data-image-key="Skill_Bravado.png" data-image-name="Skill Bravado.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/7/7b/Skill_Bravado.png/revision/latest?cb=20191117083357" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Rhinne%27s_Blessing.png/revision/latest?cb=20140107015609" alt="Skill Rhinne's Blessing" data-image-key="Skill_Rhinne%27s_Blessing.png" data-image-name="Skill Rhinne's Blessing.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Rhinne%27s_Blessing.png/revision/latest?cb=20140107015609" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/a/af/Skill_Elementalism.png/revision/latest?cb=20171223042231" alt="Skill Elementalism" data-image-key="Skill_Elementalism.png" data-image-name="Skill Elementalism.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/a/af/Skill_Elementalism.png/revision/latest?cb=20171223042231" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Elven_Blessing_%28Linked%29.png/revision/latest?cb=20120317030640" alt="Skill Elven Blessing (Linked)" data-image-key="Skill_Elven_Blessing_%28Linked%29.png" data-image-name="Skill Elven Blessing (Linked).png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Elven_Blessing_%28Linked%29.png/revision/latest?cb=20120317030640" width={32} height={32} /></p>
        <p>(Aran, Ark, Cadena, Demon Avenger, Evan, Explorer Archer, Explorer Thief, Explorer Pirate, Hoyoung, Zero, Kanna, Mercedes)</p>
        <p>Rationale: Increased EXP Gain, Damage, and Damage Reduction if required. If you feel that you do not need extra survivability, you can swap out some Link Skills for more damage or other stats like %Crit Rate</p>
        <p>Other options: <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" alt="Skill Focus Spirit" data-image-key="Skill_Focus_Spirit.png" data-image-name="Skill Focus Spirit.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" width={32} height={32} /> (Crit Rate, Max HP/MP), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Skill_Cygnus_Blessing.png/revision/latest?cb=20130525122103" alt="Skill Cygnus Blessing" data-image-key="Skill_Cygnus_Blessing.png" data-image-name="Skill Cygnus Blessing.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Skill_Cygnus_Blessing.png/revision/latest?cb=20130525122103" width={32} height={32} /> (Damage), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/5/51/Skill_Keen_Edge.png/revision/latest?cb=20180520131734" alt="Skill Keen Edge" data-image-key="Skill_Keen_Edge.png" data-image-name="Skill Keen Edge.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/5/51/Skill_Keen_Edge.png/revision/latest?cb=20180520131734" width={32} height={32} /> (Damage), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c5/Skill_Tide_of_Battle.png/revision/latest?cb=20171217081538" alt="Skill Tide of Battle" data-image-key="Skill_Tide_of_Battle.png" data-image-name="Skill Tide of Battle.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/c5/Skill_Tide_of_Battle.png/revision/latest?cb=20171217081538" width={32} height={32} /> (Damage), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c6/Skill_Iron_Will_%28Kaiser%29.png/revision/latest?cb=20120717143209" alt="Skill Iron Will (Kaiser)" data-image-key="Skill_Iron_Will_%28Kaiser%29.png" data-image-name="Skill Iron Will (Kaiser).png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/c6/Skill_Iron_Will_%28Kaiser%29.png/revision/latest?cb=20120717143209" width={32} height={32} /> (Max HP), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/ec/Skill_Phantom_Instinct.png/revision/latest?cb=20120129155124" alt="Skill Phantom Instinct" data-image-key="Skill_Phantom_Instinct.png" data-image-name="Skill Phantom Instinct.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/ec/Skill_Phantom_Instinct.png/revision/latest?cb=20120129155124" width={32} height={32} /> (Crit Rate), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/Skill_Hybrid_Logic.png/revision/latest?cb=20121223163512" alt="Skill Hybrid Logic" data-image-key="Skill_Hybrid_Logic.png" data-image-name="Skill Hybrid Logic.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/Skill_Hybrid_Logic.png/revision/latest?cb=20121223163512" width={32} height={32} /> (Damage) (Beast Tamer, Cygnus Knights, Hayato, Illium, Kaiser, Phantom, and Xenon)</p>
        <hr />
        <h3>Bossing:</h3>
        <p><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Skill_Cygnus_Blessing.png/revision/latest?cb=20130525122103" alt="Skill Cygnus Blessing" data-image-key="Skill_Cygnus_Blessing.png" data-image-name="Skill Cygnus Blessing.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Skill_Cygnus_Blessing.png/revision/latest?cb=20130525122103" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" alt="Skill Focus Spirit" data-image-key="Skill_Focus_Spirit.png" data-image-name="Skill Focus Spirit.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Skill_Close_Call.png/revision/latest?cb=20140809015342" alt="Skill Close Call" data-image-key="Skill_Close_Call.png" data-image-name="Skill Close Call.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Skill_Close_Call.png/revision/latest?cb=20140809015342" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Fury_Unleashed.png/revision/latest?cb=20140808220635" alt="Skill Fury Unleashed" data-image-key="Skill_Fury_Unleashed.png" data-image-name="Skill Fury Unleashed.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Fury_Unleashed.png/revision/latest?cb=20140808220635" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Pirate_Blessing.png/revision/latest?cb=20110627095502" alt="Skill Pirate Blessing" data-image-key="Skill_Pirate_Blessing.png" data-image-name="Skill Pirate Blessing.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Pirate_Blessing.png/revision/latest?cb=20110627095502" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/1/1c/Skill_Empirical_Knowledge.png/revision/latest?cb=20191123114304" alt="Skill Empirical Knowledge" data-image-key="Skill_Empirical_Knowledge.png" data-image-name="Skill Empirical Knowledge.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/1/1c/Skill_Empirical_Knowledge.png/revision/latest?cb=20191123114304" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Adventurer%27s_Curiosity.png/revision/latest?cb=20191123115130" alt="Skill Adventurer's Curiosity" data-image-key="Skill_Adventurer%27s_Curiosity.png" data-image-name="Skill Adventurer's Curiosity.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Adventurer%27s_Curiosity.png/revision/latest?cb=20191123115130" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/7/78/Skill_Thief%27s_Cunning.png/revision/latest?cb=20191123120726" alt="Skill Thief's Cunning" data-image-key="Skill_Thief%27s_Cunning.png" data-image-name="Skill Thief's Cunning.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/7/78/Skill_Thief%27s_Cunning.png/revision/latest?cb=20191123120726" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/9/92/Skill_Spirit_of_Freedom.png/revision/latest?cb=20160821170212" alt="Skill Spirit of Freedom" data-image-key="Skill_Spirit_of_Freedom.png" data-image-name="Skill Spirit of Freedom.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/9/92/Skill_Spirit_of_Freedom.png/revision/latest?cb=20160821170212" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/cc/Skill_Judgment_%28Kinesis%29.png/revision/latest?cb=20160610024748" alt="Skill Judgment (Kinesis)" data-image-key="Skill_Judgment_%28Kinesis%29.png" data-image-name="Skill Judgment (Kinesis).png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/cc/Skill_Judgment_%28Kinesis%29.png/revision/latest?cb=20160610024748" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/b/bc/Skill_Light_Wash.png/revision/latest?cb=20191125065228" alt="Skill Light Wash" data-image-key="Skill_Light_Wash.png" data-image-name="Skill Light Wash.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/b/bc/Skill_Light_Wash.png/revision/latest?cb=20191125065228" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/ec/Skill_Phantom_Instinct.png/revision/latest?cb=20120129155124" alt="Skill Phantom Instinct" data-image-key="Skill_Phantom_Instinct.png" data-image-name="Skill Phantom Instinct.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/ec/Skill_Phantom_Instinct.png/revision/latest?cb=20120129155124" width={32} height={32} /></p>
        <p>(Cygnus Knights, Beast Tamer, Shade, Demon Slayer, Explorer Pirate, Explorer Mage, Explorer Archer, Explorer Thief, Resistance, Kinesis, Luminous, Phantom)</p>
        <p>Rationale: Increased damage, %Crit Rate (to get 100% if needed), and %Ignore DEF. Other Link Skills are used for utility and survivability</p>
        <p>Other options: <img className src="https://vignette.wikia.nocookie.net/maplestory/images/6/6b/Skill_Terms_and_Conditions.png/revision/latest?cb=20120803105421" alt="Skill Terms and Conditions" data-image-key="Skill_Terms_and_Conditions.png" data-image-name="Skill Terms and Conditions.png" width={32} height={32} /> (Damage), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/Skill_Solus.png/revision/latest?cb=20180815050834" alt="Skill Solus" data-image-key="Skill_Solus.png" data-image-name="Skill Solus.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/Skill_Solus.png/revision/latest?cb=20180815050834" width={32} height={32} /> (Damage), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Wild_Rage.png/revision/latest?cb=20140623054437" alt="Skill Wild Rage" data-image-key="Skill_Wild_Rage.png" data-image-name="Skill Wild Rage.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Wild_Rage.png/revision/latest?cb=20140623054437" width={32} height={32} /> (Damage), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/d/dc/Skill_Invincible_Belief.png/revision/latest?cb=20191124005023" alt="Skill Invincible Belief" data-image-key="Skill_Invincible_Belief.png" data-image-name="Skill Invincible Belief.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/d/dc/Skill_Invincible_Belief.png/revision/latest?cb=20191124005023" width={32} height={32} /> (Damage), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c5/Skill_Tide_of_Battle.png/revision/latest?cb=20171217081538" alt="Skill Tide of Battle" data-image-key="Skill_Tide_of_Battle.png" data-image-name="Skill Tide of Battle.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/c5/Skill_Tide_of_Battle.png/revision/latest?cb=20171217081538" width={32} height={32} /> (Damage), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Knight%27s_Watch.png/revision/latest?cb=20120322172705" alt="Skill Knight's Watch" data-image-key="Skill_Knight%27s_Watch.png" data-image-name="Skill Knight's Watch.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Knight%27s_Watch.png/revision/latest?cb=20120322172705" width={32} height={32} /> (Knockback Resistance), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/Skill_Hybrid_Logic.png/revision/latest?cb=20121223163512" alt="Skill Hybrid Logic" data-image-key="Skill_Hybrid_Logic.png" data-image-name="Skill Hybrid Logic.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/6/69/Skill_Hybrid_Logic.png/revision/latest?cb=20121223163512" width={32} height={32} /> (Damage), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Rhinne%27s_Blessing.png/revision/latest?cb=20140107015609" alt="Skill Rhinne's Blessing" data-image-key="Skill_Rhinne%27s_Blessing.png" data-image-name="Skill Rhinne's Blessing.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Rhinne%27s_Blessing.png/revision/latest?cb=20140107015609" width={32} height={32} /> (%Ignore DEF) (Angelic Buster, Ark, Demon Avenger, Explorer Warrior, Illium, Mihile, Xenon, and Zero)</p>
        <hr />
        <h3>Third example:</h3>
        <p><img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/Skill_Solus.png/revision/latest?cb=20180815050834" alt="Skill Solus" data-image-key="Skill_Solus.png" data-image-name="Skill Solus.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/2/2b/Skill_Solus.png/revision/latest?cb=20180815050834" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" alt="Skill Focus Spirit" data-image-key="Skill_Focus_Spirit.png" data-image-name="Skill Focus Spirit.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/c0/Skill_Focus_Spirit.png/revision/latest?cb=20140808220636" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Adventurer%27s_Curiosity.png/revision/latest?cb=20191123115130" alt="Skill Adventurer's Curiosity" data-image-key="Skill_Adventurer%27s_Curiosity.png" data-image-name="Skill Adventurer's Curiosity.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Adventurer%27s_Curiosity.png/revision/latest?cb=20191123115130" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/7/78/Skill_Thief%27s_Cunning.png/revision/latest?cb=20191123120726" alt="Skill Thief's Cunning" data-image-key="Skill_Thief%27s_Cunning.png" data-image-name="Skill Thief's Cunning.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/7/78/Skill_Thief%27s_Cunning.png/revision/latest?cb=20191123120726" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/cc/Skill_Judgment_%28Kinesis%29.png/revision/latest?cb=20160610024748" alt="Skill Judgment (Kinesis)" data-image-key="Skill_Judgment_%28Kinesis%29.png" data-image-name="Skill Judgment (Kinesis).png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/c/cc/Skill_Judgment_%28Kinesis%29.png/revision/latest?cb=20160610024748" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/b/bc/Skill_Light_Wash.png/revision/latest?cb=20191125065228" alt="Skill Light Wash" data-image-key="Skill_Light_Wash.png" data-image-name="Skill Light Wash.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/b/bc/Skill_Light_Wash.png/revision/latest?cb=20191125065228" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Elven_Blessing_%28Linked%29.png/revision/latest?cb=20120317030640" alt="Skill Elven Blessing (Linked)" data-image-key="Skill_Elven_Blessing_%28Linked%29.png" data-image-name="Skill Elven Blessing (Linked).png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/e4/Skill_Elven_Blessing_%28Linked%29.png/revision/latest?cb=20120317030640" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/ec/Skill_Phantom_Instinct.png/revision/latest?cb=20120129155124" alt="Skill Phantom Instinct" data-image-key="Skill_Phantom_Instinct.png" data-image-name="Skill Phantom Instinct.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/ec/Skill_Phantom_Instinct.png/revision/latest?cb=20120129155124" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Pirate_Blessing.png/revision/latest?cb=20110627095502" alt="Skill Pirate Blessing" data-image-key="Skill_Pirate_Blessing.png" data-image-name="Skill Pirate Blessing.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/e/e1/Skill_Pirate_Blessing.png/revision/latest?cb=20110627095502" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Rhinne%27s_Blessing.png/revision/latest?cb=20140107015609" alt="Skill Rhinne's Blessing" data-image-key="Skill_Rhinne%27s_Blessing.png" data-image-name="Skill Rhinne's Blessing.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/6/60/Skill_Rhinne%27s_Blessing.png/revision/latest?cb=20140107015609" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Skill_Close_Call.png/revision/latest?cb=20140809015342" alt="Skill Close Call" data-image-key="Skill_Close_Call.png" data-image-name="Skill Close Call.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/0/02/Skill_Close_Call.png/revision/latest?cb=20140809015342" width={32} height={32} /> <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/a/af/Skill_Elementalism.png/revision/latest?cb=20171223042231" alt="Skill Elementalism" data-image-key="Skill_Elementalism.png" data-image-name="Skill Elementalism.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/a/af/Skill_Elementalism.png/revision/latest?cb=20171223042231" width={32} height={32} /></p>
        <p>(Ark, Beast Tamer, Explorer Archer, Explorer Thief, Kinesis, Luminous, Mercedes, Phantom, Explorer Pirate, Zero, Shade, Kanna)</p>
        <p>Rational: A sort of what I'd use normally for both bossing and training without having to switch. I try to incorporate as much damage as possible but also include important stats I need such as %Crit Rate, %Crit Damage and %Ignore DEF</p>
        <p>Other options: <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Skill_Cygnus_Blessing.png/revision/latest?cb=20130525122103" alt="Skill Cygnus Blessing" data-image-key="Skill_Cygnus_Blessing.png" data-image-name="Skill Cygnus Blessing.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/f/f0/Skill_Cygnus_Blessing.png/revision/latest?cb=20130525122103" width={32} height={32} /> (Damage, Abnormal Status Resistance), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Wild_Rage.png/revision/latest?cb=20140623054437" alt="Skill Wild Rage" data-image-key="Skill_Wild_Rage.png" data-image-name="Skill Wild Rage.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/4/4c/Skill_Wild_Rage.png/revision/latest?cb=20140623054437" width={32} height={32} /> (Damage), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Fury_Unleashed.png/revision/latest?cb=20140808220635" alt="Skill Fury Unleashed" data-image-key="Skill_Fury_Unleashed.png" data-image-name="Skill Fury Unleashed.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/5/52/Skill_Fury_Unleashed.png/revision/latest?cb=20140808220635" width={32} height={32} /> (Boss Damage), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/0/07/Skill_Rune_Persistence.png/revision/latest?cb=20160624211333" alt="Skill Rune Persistence" data-image-key="Skill_Rune_Persistence.png" data-image-name="Skill Rune Persistence.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/0/07/Skill_Rune_Persistence.png/revision/latest?cb=20160624211333" width={32} height={32} /> (EXP Gain), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/1/1c/Skill_Empirical_Knowledge.png/revision/latest?cb=20191123114304" alt="Skill Empirical Knowledge" data-image-key="Skill_Empirical_Knowledge.png" data-image-name="Skill Empirical Knowledge.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/1/1c/Skill_Empirical_Knowledge.png/revision/latest?cb=20191123114304" width={32} height={32} /> (Damage, %Ignore DEF), <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/9/92/Skill_Spirit_of_Freedom.png/revision/latest?cb=20160821170212" alt="Skill Spirit of Freedom" data-image-key="Skill_Spirit_of_Freedom.png" data-image-name="Skill Spirit of Freedom.png" data-src="https://vignette.wikia.nocookie.net/maplestory/images/9/92/Skill_Spirit_of_Freedom.png/revision/latest?cb=20160821170212" width={32} height={32} /> (Invincibility after reviving) (Cygnus Knights, Demon Avenger, Demon Slayer, Evan, Explorer Mage, and Resistance</p>
        <hr />
      </div>
    )
}

export default LinkSkills
