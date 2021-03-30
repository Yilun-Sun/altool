import './RandomPassGenStyle.scss';

export default function RandomPassGen() {
  return (
    <div>
      <div className='header'>
        <h2 className='title'>RandomPassGen</h2>
      </div>
      <div className='content'>
        <input type='password' className='form-control' id='inputPassword'></input>
      </div>
      <div className='footer'></div>
    </div>
  );
}
