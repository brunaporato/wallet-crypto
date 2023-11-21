import { ButtonCard } from '../../components/ButtonCard';
import { CryptoCard } from '../../components/CyptoCard';
import { ChartCard } from '../../components/ChartCard';
import { Header } from '../../components/Header';
import { useState } from 'react';
import './styles.scss';

export function Home() {
  const [num, setNum] = useState(4);
  const [activeTab, setActiveTab] = useState('day');

  const handleTabClick = (tab) => {
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
  };

  return (
    <div className='home-container'>
      <Header title='Bitcoin Wallet'/>
      <main>
        <CryptoCard />
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
        <ChartCard num={num} />
        <div className="buttons">
          <ButtonCard variant='buy' />
          <ButtonCard variant='sell' />
        </div>
      </main>
    </div>
  )
}