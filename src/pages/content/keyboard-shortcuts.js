import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function KeyboardShortcuts() {
    return (
        <div>
            <h3 id="top">Quick Jumps</h3>
            <ul>
                <li><Link smooth to="#quickslots" scroll={el => scrollWidthOffset(el)}>Change Quickslots</Link></li>
                <li><Link smooth to="#quest-log" scroll={el => scrollWidthOffset(el)}>Quest Log</Link></li>
                <li><Link smooth to="#world-map" scroll={el => scrollWidthOffset(el)}>World Map</Link></li>
                <li><Link smooth to="#equipment" scroll={el => scrollWidthOffset(el)}>Equipment</Link></li>
                <li><Link smooth to="#user-list" scroll={el => scrollWidthOffset(el)}>Friends, Party, Boss Party</Link></li>
                <li><Link smooth to="#item-pot" scroll={el => scrollWidthOffset(el)}>Item Pot</Link></li>
                <li><Link smooth to="#maple-guide" scroll={el => scrollWidthOffset(el)}>Maple Guide</Link></li>
                <li><Link smooth to="#inventory" scroll={el => scrollWidthOffset(el)}>Item Inventory</Link></li>
                <li><Link smooth to="#character-stat" scroll={el => scrollWidthOffset(el)}>Character Stat</Link></li>
                <li><Link smooth to="#guild" scroll={el => scrollWidthOffset(el)}>Guild</Link></li>
                <li><Link smooth to="#whisper" scroll={el => scrollWidthOffset(el)}>Whisper</Link></li>
                <li><Link smooth to="#skill" scroll={el => scrollWidthOffset(el)}>Skill</Link></li>
                <li><Link smooth to="#notifier" scroll={el => scrollWidthOffset(el)}>Notifier</Link></li>
                <li><Link smooth to="#medals" scroll={el => scrollWidthOffset(el)}>Medals</Link></li>
                <li><Link smooth to="#maple-chat" scroll={el => scrollWidthOffset(el)}>Maple Chat</Link></li>
                <li><Link smooth to="#events" scroll={el => scrollWidthOffset(el)}>Events</Link></li>
                <li><Link smooth to="#professions" scroll={el => scrollWidthOffset(el)}>Professions</Link></li>
                <li><Link smooth to="#minimap" scroll={el => scrollWidthOffset(el)}>Minimap</Link></li>
                <li><Link smooth to="#char-info" scroll={el => scrollWidthOffset(el)}>Char Info</Link></li>
                <li><Link smooth to="#soul-weapon" scroll={el => scrollWidthOffset(el)}>Soul Weapon</Link></li>
                <li><Link smooth to="#battle-analysis" scroll={el => scrollWidthOffset(el)}>Battle Analysis</Link></li>
                <li><Link smooth to="#enhance" scroll={el => scrollWidthOffset(el)}>Enhance Equipment</Link></li>
                <li><Link smooth to="#monster-collection" scroll={el => scrollWidthOffset(el)}>Monster Collection</Link></li>
                <li><Link smooth to="#legion" scroll={el => scrollWidthOffset(el)}>Manage Legion</Link></li>
                <li><Link smooth to="#maple-news" scroll={el => scrollWidthOffset(el)}>Maple News</Link></li>
                <li><Link smooth to="#picture-mode" scroll={el => scrollWidthOffset(el)}>Picture Mode</Link></li>
                <li><Link smooth to="#mute" scroll={el => scrollWidthOffset(el)}>Mute</Link></li>
                <li><Link smooth to="#maple-relay" scroll={el => scrollWidthOffset(el)}>Maple Relay</Link></li>
                <li><Link smooth to="#maple-achievement" scroll={el => scrollWidthOffset(el)}>Maple Achievement</Link></li>
                <li><Link smooth to="#familiar" scroll={el => scrollWidthOffset(el)}>Familiar</Link></li>
                <li><Link smooth to="#emoticon" scroll={el => scrollWidthOffset(el)}>Emoticons</Link></li>
            </ul>
            <IntroKeyboardShortcuts/>
            <ChangeQuickslots/>
            <QuestLog/>
            <WorldMap/>
            <Equipment/>
            <FriendsPartyBoss/>
            <ItemPot/>
            <MapleGuide/>
            <Items/>
            <CharacterStat/>
            <Guild/>
            <Whisper/>
            <Skill/>
            <Notifier/>
            <Medals/>
            <MapleChat/>
            <Events/>
            <Professions/>
            <Minimap/>
            <CharInfo/>
            <SoulWeapon/>
            <BattleAnalysis/>
            <EnhanceEquipment/>
            <MonsterCollection/>
            <Legion/>
            <MapleNews/>
            <PictureMode/>
            <Mute/>
            <MapleRelay/>
            <MapleAchievement/>
            <Familiar/>
            <Emoticon/>
        </div>
    )
}

