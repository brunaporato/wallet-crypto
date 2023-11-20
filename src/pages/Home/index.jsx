import { ButtonCard } from '../../components/ButtonCard';
import { CryptoCard } from '../../components/CyptoCard';
import { Graph } from '../../components/Graph';
import { Header } from '../../components/Header';
import './styles.scss';

export function Home() {
  return (
    <div className='home-container'>
      <Header title='Bitcoin Wallet'/>
      <main>
        <CryptoCard />
        <Graph />
        <div className="buttons">
          <ButtonCard variant='buy' />
          <ButtonCard variant='sell' />
        </div>
      </main>
    </div>
  )
}