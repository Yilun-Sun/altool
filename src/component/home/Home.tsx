import { Link } from 'react-router-dom';
import './HomeStyle.scss'

export default function Home() {
  return (
    <div>
      <h2>Altool</h2>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}
