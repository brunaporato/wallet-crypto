import {
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';
import { data } from '../../utils/data';

export function Graph({ num }) {
  return (
    <ResponsiveContainer width="100%" height={130}>
                <AreaChart
                    width={600}
                    height={200}
                    data={data.slice(0, num)}
                    syncId="anyId"
                    margin={{
                        top: 20,
                        right: 0,
                        left: -60,
                        bottom: -19,
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