function IntroKeyboardShortcuts(){
    return(
        <div>
            <img className="repository-image" src="https://i.imgur.com/lOM9unE.png" alt="Keyboard Shortcuts"/>
            <p>By pressing ' \ ' by default will bring up the Keyboard Shortcuts. You can also press 'ESC' by default and going to "Key Bindings" to also access the Keyboard Shortcuts. Here you can move around and place your Skills and usable items into any of the open slots. You can also Right-Click Key Slots to remove an item from a Key Slot</p>
        </div>
    )
}

function ChangeQuickslots(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="quickslots">Change Quickslots</h3>
            <img className="repository-image" src="https://i.imgur.com/kxT4MGo.png" alt="Quickslots"/>
            <p>Pressing the "Change Quickslots" button on the bottom left, you can change the position of each Key Slot in the bottom right Quickslots</p>
            <p>First, click on the desired Key Slot and then pressing any Key to change what the Key Slot displays</p>
        </div>
    )
}

function QuestLog(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="quest-log">Q - Quest Log</h3>
            <img className="repository-image" src="https://i.imgur.com/MEIbx79.png" alt="Quest Log"/>
            <p>Here you can view all Available, In Progress, and Completed Quests in the Quest Log</p>
            <p>In the Available tab, there are two buttons, one to show quests for your current location and another to filter and display only quests within your level range. You can also search for quests at the top using a quest's name</p>
        </div>
    )
}

function WorldMap(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="world-map">W - World Map</h3>
            <img className="repository-image" src="https://i.imgur.com/Zc3jRlG.png" alt="World Map"/>
            <p>Here you can view all areas in the game that have world maps</p>
            <p>At the top left corner, you can view the 3 major collections of areas, Maple World, Grandis, and Arcane River. Maple World and Grandis are the two dimensions and Arcane River is an Lv. 200 area. Right beside it, you can select a specific region within that area</p>
            <p>You can Left-Click into specific areas in the World Map and also Right-Click to expand and go backward</p>
            <p>On the right-hand side, you have a "Begin Navigation" button where clicking on one of the dots on the World Map and then clicking the button, an arrow will appear above your head that guides you to that map. You can also double-click to start a navigation or if you have a <img src="https://maplestory.io/api/GMS/214/item/2431958/icon" alt=""/> <a href="https://maplestory.wiki/GMS/214/item/5040004" target="_blank" rel="noopener noreferrer">Hyper Teleport Rock</a>, you will instantly teleport to that map. On certain maps, you will also see an "Auto Pilot" button. Auto Pilot is a novelty feature where if you are in an area that supports it, you can click on one of the dots and you will slowly fly to that area. However, you need to buy a permit for certain areas. Lastly, there is also an "Open Search Window" button that toggles a search bar on the right. The search bar allows you to search for an NPC, Monster or Map and direct you to the map the item is located in</p>
        </div>
    )
}

