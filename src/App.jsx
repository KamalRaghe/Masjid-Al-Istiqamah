import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [count, setCount] = useState(0)
  const [money, setMoney] = useState(0)
  const [husband, setHusband] = useState(0)
  const [wife, setWife] = useState(0)
  const [daughter, setDaughter] = useState(0)
  const [son,setSon] = useState(0)
  const [mother,setMother] = useState(0)
  const [father,setFather] = useState(0)
  const [grandmother,setGrandMother] = useState(0)
  const [grandfather,setGrandFather] = useState(0)
  const [Granddaughter, setGranddaughter] = useState(0)
  const [grandson,setGrandson] = useState(0)
  const [fullBrother, setFullBother] = useState(0)
  const [fullSister, setFullSister] = useState(0)
  const [paternalBrother, setPaternalBother] = useState(0)
  const [paternalSister, setPaternalSister] = useState(0)
  const [maternalBrother, setMaternalBother] = useState(0)
  const [maternalSister, setMaternalSister] = useState(0)

  function spouse(){
    if(husband === (1/2)){
      setHusband(1/4)
    }else{
      setWife(1/8)
    }
  }

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className="App">
        {count === 0 && <div className='question' style={{border:'1px solid black'}} data-aos="fade-up-right" data-aos-duration="3000">
          <div style={{paddingRight:'10px'}}>Amount of money left for inheritance</div>
          <input style={{width:'60px',height:'20px'}} placeholder='Money' type="number" onChange={e => {setMoney(e.target.value)}}/>
          <button className='center green' onClick={() => setCount(1)}>Enter</button>
        </div>}

        {count === 1 && <div className='question' data-aos="fade-up-right" data-aos-duration="3000">
          Is the deceased spouse alive?
          <button className='red' onClick={()=>{setCount(6)}}>Never married</button> 
          <button className='red' onClick={()=>{setCount(2)}} >No</button>
          <button className='yellow' onClick={()=>{setCount(2);setHusband(1/2)}} >Husband Alive</button>
          <button className='yellow' onClick={()=>{setCount(2);setWife(1/4)}}>Wife Alive</button>
        </div>}

        {count === 2 && <div className='question' data-aos="fade-up-right" data-aos-duration="3000">
          Did the deceased have children?
          <button className='red' onClick={()=>{setCount(6)}}>No</button>
          <button className='green' onClick={()=>{setCount(3);spouse()}}>Yes</button>
        </div>}

        {count === 3 && <div className='question center' style={{width:'800px'}} data-aos="fade-up-right" data-aos-duration="3000">
          How many children does the deceased have that are alive?
          <input style={{width:'50px',height:'20px'}} placeholder='Sons' type="number" onChange={e => {setSon(e.target.value)}}/>
          <input style={{width:'70px',height:'20px'}} placeholder='daughter' type="number" onChange={e => setDaughter(e.target.value)}/>
          <button className='green' onClick={()=>{
            if(son >= 1)
            {setCount(6)}
            else{setCount(4)}}}>Next Question</button>
        </div>}

        {count === 4 && <div className='question' data-aos="fade-up-right" data-aos-duration="3000">
          Did the deceased have grandchildren?
          <button className='red' onClick={()=>{setCount(6)}}>No</button>
          <button className='green' onClick={()=>{setCount(5)}}>Yes</button>
        </div>}

        {count === 5 && <div className='question center' style={{width:'800px'}} data-aos="fade-up-right" data-aos-duration="3000">
          How many grandchildren does the deceased have that are alive?
          <input style={{width:'80px',height:'20px'}} placeholder='Grandsons' type="number" onChange={e => {setGrandson(e.target.value)}}/>
          <input style={{width:'110px',height:'20px'}} placeholder='Granddaughter' type="number" onChange={e => setGranddaughter(e.target.value)}/>
          <button className='green' onClick={()=>{setCount(6)}}>Next Question</button>
        </div>}

        {count === 6 && <div className='question' data-aos="fade-up-right" data-aos-duration="3000">
          Are the deceased parents alive?
          <button className='red' onClick={()=>{setCount(7)}}>No</button>
          <button className='yellow' onClick={()=>{setCount(8);if(son>=1 || daughter >= 1){setMother(1/6)}else{setMother(1/3)}}}>Mother Alive</button>
          <button className='yellow' onClick={()=>{setCount(7);if(son >= 1){setFather(1/6)}else{setFather(true)}}}>Father Alive</button>
          <button className='green' onClick={()=>{setCount(8);if(son >= 1){setFather(1/6)}else{setFather(true)};if(son>=1 || daughter >= 1){setMother(1/6)}else{setMother(1/3)}}}>Both</button>
        </div>}
        {count === 7 && <div className='question' data-aos="fade-up-right" data-aos-duration="3000">
          Are the deceased Grandparents alive?
          <button className='red' onClick={()=>{setCount(8)}}>No</button>
          <button className='yellow' onClick={()=>{setCount(8);if(mother === 0){setGrandMother(1/6)}}}>Grandmothers Alive</button>
          <button className='yellow' onClick={()=>{setCount(8);if(father === 0){setGrandFather(1/6)}}}>Paternal Grandfather Alive</button>
        </div>}
        {count === 8 && <div className='question' data-aos="fade-up-right" data-aos-duration="3000">
          Does the deceased have alive siblings?
          <button className='red' onClick={()=>{setCount(10)}}>No</button>
          <button className='green' onClick={()=>{setCount(9)}}>yes</button>
        </div>}
        {count === 9 && <div style = {{flexDirection:'column'}} className='question' data-aos="fade-up-right" data-aos-duration='3000'>
          <div className='center'>Amount</div>
          <div>
            <input style={{width:'110px',height:'20px'}} placeholder='Full brother' type="number" onChange={e => setFullBother(e.target.value)}/>
            <input style={{width:'110px',height:'20px'}} placeholder='Full sister ' type="number" onChange={e => setFullSister(e.target.value)}/>

            <input style={{width:'110px',height:'20px'}} placeholder='Paternal brother' type="number" onChange={e => setPaternalBother(e.target.value)}/>
            <input style={{width:'110px',height:'20px'}} placeholder='Paternal sister' type="number" onChange={e => setPaternalSister(e.target.value)}/>  

            <input style={{width:'110px',height:'20px'}} placeholder='Maternal brother' type="number" onChange={e => setMaternalBother(e.target.value)}/>
            <input style={{width:'110px',height:'20px'}} placeholder='Maternal sister' type="number" onChange={e => setMaternalSister(e.target.value)}/>
          </div>
          <button className='center green' onClick={setCount(10)}>Enter</button>
        </div>}

        {count === 10 && <div>
           {husband !== 0 && <div>Husband cut: {(money*husband).toFixed(2)}</div> }
           {wife !== 0 && <div>Wife cut: {(money*wife).toFixed(2)}</div> }
           {father === 1/6 && <div>Father cut: {(money*father).toFixed(2)}</div> }
           {mother !== 0 && <div>Mother cut: {(money*mother).toFixed(2)}</div> } 
           {grandmother !== 0 && <div>GrandMothers cut: {(money*grandmother).toFixed(2)}</div> }
           {grandfather !== 0 && <div>Paternal Grandfather cut: {(money*grandfather).toFixed(2)}</div>}
           {son >= 1 && <div>Son cut: {money-(money*husband+money*wife+money*father+money*mother+money*grandmother+money*grandfather).toFixed(2)} </div>}
        </div>}
    </div>
  );
}

export default App;
