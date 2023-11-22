import './App.css';
import Bubble from './components/bubble'
import Row from './components/rowItem'

import img1 from './components/images/raio.png'
import img2 from './components/images/icon-memory.svg'
import img3 from './components/images/icon-verbal.svg'
import img4 from './components/images/icon-visual.svg'


function App() {
  return (
    <div className="App">
      <main>
        <Bubble />
        <div className='row'>
          <h3 className='subtitle'>Summary</h3>
          <Row Imagem={img1} color={'left-txt red-txt'} name={'Reaction'} change={'row-item red'} cols={'row-col red-bg'} valor={80} />
          <Row Imagem={img2} color={'left-txt yellow-txt'} name={'Memory'} change={'row-item yellow'} cols={'row-col yellow-bg'} valor={92} />
          <Row Imagem={img3} color={'left-txt blue-txt'} name={'Verbal'} change={'row-item blue'} cols={'row-col blue-bg'} valor={61} />
          <Row Imagem={img4} color={'left-txt dark-blue-txt'} name={'Visual'} change={'row-item dark-blue'} cols={'row-col dark-blue-bg'} valor={72} />
          <button className='btn'>Continue</button>
        </div>
      </main>
    </div>
  );
}

export default App;
