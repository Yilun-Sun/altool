import './DashboardStyle.scss';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <div className='container tool-container'>
        <div className='row'>
          <div className='col-sm'><Link to="/tool/random-pass-generator">Random Password Generator</Link></div>
          <div className='col-sm'>One of three columns</div>
          <div className='col-sm'>One of three columns</div>
        </div>
      </div>
    </div>
  );
}
