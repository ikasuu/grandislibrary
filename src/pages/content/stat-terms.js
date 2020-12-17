import React from 'react';
import { Link } from 'react-router-dom';
import scrollWidthOffset from '../../special/Hooks';
import '../../css/page.css';

function StatTerms() {
    return (


<div>
   <h2 id="top">Quick Move</h2>
   <ul>
      <li><Link smooth to="#fame" scroll={el => scrollWidthOffset(el)}>Fame</Link></li>
      <li><Link smooth to="#range" scroll={el => scrollWidthOffset(el)}>Damage (Range)</Link></li>
      <li><Link smooth to="#mastery" scroll={el => scrollWidthOffset(el)}>Weapon Mastery</Link></li>
      <li><Link smooth to="#stat" scroll={el => scrollWidthOffset(el)}>AP Stats</Link></li>
      <li><Link smooth to="#attack" scroll={el => scrollWidthOffset(el)}>Attack / Magic Attack</Link></li>
      <li><Link smooth to="#damage" scroll={el => scrollWidthOffset(el)}>Damage Bonus</Link></li>
      <li><Link smooth to="#finaldamage" scroll={el => scrollWidthOffset(el)}>Final Damage</Link></li>
      <li><Link smooth to="#bossdamage" scroll={el => scrollWidthOffset(el)}>Boss Damage</Link></li>
      <li><Link smooth to="#ignoredef" scroll={el => scrollWidthOffset(el)}>Ignore Defense + PDR/MDR</Link></li>
      <li><Link smooth to="#ignoreelement" scroll={el => scrollWidthOffset(el)}>Ignore Elemental Resistance</Link></li>
      <li><Link smooth to="#crit" scroll={el => scrollWidthOffset(el)}>Critical Rate</Link></li>
      <li><Link smooth to="#critdamage" scroll={el => scrollWidthOffset(el)}>Critical Damage</Link></li>
      <li><Link smooth to="#abnormal" scroll={el => scrollWidthOffset(el)}>Abnormal Status Resistance</Link></li>
      <li><Link smooth to="#stance" scroll={el => scrollWidthOffset(el)}>Knockback Resistance</Link></li>
      <li><Link smooth to="#def" scroll={el => scrollWidthOffset(el)}>Defense</Link></li>
      <li><Link smooth to="#speed" scroll={el => scrollWidthOffset(el)}>Speed</Link></li>
      <li><Link smooth to="#jump" scroll={el => scrollWidthOffset(el)}>Jump</Link></li>
      <li><Link smooth to="#star" scroll={el => scrollWidthOffset(el)}>Star Force</Link></li>
      <li><Link smooth to="#arcane" scroll={el => scrollWidthOffset(el)}>Arcane Power</Link></li>
      <li><Link smooth to="#item" scroll={el => scrollWidthOffset(el)}>Item Drop Rate</Link></li>
      <li><Link smooth to="#exp" scroll={el => scrollWidthOffset(el)}>EXP Rate</Link></li>
      <li><Link smooth to="#meso" scroll={el => scrollWidthOffset(el)}>Meso Rate</Link></li>
   </ul>
   <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
   <h2 id="fame">Fame</h2>
   A vanity stat that does not affect your character and is only relevant in a social aspect
   <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
   <h2 id="range">Damage (Range)</h2>
   Your damage range which Skills use to calculate the damage they deal. The first number is your minimum damage and the second number is your maximum damage. When you attack, your damage will be between these two values
   People will normally use this for benchmarking progression but it can be highly inaccurate since there are many other stats and factors that contribute to the actual amount of damage you do and your DPS
   <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
   <h2 id="mastery">Weapon Mastery</h2>
   A stat gained from Passive Skills that reduces the distance between your minimum damage range and maximum damage range. In short, Weapon Mastery stabilizes your range by increasing your minimum damage range
   <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
   <h2 id="stat">STR, DEX, INT, LUK (AP)</h2>
   Stats that your Damage scales from - a stat used in the calculation of Damage. For most classes, you will have a Main Stat and a Secondary Stat. However, Main Stat contributes the most to your Damage and is your main priority compared to Secondary Stats. There are some classes like Demon Avenger that's Main Stat is HP and scales off of it. As well, these stats also increase your Defense stat
   Some sources of these stats come from Leveling Up, %Stats from Potentials, Star Force + Scrolls (Spell Trace), Hyper Stats and Passive Skills
   <strong>In general when you Level Up, you can use the Auto-Assign feature to allocate your AP</strong>
   <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
   <h2 id="attack">Attack + Magic Attack</h2>
   Attack is another important stat that your Damage scales from. Like AP stats, Attack is used in the calculation of Damage
   Some sources of these stats come from %Attack from Potentials, Star Force + Scrolls (Spell Trace), Hyper Stats, Passive Skills and Potion Buffs
   <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
   <h2 id="damage">Damage Bonus (%Damage)</h2>
   <div><a href="https://strategywiki.org/wiki/MapleStory/Formulas#Damage_to_Normal_Monsters" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Formulas#Damage_to_Normal_Monsters</a></div>
   A stat used in the formula calculation of Damage (Range). This stat does not provide much of a Damage increase compared to other stats
   A good analogy to understand Damage is:
   <p className="_1qeIAgB0cPwnLhDF9XSiJM">"Atk% and Damage % are multipliers with each other.</p>
   <div className="_3cjCphgls6DH-irkVaA0GM">
      <div className="_292iotee39Lmt0MkQZ2hPV RichTextJSON-root">
         <p className="_1qeIAgB0cPwnLhDF9XSiJM">Easy way to think of it is to imagine your damage output is the area of a rectangle. To maximize this area (damage output), you want to increase the length (atk%) and width (damage%) of the rectangle as much as possible right? You also want to think about balancing the length (atk%) and width (damage%) to be as similar to each other as possible, in order to maximize the area.</p>
         <p className="_1qeIAgB0cPwnLhDF9XSiJM">A 19"x1" rectangle only has 19 in<sup className="_1jsgSPRO0cMQfs1UZrSovE">2</sup> of area covered, but a 10"x10" square has 100 in<sup className="_1jsgSPRO0cMQfs1UZrSovE">2</sup> of area covered.</p>
         <p className="_1qeIAgB0cPwnLhDF9XSiJM">Since in Reboot you have a ton of % damage to start with, atk% is very valuable in order to balance out your ratio of atk% to damage% to maximize your damage output"</p>
         <a href="https://www.reddit.com/r/Maplestory/comments/45g9b0/attack_vs_damage/czxri0d?utm_source=share&utm_medium=web2x" target="_blank" rel="noopener noreferrer">https://www.reddit.com/r/Maplestory/comments/45g9b0/attack_vs_damage/czxri0d</a>
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="finaldamage">Final Damage</h2>
         <div><a href="https://strategywiki.org/wiki/MapleStory/Formulas#Final_Damage" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Formulas#Final_Damage</a></div>
         A stat that affects the actual calculated Damage (Range) you see in your Character Stat UI. As implied by the name, it is not used in the actual calculation of the Damage but instead after all calculations have been done which makes the stat very important and useful
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="bossdamage">Boss Damage</h2>
         <div><a href="https://strategywiki.org/wiki/MapleStory/Formulas#Damage_to_Boss_Monsters" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Formulas#Damage_to_Boss_Monsters</a></div>
         Similar to %Damage but only applied to Boss Monsters. It is <strong>added</strong> to %Damage in calculations
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="ignoredef">Ignore Defense + Enemy PDR/MDR</h2>
         <div><a href="https://strategywiki.org/wiki/MapleStory/Formulas#Ignore_DEF" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Formulas#Ignore_DEF</a></div>
         Ignore Enemy Defense (IED) is a stat used to ignore an enemy's PDR/MDR (Physical/Magical Defense Resistance). PDR/MDR is an enemy stat that reduces your damage, think of it as the opposite of %Final Damage
         For example, if an enemy has 50% PDR/MDR and you have 0% IED, your %Final Damage is reduced by 50%. If you have 90% IED, the enemy only has 10% of its original PDR/MDR which is now 5% so your %Final Damage is only reduced by 5%
         Now, if an enemy has 300% PDR/MDR (which most Lv. 200+ bosses have) and you have 0% IED, your %Final Damage is reduced by 300%. If you have 90% IED, the enemy will only reduce your damage by 30%. This is why for bosses with higher PDR/MDR, every percent of IED counts
         <br/><strong>Note: </strong>IED is calculated multiplicatively. This means that you will see diminishing returns if you have too many sources of IED. This is the case especially if the sources provide marginal IED. Optimally, you want large sources of IED and fewer sources of IED. Additionally, it is impossible to obtain 100% IED because of the multiplying property
         A visualization of IED calculation is: <em>[Source 1 x Source 2 x Source 3 x ... x Source n]</em>
         IED is irrelevant against normal enemies as most only have 10% PDR/MDR
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="ignoreelement">Ignore Elemental Resistance + Elemental Resistance</h2>
         <div><a href="https://strategywiki.org/wiki/MapleStory/Formulas#Monster_Elemental_Resistance" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Formulas#Monster_Elemental_Resistance</a></div>
         Elemental Resistance is another stat like PDR/MDR which reduces your %Final Damage
         To understand Elemental Resistance, better, we need to explain the forgotten mechanic called <a href="https://maplestory.fandom.com/wiki/Elemental_Attributes" target="_blank" rel="noopener noreferrer">Elemental Attributes</a>. Each Active Attack Skill in MapleStory has an Element, such as Fire, Ice, Poison, Lightning, Holy, Dark, and lastly Physical. The most important element to note is Physical which most damaging Skills are regardless of what class you are. In <a href="http://wayback.hidden-street.net/monsters/mons_eleweakness.php" target="_blank" rel="noopener noreferrer">old MapleStory</a>, certain monsters were weak against certain elements or resistant against others but nowadays most monsters are neutral to all Elements (0% Final Damage reduction). The only exception to this is bosses which are resistant to all elements which include the Physical element. This means that bosses can reduce your %Final Damage by 50%
         Players also have an Elemental Resistant stat but is irrelevant as enemies do not deal Elemental Damage (including Physical)
         Ignore Elemental Resistance is used to ignore an enemy's Elemental Resistance. However, the calculation of the reduction is multiplicative rather than subtractive. For example, 10% Ignore Elemental Resistance will reduce the %Final Damage penalty to 45% rather than 40% (50 * 0.9)
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="crit">Critical Rate</h2>
         <div><a href="https://strategywiki.org/wiki/MapleStory/Formulas#Critical_Rate" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Formulas#Critical_Rate</a></div>
         The chance for your attack to be a Critical Hit
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="critdamage">Critical Damage</h2>
         <div><a href="https://strategywiki.org/wiki/MapleStory/Formulas#Critical_Damage" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Formulas#Critical_Damage</a></div>
         The damage multiplier that is used when you land a Critical Hit. The value that you see in the Character Stat UI is added to a Lower Critical Damage (20%) and a Higher Critical Damage (50%) multiplier. Whenever you land a Critical Hit the damage multiplier will be between these two values
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="abnormal">Abnormal Status Resistance</h2>
         <div><a href="https://strategywiki.org/wiki/MapleStory/Formulas#Abnormal_Status_Resistance" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Formulas#Abnormal_Status_Resistance</a></div>
         A stat that reduces the duration of Abnormal Statuses inflicted on you. The higher the value, the shorter Abnormal Statues are
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="stance">Knockback Resistance (Stance)</h2>
         <div><a href="https://strategywiki.org/wiki/MapleStory/Formulas#Knockback_Resistance" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Formulas#Knockback_Resistance</a></div>
         A stat that determines the chance of resisting getting knocked back when hit by a monster. There are certain attacks and maps that can ignore Knockback Resistance and still push you back. As well, there are Super Knockbacks that pushes you back and leaves you briefly immobile
         There are certain classes and skills that have Super Knockback Resistance that can prevent being knockbacked by all sources. An example of this is <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/c/c3/Skill_Enhanced_Specter_State.png/revision/latest?cb=20180903020308" alt="Skill Enhanced Specter State" width={32} height={32} /> Enhanced Specter State and <img className="lzyPlcHld lzyTrns lzyLoaded" src="https://vignette.wikia.nocookie.net/maplestory/images/5/58/Skill_Sudden_Strike_%28Hayato%29.png/revision/latest?cb=20150529004057" alt="Skill Sudden Strike (Hayato)" width={32} height={32} /> Sudden Strike
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="def">Defense</h2>
         <div><a href="https://strategywiki.org/wiki/MapleStory/Formulas#Defense" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Formulas#Defense</a></div>
         A stat used to calculate the damage you take from enemies. However, this stat is not as important past Lv. 200 since most monsters in the Arcane River will deal 1 HP damage to you with enough Arcane Force. Additionally, most bosses deal %Max HP damage instead which ignores the DEF stat
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="speed">Speed (Movement Speed)</h2>
         Stat that determines how fast your character moves
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="jump">Jump</h2>
         Stat that determines how high your character can jump
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="star">Star Force</h2>
         <div><a href="https://strategywiki.org/wiki/MapleStory/Formulas#Star_Force_Maps" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Formulas#Star_Force_Maps</a></div>
         An accumulated stat from your equipment's total Star Force enhancement count. Star Force stat is used primarily for Star Force maps which are areas with higher HP monsters but give tremendously more EXP compared to regular maps
         Star Force maps have a minimum required amount of Star Force to deal 100% Damage to enemies in the map
         <strong>Note: </strong>You can only see the Star Force stat Lv. 100 and above
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="arcane">Arcane Power (AF)</h2>
         <div><a href="https://strategywiki.org/wiki/MapleStory/Formulas#Arcane_Force_Maps" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Formulas#Arcane_Force_Maps</a></div>
         <img src="https://maplestory.io/api/GMS/210.1.1/item/1712001/icon" data-v-e6b15fb6 /><img src="https://maplestory.io/api/GMS/210.1.1/item/1712002/icon" data-v-e6b15fb6 /><img src="https://maplestory.io/api/GMS/210.1.1/item/1712003/icon" data-v-e6b15fb6 /><img src="https://maplestory.io/api/GMS/210.1.1/item/1712004/icon" data-v-e6b15fb6 /><img src="https://maplestory.io/api/GMS/210.1.1/item/1712005/icon" data-v-e6b15fb6 /><img src="https://maplestory.io/api/GMS/210.1.1/item/1712006/icon" data-v-e6b15fb6 />
         An accumulated stat from Arcane Symbols that you obtain from Arcane River areas. Like Star Force, Arcane Power is used primarily in the Arcane River areas to deal damage to enemies in the area
         Arcane Power maps have a minimum required amount of Arcane Power to deal 100% Damage to enemies in the map. Higher amounts of Arcane Power allows you to deal increased damage up to 50% more
         From Arcane Symbols, you can have a maximum of 1320 AF and 13.2k Main Stat for most classes. There is also a Hyper Stat that increases your Arcane Power as well
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="item">Item Drop Rate</h2>
         <div><a href="https://strategywiki.org/wiki/MapleStory/Formulas#Drop_Rate_Stacking" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Formulas#Drop_Rate_Stacking</a></div>
         A special stat that increases the drop rate of items. However, there are some items that are affected less than others or even not affected at all from Drop Rate increases
         Item Drop Rate accumulates additively although effects from Cursed Runes and Event Drop Rate increases are multiplicative. There are also two types of Drop Rate increases, one category that can only accumulate for a maximum of <strong>200% increase</strong> and another category that can be stacked without a limit. <strong>Drop Rate increases from potential lines on equipment are included in the second category</strong>
         <br/><strong>Note</strong>: The details of how Item Drop Rate is currently calculated are unknown and still being debated what the max Item Drop Rate is and if Drop Rate from potential lines are capped or not. The info will be updated whenever more concrete info is available. Potentially, GMS and KMS may have different Item Drop Rate formulas
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="exp">EXP Rate</h2>
         <div><a href="https://www.youtube.com/watch?v=y17ktmVkiYQ" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=y17ktmVkiYQ</a></div>
         A special stat that increases the EXP gained from defeating enemies. This does not affect fixed EXP gains like quest reward EXP
         In GMS, EXP Rate increases are a mix of both multiplicative and additive - the product of the multiplicative part is summed with the additive rates
         There is no hard cap for how much EXP Rate increases you can gain but for a guide to EXP stacking, check out: <a href="https://www.reddit.com/r/Maplestory/comments/4j64v3/gms_exp_stacking_guide/" target="_blank" rel="noopener noreferrer">https://www.reddit.com/r/Maplestory/comments/4j64v3/gms_exp_stacking_guide/</a>
         <br/><strong>Note</strong>: In some servers, EXP Rate increases are additive. For example, in GMS, 2x means 2x but in other servers, it means +100% EXP. As well, 1.5x in other servers mean +50%. You'd expect 2x and 1.5x would accumulate to 3x but it could potentially only be +150% (2.5x)
         <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
         <h2 id="meso">Meso Rate</h2>
         <div><a href="https://strategywiki.org/wiki/MapleStory/Formulas#Meso_Drop" target="_blank" rel="noopener noreferrer">https://strategywiki.org/wiki/MapleStory/Formulas#Meso_Drop</a></div>
         A special stat that increases the amount of Meso dropped from defeating enemies. The increase is summed additively and has a max limit of +300%
         The minimum Mesos dropped is <em>6 x Monster Level</em> and with the 300% Meso Rate increase, the maximum Mesos dropped is <em>9 x Monster Level</em>. However, in Reboot World, enemies drop 5x the amount compared to Regular Worlds (the values shown above)
      </div>
   </div>
</div>


    )
}

export default StatTerms
