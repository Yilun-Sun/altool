import './DashboardStyle.scss';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Row>
        <Col span={6}>
          <div className='col-sm'>
            <Link to='/tool/random-pass-generator'>Random Password Generator</Link>
          </div>
        </Col>
        <Col span={6}>
          <div className='col-sm'>One of three columns</div>
        </Col>
        <Col span={6}>
          <div className='col-sm'>One of three columns</div>
        </Col>
        <Col span={6}>
          <div className='col-sm'>One of three columns</div>
        </Col>
      </Row>
    </div>
  );
}
