import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>详细记录查看 <Link to='https://stats.uptimerobot.com/OpXljS5vpP' text='UptimeRobot 智云海状态' />，检测频率 5 分钟</p>
          <p>CopyRight © <Link to='https://www.zyh8.com/' text='智云海博' /> 2023</p>
        </div>
      </div>
    </>
  );
}

export default App;
