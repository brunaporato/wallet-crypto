import {
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';
import { data } from '../../utils/data';
import './styles.scss';

// eslint-disable-next-line react/prop-types
export function Graph({ num }) {
  return (
    <ResponsiveContainer width="100%" height={130} className='graph'>
                <AreaChart
                    width={600}
                    height={600}
                    data={data.slice(0, num)}
                    syncId="anyId"
                    margin={{
                        top: 20,
                        right: 40,
                        left: -60,
                        bottom: -35,
                    }}
                >
                    <XAxis axisLine={false} dataKey="name" tick={false} />
                    <YAxis axisLine={false} tick={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="USD" stroke="#ffc743" fill="#FFF6ED" />
                </AreaChart>
            </ResponsiveContainer>
  )
}