import { Line, LineChart } from 'recharts';
import { dataList } from "../../utils/data"
import './styles.scss';

//TODO: descobrir como fazer esse grafico :D

export function Graph() {

  return (
    <div className="graph-container">
      <LineChart data={dataList} width={400} height={200}>
        <Line type='monotone' dataKey={dataList} stroke={dataList.areaStroke}/>
      </LineChart>
    </div>
  )
}