function Equipment(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="equipment">E - Equipment</h3>
            <img className="repository-image" src="https://i.imgur.com/X7YqI6x.png" alt="Equipment UI"/>
            <p>Here you can view all the equipment you have equipped</p>
            <p><img className="repository-image" src="https://i.imgur.com/XuWf0Vc.png" alt="Effect"/><img className="repository-image" src="https://i.imgur.com/FHSJ22Q.png" alt="Beauty Salon"/></p>
            <p>On the bottom, you will see the "Effect" button, here you can right-click equipment that has visual effects to toggle them ON/OFF. Right beside it is the "Salon" button where you can manage all of your Hairstyles and Facestyles. In the Beauty Salon, you can save hair or face and change back to them later. To gain more slots you will need to buy <img src="https://maplestory.io/api/GMS/214/item/2435192/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/5552000/icon" alt=""/> Beauty Salon Slot Coupons from the Rewards Point Shop (in the Cash Shop)</p>
            <h4>Equip Tab</h4>
            <p><img className="repository-image" src="https://i.imgur.com/HFyeBlx.png" alt="Arcane Force"/><img className="repository-image" src="https://i.imgur.com/sLm7DWr.png" alt="Vessel"/></p>
            <p>In the Equip Tab, you can see all the gear that provides stats to your character</p>
            <p>The "Arcane Equipment" window will appear once you have reached Lv. 200 and obtained your first Arcane Symbol. At the bottom right, there will be a "Vessel" button if you have gained access to Commerci Trade Voyages</p>
            <h4>Cash Tab</h4>
            <img className="repository-image" src="https://i.imgur.com/c5JNVSC.png" alt="Cash Tab"/>
            <p>In the Cash Tab, you can see all Cash Item gear that covers over your character's regular equipment. Cash clothing are vanity items and do not alter the stats of your main equipment</p>
            <h4>Pet Tab</h4>
            <img className="repository-image" src="https://i.imgur.com/g7rzL3Q.png" alt="Pet Tab"/>
            <p>In the Pet Tab, you can manage all of your active pets. Here you can also manage your pet skills if your pet has any</p>
            <h4>Android Tab</h4>
            <img className="repository-image" src="https://i.imgur.com/pEjUzEC.png" alt="Android Tab"/>
            <p>In the Android Tab, if you have an Android active, you can dress it up with some Cash clothing. You will also see on the top right, there is a "Shop" button. For Androids with the Shop function, you can access them as NPC Vendors</p>
            <h4>Other Tabs</h4>
            <img className="repository-image" src="https://i.imgur.com/3wb6Cqr.png" alt="Other Equipment Tab"/>
            <p>Some classes have an additional tab such as Evan or Mechanic have extra equipment that they can equip</p>
        </div>
    )
}

function FriendsPartyBoss(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="user-list">R - Friends, P - Party, T - Boss Party</h3>
            <img className="repository-image" src="https://i.imgur.com/rYU4NdZ.png" alt="Friend Tab"/>
            <p>Pressing 'R', 'P', and 'T' will bring up the Maple User List UI where you can access your Friends List, Party, Boss Matchmaking System, and your Blacklist</p>
        </div>

    )
}

function ItemPot(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="item-pot">Y - Item Pot</h3>
            <img className="repository-image" src="https://i.imgur.com/a9SZ5w3.png" alt="Item Pot"/>
            <p>The <a href="https://strategywiki.org/wiki/MapleStory/Item_Pot" target="_blank" rel="noopener noreferrer">Item Pot</a> is a forgotten feature from the <a href="https://maplestorywiki.net/w/MapleStory:_Chaos" target="_blank" rel="noopener noreferrer">Chaos Update</a> where you could place a special item <img src="https://cdn.wikimg.net/en/strategywiki/images/d/de/MS_Item_Gemstone_Imp.png" alt="MS Item Gemstone Imp.png" width="31" height="26"/> <img src="https://cdn.wikimg.net/en/strategywiki/images/d/d0/MS_Item_Sweet_Fruit.png" alt="MS Item Sweet Fruit.png" width="28" height="28"/> <img src="https://cdn.wikimg.net/en/strategywiki/images/7/74/MS_Item_Golden_Maple_Fruit.png" alt="MS Item Golden Maple Fruit.png" width="31" height="30"/> <img src="https://cdn.wikimg.net/en/strategywiki/images/c/c0/MS_Item_Magic_Christmas_Socks.png" alt="MS Item Magic Christmas Socks.png" width="33" height="30"/> <img src="https://cdn.wikimg.net/en/strategywiki/images/5/52/MS_item_Alarm_Clock_%28Left%29.png" alt="MS item Alarm Clock (Left).png" width="32" height="30"/> <img src="https://cdn.wikimg.net/en/strategywiki/images/c/c8/MS_item_Jukebox_%28Left%29.png" alt="MS item Jukebox (Left).png" width="32" height="32"/> <img src="https://cdn.wikimg.net/en/strategywiki/images/6/6d/MS_item_Pounding_Heart_%28Left%29.png" alt="MS item Pounding Heart (Left).png" width="31" height="31"/> <img src="https://cdn.wikimg.net/en/strategywiki/images/8/88/MS_item_Triangular_Rice_Ball_%28Left%29.png" alt="MS item Triangular Rice Ball (Left).png" width="32" height="32"/> and let it grow and harvest for some rewards. This feature will most likely be unused by most players</p>
        </div>
    )
}

