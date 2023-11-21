import { CurrencyBtc, CaretDown } from '@phosphor-icons/react';
import './styles.scss';
import { useState } from 'react';
import { ButtonCard } from '../ButtonCard';

export function CryptoCard() {
  const [showBuySell, setShowBuySell] = useState(false);

  function handleShowBuySell() {
    setShowBuySell(!showBuySell)
  }

  return (
    <div className="cryptocard-container">
      <section className="top">
        <div className="currency">
          <div className="icon">
            <CurrencyBtc size={32} weight='bold' />
          </div>
          <h3>Bitcoin</h3>
        </div>
        <span>BTC</span>
      </section>
      <section className="content">
        <h1>3.529020 BTC</h1>
          <span>$19.153 USD</span>
          <div className="percent">
            - 2.32%
          </div>
      </section>
      {showBuySell && (
        <section className='buy-sell'>
          <ButtonCard variant='buy' />
          <ButtonCard variant='sell' />
        </section>
      )}
      <button onClick={handleShowBuySell}>
        <CaretDown
          size={50}
          weight="bold"
          className={showBuySell ? 'arrow-rotated' : ''}
        />
      </button>
    </div>
  )
}