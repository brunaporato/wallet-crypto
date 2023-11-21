import { CurrencyBtc, CaretDown } from '@phosphor-icons/react';
import './styles.scss';
import { useState } from 'react';
import { ButtonCard } from '../ButtonCard';

export function CryptoCard({ currency, ammountCrypto, dollar, percent }) {
  const [showBuySell, setShowBuySell] = useState(false);

  function handleShowBuySell() {
    setShowBuySell(!showBuySell)
  }

  const ammountUSD = (ammountCrypto * dollar).toFixed(3);

  return (
    <div className="cryptocard-container">
      <section className="top">
        <div className="currency">
          <div className="icon">
            <CurrencyBtc size={32} weight='bold' />
          </div>
          <h3>{currency === 'btc' ? 'Bitcoin' : 'Crypto'}</h3>
        </div>
        <span>{currency} </span>
      </section>
      <section className="content">
        <h1>{ammountCrypto} {currency}</h1>
          <span>${ammountUSD} USD</span>
          <div className="percent">
            - {percent}%
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