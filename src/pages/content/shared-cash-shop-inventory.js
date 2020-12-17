import React from 'react'
import '../../css/page.css';
import '../../css/shared-cash-shop.css';

function SharedCashShopInventory() {
    return (
        <div>
            <img src="https://i.imgur.com/r9iQ8pR.png" alt="Cash Shop Inventory"/>
            <p>Below is a list of classes that share Cash Shop inventories. Each different color group shares Cash Shop inventories</p>
            <div class="cash-shop-container">
            <table>
                <thead>
                <tr>
                    <th />
                    <th>Warrior</th>
                    <th>Magician</th>
                    <th>Archer</th>
                    <th>Thief</th>
                    <th>Pirate</th>
                </tr>
                </thead>
                <tbody>
                <tr className="explorers-block">
                    <td style={{color: 'black'}}><strong>Explorers</strong></td>
                    <td style={{color: 'black'}}>Paladin</td>
                    <td style={{color: 'black'}}>Ice / Lightning Mage</td>
                    <td style={{color: 'black'}}>Marksman</td>
                    <td style={{color: 'black'}}>Night Lord</td>
                    <td style={{color: 'black'}}>Cannoneer</td>
                </tr>
                <tr className="explorers-block">
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}}>Dark Knight</td>
                    <td style={{color: 'black'}}>Fire / Poison Mage</td>
                    <td style={{color: 'black'}}>Bowmaster</td>
                    <td style={{color: 'black'}}>Shadower</td>
                    <td style={{color: 'black'}}>Buccaneer</td>
                </tr>
                <tr className="explorers-block">
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}}>Hero</td>
                    <td style={{color: 'black'}}>Bishop</td>
                    <td style={{color: 'black'}}>Pathfinder</td>
                    <td style={{color: 'black'}}>Dual Blade</td>
                    <td style={{color: 'black'}}>Corsair</td>
                </tr>
                <tr className="explorers-block">
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}}>Jett / Zen</td>
                </tr>
                <tr>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr className="cygnus-block">
                    <td style={{color: 'black'}}><strong>Cygnus Knights</strong></td>
                    <td style={{color: 'black'}}>Dawn Warrior</td>
                    <td style={{color: 'black'}}>Blaze Wizard</td>
                    <td style={{color: 'black'}}>Wind Archer</td>
                    <td style={{color: 'black'}}>Night Walker</td>
                    <td style={{color: 'black'}}>Thunder Breaker</td>
                </tr>
                <tr className="cygnus-block">
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}}>Mihile</td>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr className="heroes-block">
                    <td style={{color: 'black'}}><strong>Heroes</strong></td>
                    <td style={{color: 'black'}}>Aran</td>
                    <td style={{color: 'black'}}>Luminous</td>
                    <td style={{color: 'black'}}>Mercedes</td>
                    <td style={{color: 'black'}}>Phantom</td>
                    <td style={{color: 'black'}}>Shade</td>
                </tr>
                <tr className="heroes-block">
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}}>Evan</td>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr className="resistance-block">
                    <td style={{color: 'black'}}><strong>Resistance</strong></td>
                    <td style={{color: 'black'}}>Blaster</td>
                    <td style={{color: 'black'}}>Battle Mage</td>
                    <td style={{color: 'black'}}>Wild Hunter</td>
                    <td style={{color: 'black'}}>Xenon</td>
                    <td style={{color: 'black'}}>Mechanic</td>
                </tr>
                <tr className="resistance-block">
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}}>Demon Slayer</td>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr className="resistance-block">
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}}>Demon Avenger</td>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr className="nova-block">
                    <td style={{color: 'black'}}><strong>Nova</strong></td>
                    <td style={{color: 'black'}}>Kaiser</td>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}}>Cadena</td>
                    <td style={{color: 'black'}}>Angelic Buster</td>
                </tr>
                <tr>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr className="sengoku-block">
                    <td style={{color: 'black'}}><strong>Sengoku</strong></td>
                    <td style={{color: 'black'}}>Hayato</td>
                    <td style={{color: 'black'}}>Kanna</td>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr className="flora-block">
                    <td style={{color: 'black'}}><strong>Flora</strong></td>
                    <td style={{color: 'black'}}>Adele</td>
                    <td style={{color: 'black'}}>Illium</td>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}}>Ark</td>
                </tr>
                <tr>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr className="friendstory-block">
                    <td style={{color: 'black'}}><strong>FriendStory</strong></td>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}}>Kinesis</td>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr className="childofgod-block">
                    <td style={{color: 'black'}}><strong>Child of God<strong /></strong></td>
                    <td style={{color: 'black'}}>Zero</td>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr className="anima-block">
                    <td style={{color: 'black'}}><strong>Anima</strong></td>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}}>Hoyoung</td>
                    <td style={{color: 'black'}} />
                </tr>
                <tr>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                <tr className="chase-block">
                    <td style={{color: 'black'}}><strong>Beast Tamer</strong></td>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}}>Beast Tamer</td>
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                    <td style={{color: 'black'}} />
                </tr>
                </tbody>
            </table>
            </div>
            <p>For an image version of this check out: </p>
            <a href="https://cdn.discordapp.com/attachments/312354082356592641/678635478618210324/unknown.png" target="_blank" rel="noopener noreferrer">https://cdn.discordapp.com/attachments/312354082356592641/678635478618210324/unknown.png</a>
            <ul>
            <li>Credits to Kradian South #4949 for the image version</li>
            </ul>
      </div>
    );
}

export default SharedCashShopInventory;