function MapleGuide(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="maple-guide">U - Maple Guide</h3>
            <p><img className="repository-image" src="https://puu.sh/G7cCC/0e946da7df.png" alt="Maple Guide Expanded"/><img className="repository-image" src="https://i.imgur.com/5PW5hFx.png" alt="Maple Guide"/></p>
            <p>Here you can view Recommended Quests and Content for your level range. Pressing the Maple Guide Key while the Maple Guide is active will expand it into a bigger window</p>
            <p>In the expanded window, you can see all the available content for all levels. You can teleport directly to different places once you have reached the recommended level. You can only teleport back to that area if you are less than 10 levels above the maximum recommended level. You can gain "Completion Stamp" by completing certain requirements to teleport back to that area regardless of your level. Beside some levels, there is a Star button which will bring up a tutorial for a feature in the game. Note, the rewards listed in the guide are not guaranteed but instead let you know what sort of rewards are obtainable</p>
            <p>In the "Boss Content" tab, you will see all the bosses in the game. In the "Special Content" tab, you will see content for Story-type content, Progression-type content, Competitive-type content and lastly Arcane River related content</p>
        </div>
    )
}

function Items(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="inventory">I - Item Inventory</h3>
            <img className="repository-image" src="https://i.imgur.com/kjBuRsi.png" alt="Expanded Inventory"/>
            <p>Here you will see all the items you have obtained and as well as how much Mesos and Maple Points you have. Note, Maple Points are shared within your whole account.</p>
            <img className="repository-image" src="https://i.imgur.com/W7PqhD8.png" alt="Inventory bottom"/>
            <p>At the bottom, there are buttons for organizing your inventory and expanding the view</p>
            <p>Additionally, there are other buttons, the first three icons except for the Magnifying Glass are related to Professions. The gear icon is for extracting your equipment into crafting items like <img src="https://maplestory.io/api/GMS/214/item/4021013/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/4021014/icon" alt=""/><img src="https://maplestory.io/api/GMS/214/item/4021015/icon" alt=""/> Item Crystals. The flask icon is for fusing two of the same equipment together to form a new one with different stats. The heart icon is for your Item Pot. The magnifying glass icon is for revealing an equipment's Potential. You will notice that certain equipment will have a pink box around them, this means that they have a Hidden Potential that needs to be revealed. The blue hammer icon is for Transfer Hammer and the red hammer is for Spell Tracing and Star Forcing gear</p>

        </div>
    )
}

function CharacterStat(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="character-stat">S - Character Stat</h3>
            <img className="repository-image" src="https://i.imgur.com/qodv0o9.png" alt="Character Stat"/>
            <p>Here you can manage all of your characters stats, allocate points for your Hyper Stats, and manage your Inner Ability</p>
            <p>For more info on what each stat means, check out: <a href="https://www.grandislibrary.com/contents/stat-terms" target="_blank" rel="noopener noreferrer">https://www.grandislibrary.com/contents/stat-terms</a></p>
        </div>
    )
}

function Guild(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="guild">G - Guild</h3>
            <img className="repository-image" src="https://i.imgur.com/lOrhPYJ.png" alt="Guild UI"/>
            <p>Here you can access and manage Guild features</p>
            <p>Pressing the "Join Guild" button will bring up a list of guilds that are currently recruiting. You can also manage your Guild requests here. At the bottom, there is also a search button that brings up a search window</p>
        </div>
    )
}

function Whisper(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="whisper">H - Whisper</h3>
            <img className="repository-image" src="https://i.imgur.com/wSVgXRK.png" alt="Whisper"/>
            <p>This will bring up a window where you can type in the name of a Character you would like to whisper. Whispering a player will privately message them</p>
        </div>
    )
}

