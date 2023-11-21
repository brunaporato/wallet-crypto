import { DotOutline } from '@phosphor-icons/react/dist/ssr';
import './styles.scss';
import { Graph } from '../Graph';

// eslint-disable-next-line react/prop-types
export function ChartCard({ num }) {

  return (
   <div className="chartcard-container">
    <section className="top">
      <div className="lower">
        <DotOutline size={32} weight='fill' color='#ef2755'/>
        <span>Lower: $4.894</span>
      </div>
      <div className="higher">
        <DotOutline size={32} weight='fill' color='#1ec070'/>
        <span>Higher: $6.857</span>
      </div>
    </section>
    <Graph num={num} />
    <footer>
      <div className="usd">
        <DotOutline size={32} weight='fill' color='#ffc843'/>
        <span>1 BTC: $4.894</span>
      </div>
    </footer>
   </div>
  )
}