import { Wallet, Compass, Bell, Gear } from '@phosphor-icons/react';
import { useState } from 'react';
import './styles.scss';

export function Navbar() {
  const [activeIcon, setActiveIcon] = useState('wallet');

  function handleIconClick(iconName) {
    setActiveIcon(iconName);
  }

  return (
    <nav>
      <ul>
        <li
          onClick={() => handleIconClick('wallet')}
          className={activeIcon === 'wallet' ? 'active' : null}
        >
          <Wallet size={32} weight="fill" />
        </li>
        <li
          onClick={() => handleIconClick('location')}
          className={activeIcon === 'location' ? 'active' : null}
        >
          <Compass size={32} weight="fill" />
        </li>
        <li
          onClick={() => handleIconClick('ring')}
          className={activeIcon === 'ring' ? 'active' : null}
        >
          <Bell size={32} weight="fill" />
        </li>
        <li
          onClick={() => handleIconClick('settings')}
          className={activeIcon === 'settings' ? 'active' : null}
        >
          <Gear size={32} weight="fill" />
        </li>
      </ul>
    </nav>
  )
}