function Skill(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="skill">K - Skill</h3>
            <img className="repository-image" src="https://i.imgur.com/l88te7M.png" alt="Skill UI"/>
            <p>Here you can manage all of your class' Skills. You can also drag Active Skills into an empty Key Slot in the Keyboard Shortcuts</p>
            <p>On the bottom left, there is a button that opens up your Hyper Skills window but can only be used Lv. 140+. On the right-hand side, you will see a "Guild Skill" button which will bring up your Guild UI. There is also a "Mount" button that opens up your Character Info where your mounts are located. Lastly, there is the "Macro" button which opens up the Macro window. Here you can assign up to 3 skills to a Marco to be used consecutively. You can also name your Macro and make your character shout the Macro name</p>
        </div>
    )
}

function Notifier(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="notifier">L - Notifier</h3>
            <img className="repository-image" src="https://i.imgur.com/C7H8jDl.png" alt="Notifier"/>
            <p>Pressing this Key will toggle a window on screen that provides information on some currently active quests</p>
        </div>
    )
}

function Medals(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="medals">; Medals</h3>
            <img className="repository-image" src="https://i.imgur.com/DPUHjTT.png" alt="Medals"/>
            <p>Pressing this Key will open a UI to manage all of the Medals that you have obtained on your character. There are a few special Medals that do not get registered to the Medal UI but most are rare and unobtainable</p>
            <p>At the bottom, you can sort your medals by name or by time. On the bottom right, there is a "Reissue" button that allows you to reobtain any selected Medal but consumes some Mesos. You can also double-click a Medal to reissue</p>
        </div>
    )
}

function MapleChat(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="maple-chat">C - Maple Chat</h3>
            <img className="repository-image" src="https://i.imgur.com/5vAIF3k.png" alt="Maple Chat"/>
            <p>Here you can invite players to chat with. There are also emotes available at the bottom left on the chat bar. For more info, you can press the '?' button on the top right. As well, you can minimize and expand the window by pressing the '+' and '-' buttons on the top right</p>
        </div>
    )
}

function Events(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="events">V - Events</h3>
            <img className="repository-image" src="https://i.imgur.com/jiakY2K.png" alt="Events"/>
            <p>Pressing the Key will open a UI that displays all current and upcoming events and their start and end date times</p>
        </div>
    )
}

function Professions(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="professions">B - Professions</h3>
            <img className="repository-image" src="https://i.imgur.com/ui14TDe.png" alt="Professions"/>
            <p>Pressing the Key will open the Profressions UI where you can view your Traits stats and any Professions you have. On the top right, you will also see a button called "Ardentmill" which will teleport you to the Professions town, Ardentmill. The skill can only be used Lv. 35+ and has a 30 min cooldown</p>
            <p>In the Traits tab, you can see your current Fatigue and Mastery EXP &amp; Level on the left-hand side</p>
        </div>
    )
}

function Minimap(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="minimap">M - Minimap</h3>
            <img className="repository-image" src="https://i.imgur.com/swBKnYq.png" alt="Minimap"/>
            <p>Pressing this Key will adjust the size of your minimap</p>
        </div>
    )
}

function CharInfo(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="char-info">Char Info</h3>
            <img className="repository-image" src="https://i.imgur.com/WV7DPsA.png" alt="Char Info"/>
            <p>Pressing this button will open your Character Info which displays information about your character like what you have equipped, chairs, Traits stats, Medal collection, and Damage Skins. Additionally, you can double-click a character to view their Character Info</p>
        </div>
    )
}

function SoulWeapon(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="soul-weapon">Soul Weapon</h3>
            <img className="repository-image" src="https://i.imgur.com/yq8wiZi.png" alt="Soul Weapon"/>
            <p>If you have a Soul Weapon equipped, this Key will toggle the Soul Weapon UI where you can manage Soul Weapon features</p>
        </div>
    )
}

function BattleAnalysis(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="battle-analysis">Battle Analysis</h3>
            <p><img className="repository-image" src="https://i.imgur.com/nUvHa0Y.png" alt="Battle Analysis Expanded"/><img className="repository-image" src="https://i.imgur.com/ejdlTnG.png" alt="Battle Analysis"/></p>
            <p>Pressing the Key will display a small window where you can record battle information such as total damage dealt, EXP acquired, and other valuable details. Pressing the '+' button will expand the UI to display more detailed information</p>
        </div>
    )
}

