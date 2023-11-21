import { ButtonCard } from '../../components/ButtonCard';
import { CryptoCard } from '../../components/CryptoCard';
import { ChartCard } from '../../components/ChartCard';
import { Header } from '../../components/Header';
import { useState } from 'react';
import './styles.scss';
import { Navbar } from '../../components/Navbar';
import { DropdownMenu } from '../../components/DropdownMenu';

export function Home() {
  const [num, setNum] = useState(4);
  const [activeTab, setActiveTab] = useState('day');
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  function handleTabClick(tab) {
    setActiveTab(tab);
    switch(tab) {
      case 'day': {
        setNum(4);
        break;
      }
      case 'week': {
        setNum(5);
        break;
      }
      case 'month': {
        setNum(6);
        break;
      }
      case 'year': {
        setNum(8);
        break;
      }
      default: {
        setNum(4);
      }
    }
  }

  const btcToDollarToday = 5.4272;

  return (
    <div className='home-container'>
      <Header title='Bitcoin Wallet' toggleMenu={toggleMenu}/>
      
      <main>
        <CryptoCard
          currency='btc'
          ammountCrypto='3.529020'
          dollar={btcToDollarToday}
          percent={2.32}
        />
        <section className='nav-charts'>
          <span
            onClick={() => handleTabClick('day')}
            className={activeTab === 'day' ? 'active' : ''}
          >
            Day
          </span>
          <span
            onClick={() => handleTabClick('week')}
            className={activeTab === 'week' ? 'active' : ''}
          >
            Week
          </span>
          <span 
            onClick={() => handleTabClick('month')}
            className={activeTab === 'month' ? 'active' : ''}
          >
            Month
          </span>
          <span 
            onClick={() => handleTabClick('year')}
            className={activeTab === 'year' ? 'active' : ''}
          >
            Year
          </span>
        </section>
        <ChartCard num={num} dollar={btcToDollarToday} />
        <div className="buttons">
          <ButtonCard variant='buy' />
          <ButtonCard variant='sell' />
        </div>
      </main>
      <Navbar />
      {menuVisible && <div className="overlay" onClick={toggleMenu}></div>}
      {menuVisible && <DropdownMenu />}
    </div>
  )
}