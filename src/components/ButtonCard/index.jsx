import { CurrencyDollar } from '@phosphor-icons/react/dist/ssr';
import './styles.scss';

export function ButtonCard({ variant }) {

  return (
    <button className='buttoncard-container'>
      <div id="symbol" className={variant} >
        <CurrencyDollar size={26} weight='bold' />
      </div>
      <span>
        {variant == 'buy' ? 'Buy BTC' : 'Sell BTC'}
      </span>
    </button>
  )
}