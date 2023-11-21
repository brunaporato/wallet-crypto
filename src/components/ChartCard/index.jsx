import { DotOutline } from '@phosphor-icons/react/dist/ssr';
import './styles.scss';
import { Graph } from '../Graph';
import { data } from '../../utils/data';

// eslint-disable-next-line react/prop-types
export function ChartCard({ num, dollar }) {

  const dataPerSelection = data.slice(0, num);

  function lowerHigherUsd(data) {
    if (data.length === 0) {
      return { lower: null, higher: null };
    }
  
    let higher = data[0].USD;
    let lower = data[0].USD;
  
    for (let i = 1; i < data.length; i++) {
      const usd = data[i].USD;
  
      if (usd > higher) {
        higher = usd;
      }
  
      if (usd < lower) {
        lower = usd;
      }
    }
  
    return { higher, lower };
  }

  const { lower, higher } = lowerHigherUsd(dataPerSelection);

  return (
   <div className="chartcard-container">
    <section className="top">
      <div className="lower">
        <DotOutline size={32} weight='fill' color='#ef2755'/>
        <span>Lower: ${lower}</span>
      </div>
      <div className="higher">
        <DotOutline size={32} weight='fill' color='#1ec070'/>
        <span>Higher: ${higher}</span>
      </div>
    </section>
    <Graph num={num} />
    <footer>
      <div className="usd">
        <DotOutline size={32} weight='fill' color='#ffc843'/>
        <span>1 BTC: ${dollar}</span>
      </div>
    </footer>
   </div>
  )
}