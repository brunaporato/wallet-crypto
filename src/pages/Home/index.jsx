import { ButtonCard } from '../../components/ButtonCard';
import { CryptoCard } from '../../components/CyptoCard';
import { Header } from '../../components/Header';
import './styles.scss';

export function Home() {
  return (
    <div className='home-container'>
      <Header title='Bitcoin Wallet'/>
      <main>
        <CryptoCard />
        <div className="buttons">
          <ButtonCard variant='buy' />
          <ButtonCard variant='sell' />
        </div>
      </main>
    </div>
  )
}