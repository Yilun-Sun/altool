import './RandomPassGenStyle.scss';
import { Alert, Button, InputNumber } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function RandomPassGen() {
  const defaultLengthValue = 8;

  function onLengthChange(value: number) {
    console.log('changed', value);
    setCount(value);
  }

  function generatePass() {
    const result: string[] = [];
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength: number = characters.length;
    for (let i = 0; i < count; i++) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }

    setResult(result.join(''));
    setDisplayResult('flex');
  }
  
  const [count, setCount] = useState(defaultLengthValue);
  const [displayResult, setDisplayResult] = useState('none');
  const [result, setResult] = useState('');
  return (
    <div>
      <div className='header'>
        <h2 className='title'>Random Password Generator</h2>
        <Link to='/dashboard'>Home</Link>
      </div>
      <div className='content'>
        <InputNumber min={4} max={100} defaultValue={defaultLengthValue} onChange={onLengthChange} />{' '}
        <Button type='primary' onClick={generatePass}>{`Generate ${count}-letter password`}</Button>
        <Alert style={{ display: displayResult }} message={result} type='success' showIcon />
      </div>
      <div className='footer'></div>
    </div>
  );
}