function EnhanceEquipment(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="enhance">Enhance Equipment</h3>
            <img className="repository-image" src="https://i.imgur.com/398G3w0.png" alt="Enhance Equipment"/>
            <p>Pressing the Key will open the UI for upgrading your equipment with Spell Traces (in Regular Servers) and for Star Forcing</p>
            <p>For more info on enhancing and upgrading your equipment, check out: <a href="https://www.grandislibrary.com/contents/upgrading-enhancing-equipment" target="_blank" rel="noopener noreferrer">https://www.grandislibrary.com/contents/upgrading-enhancing-equipment</a></p>
        </div>
    )
}

function MonsterCollection(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="monster-collection">Monster Collection</h3>
            <img className="repository-image" src="https://i.imgur.com/5kRDS9V.png" alt="Monster Collection"/>
            <p>Pressing the Key will open the Monster Collection window. Here you can see all the monsters you've registered so far. Defeating monsters have a very small chance of registering into your Monster Collection. Note, Monster Collection is different from Familiars</p>
        </div>
    )
}

function Legion(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="legion">Manage Legion</h3>
            <img className="repository-image" src="https://i.imgur.com/3N4VOxk.png" alt="Legion"/>
            <p>Pressing the Key will open a UI where you can manage your Legion System. To learn more about the Legion System, check out: <a href="https://maplestorywiki.net/w/Legion_System" target="_blank" rel="noopener noreferrer">https://maplestorywiki.net/w/Legion_System</a></p>
        </div>
    )
}

function MapleNews(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="maple-news">Maple News</h3>
            <img className="repository-image" src="https://i.imgur.com/Fql3seQ.png" alt="Maple News"/>
            <p>Pressing this Key will open a window that displays recent news. This window will also open whenever you log on to a character</p>
        </div>
    )
}

function PictureMode(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="picture-mode">Picture Mode</h3>
            <p>Pressing this Key will hide your UI. To make your UI appear again, you can press the ESC Key, Picture Mode Key, or by moving to another map</p>
        </div>
    )
}

function Mute(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="mute">Mute</h3>
            <p>Pressing this Key will mute your game. Press the Key again to unmute</p>
        </div>
    )
}

function MapleRelay(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="maple-relay">Maple Relay</h3>
            <img className="repository-image" src="https://i.imgur.com/3k1MN8E.png" alt="Maple Relay"/>
            <p>This Key is related to an event and can only be opened when the event is available. To learn more about Maple Relay, check out: <a href="https://www.grandislibrary.com/event/maple-relay" target="_blank" rel="noopener noreferrer">https://www.grandislibrary.com/event/maple-relay</a></p>
        </div>
    )
}

function MapleAchievement(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="maple-achievement">Maple Achievement</h3>
            <img className="repository-image" src="https://i.imgur.com/rOpkgp7.png" alt="Maple Achievement"/>
            <p>Pressing this Key will open a UI to check out all your achievements you've made on your account. Achievements are tied to your World/Server</p>
        </div>
    )
}

function Familiar(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="familiar">Familiar</h3>
            <img className="repository-image" src="https://i.imgur.com/XQhVLti.png" alt="Familiar"/>
            <p>Pressing this Key will open a UI to manage your <img src="https://static.wikia.nocookie.net/maplestory/images/6/63/Use_Snail_Familiar.png" width="24" alt="Familiar"/><img src="https://static.wikia.nocookie.net/maplestory/images/b/ba/Use_Red_Snail_Familiar.png" width="24" alt="Familiar"/> familiars that you've registered. Familiars are different from Monster Collection and instead can be summoned and provides bonus stats</p>
        </div>
    )
}

function Emoticon(){
    return(
        <div>
            <div><Link smooth to="#top" scroll={el => scrollWidthOffset(el)}>Go to top</Link></div>
            <h3 id="emoticon">Emoticon</h3>
            <img className="repository-image" src="https://i.imgur.com/BCxzUo9.png" alt="Emoticon"/>
            <p>Pressing the Key opens a window where you can view and use Emoticons. Emoticons are emotes that are displayed in speech bubbles above your character. Clicking into any of the icons on the top will show you all the possible Emoticons. You can also assign these Emoticons to a Key Slot</p>
        </div>
    )
}

//Used to scroll to anchor tags

const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

export default KeyboardShortcuts
