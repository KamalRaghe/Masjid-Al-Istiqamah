import './App.css';
import {useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [done, setDone] = useState(false)
  const [over, setOver] = useState(1)
  const [cuts, setCuts] = useState(0)
  const [count, setCount] = useState(0)
  const [money, setMoney] = useState(0)
  const [husband, setHusband] = useState(0)
  const [wife, setWife] = useState(0)
  const [daughterCut, setDaughterCut] = useState(0)
  const [daughter, setDaughter] = useState(0)
  const [son,setSon] = useState(0)
  const [mother,setMother] = useState(0)
  const [father,setFather] = useState(0)
  const [grandmother,setGrandMother] = useState(0)
  const [grandfather,setGrandFather] = useState(0)
  const [granddaughter, setGranddaughter] = useState(0)
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
    }else if(wife === (1/4)){
      setWife(1/8)
    }
  }

  function Cuts(){
    if(father === true){
      setCuts(husband+wife+mother+grandmother+grandfather+daughterCut)
    }else{
      setCuts(husband+wife+mother+grandmother+grandfather+father+daughterCut)
    }
  } 

  useEffect(()=>{
    AOS.init();
  },[])

  useEffect(()=>{
    Cuts()
    setSon(parseInt(son))
    setDaughter(parseInt(daughter))
    setGrandson(parseInt(grandson))
    setGranddaughter(parseInt(granddaughter))
    setFullBother(parseInt(fullBrother))
    setFullSister(parseInt(fullSister))
    setMaternalBother(parseInt(maternalBrother))
    setMaternalSister(parseInt(maternalSister))
    setPaternalBother(parseInt(paternalBrother))
    setPaternalSister(parseInt(paternalSister))
  },[done])

  useEffect(()=>{
    console.log(((son*2)+daughter) ,'s',son,'d',daughter)
    if(cuts >= 1 && father === true){
      setOver(husband+wife+mother+grandmother+grandfather+daughterCut)
      setCuts(1)
    }if(cuts >= 1 && father !== true){
      setOver(husband+wife+father+mother+grandmother+grandfather+daughterCut)
      setCuts(1)
    }
  },[cuts])

  return (
    <div className="App">
      {/* Money for inheritance */}
        {count === 0 && <div className='question'data-aos="fade-up-right" data-aos-duration="3000">
          <div style={{paddingRight:'10px'}}>Amount of money left for inheritance</div>
          <input style={{width:'80px'}} placeholder='Money' type="number" onChange={e => {setMoney(e.target.value)}}/>
          <button className='center green' onClick={() => setCount(1)}>Enter</button>
        </div>}
        
        {/* Spouse */}
        {count === 1 && <div className='question' data-aos="fade-up-right" data-aos-duration="3000">
          Is the deceased spouse alive?
          <div className='center' >
            <button className='red' onClick={()=>{setCount(6)}}>Never married</button> 
            <button className='red' onClick={()=>{setCount(2)}} >No</button>
            <button className='yellow' onClick={()=>{setCount(2);setHusband(1/2)}} >Husband Alive</button>
            <button className='yellow' onClick={()=>{setCount(2);setWife(1/4)}}>Wife Alive</button>
          </div>
        </div>}

        {/*Children */}  
        {count === 2 && <div className='question' data-aos="fade-up-right" data-aos-duration="3000">
          Did the deceased have children?
          <div className='center'>
            <button className='red' onClick={()=>{setCount(6)}}>No</button>
            <button className='green' onClick={()=>{setCount(3);spouse()}}>Yes</button>
          </div>
        </div>}

        {/* Children */}  
        {count === 3 && <div className='question center' style={{width:'800px'}} data-aos="fade-up-right" data-aos-duration="3000">
          How many children does the deceased have that are alive?
          <div className='center'>
            <input style={{width:'50px'}} placeholder='Sons' type="number" onChange={e => {setSon(e.target.value)}}/>
            <input style={{width:'70px'}} placeholder='daughter' type="number" onChange={e => setDaughter(e.target.value)}/>
            <button className='green' onClick={()=>{
              if(son >= 1)
              {setCount(6)}
              else if(daughter == 1){
                setDaughterCut(1/2)
                setCount(4)
              }else if(daughter >= 2){
                setDaughterCut(2/3)
                setCount(4)
              }else{
                setCount(4)
              }}}>Next Question</button>
          </div>
        </div>}

        {/* GrandChildren */}        
        {count === 4 && <div className='question' data-aos="fade-up-right" data-aos-duration="3000">
          Did the deceased have grandchildren?
          <div className='center'>
            <button className='red' onClick={()=>{setCount(6)}}>No</button>
            <button className='green' onClick={()=>{setCount(5)}}>Yes</button>
          </div>
        </div>}

        {/* GrandChildren */}     
        {count === 5 && <div className='question center' style={{width:'800px'}} data-aos="fade-up-right" data-aos-duration="3000">
          How many grandchildren does the deceased have that are alive?
          <div className='center'>
            <input style={{width:'80px'}} placeholder='Grandsons' type="number" onChange={e => {setGrandson(e.target.value)}}/>
            <input style={{width:'110px'}} placeholder='Granddaughter' type="number" onChange={e => setGranddaughter(e.target.value)}/>
            <button className='green' onClick={()=>{setCount(6)}}>Next Question</button>
          </div>
        </div>}

        {/* parents */}
        {count === 6 && <div className='question' data-aos="fade-up-right" data-aos-duration="3000">
          Are the deceased parents alive?
          <div className='center'>
            <button className='red' onClick={()=>{setCount(7);setFather(false)}}>No</button>
            <button className='yellow' onClick={()=>{setCount(8);if(son>=1 || daughter >= 1){setMother(1/6)}else{setMother(1/3)};setFather(false)}}>Mother Alive</button>
            <button className='yellow' onClick={()=>{setCount(7);if(son >= 1 || grandson >= 1){setFather(1/6)}else{setFather(true)}}}>Father Alive</button>
            <button className='green' onClick={()=>{if(son >= 1){setCount(10);setDone(true);setDone(true)}else{setCount(8)};if(son >= 1 || grandson >= 1){setFather(1/6)}else{setFather(true)};if(son>= 1 || daughter >= 1){setMother(1/6)}else{setMother(1/3)}}}>Both</button>
          </div>
        </div>}

        {/* Grandparents */}
        {count === 7 && <div className='question' data-aos="fade-up-right" data-aos-duration="3000">
          Are the deceased Grandparents alive?
          <div className='center'>
            <button className='red' onClick={()=>{ if(son >= 1){setCount(10);setDone(true)}else{setCount(8)}}}>No</button>
            <button className='yellow' onClick={()=>{ if(son >= 1){setCount(10);setDone(true)}else{setCount(8)};if(mother === 0){setGrandMother(1/6)}}}>Grandmothers Alive</button>
            <button className='yellow' onClick={()=>{ if(son >= 1){setCount(10);setDone(true)}else{setCount(8)};if(father === 0){setGrandFather(1/6)}}}>Paternal Grandfather Alive</button>
          </div>
        </div>}
        
        {/* Siblings */}
        {count === 8 && <div className='question' data-aos="fade-up-right" data-aos-duration="3000">
          Does the deceased have alive siblings?
          <div className='center'>
            <button className='red' onClick={()=>{setCount(10);setDone(true)}}>No</button>
            <button className='green' onClick={()=>{setCount(9)}}>Yes</button>
          </div>
        </div>}

        {/* Siblings */}
        {count === 9 && <div style = {{flexDirection:'column'}} className='question' data-aos="fade-up-right" data-aos-duration='3000'>
          <div className='center'>Amount of siblings</div>
          <div>
            <input style={{width:'110px'}} placeholder='Full brother' type="number" onChange={e => setFullBother(e.target.value)}/>
            <input style={{width:'110px'}} placeholder='Full sister ' type="number" onChange={e => setFullSister(e.target.value)}/>

            <input style={{width:'110px'}} placeholder='Maternal brother' type="number" onChange={e => setMaternalBother(e.target.value)}/>
            <input style={{width:'110px'}} placeholder='Maternal sister' type="number" onChange={e => setMaternalSister(e.target.value)}/>

            <input style={{width:'110px'}} placeholder='Paternal brother' type="number" onChange={e => setPaternalBother(e.target.value)}/>
            <input style={{width:'110px'}} placeholder='Paternal sister' type="number" onChange={e => setPaternalSister(e.target.value)}/>  
          </div>
          <button className='center green' onClick={() => {setCount(10);setDone(true)}}>Enter</button>
        </div>}

        {count === 10 && <div>
           {/* spouse  */}
           {husband !== 0 && <div>Husband cut: {(money*husband/over).toFixed(2)}</div> }
           {wife !== 0 && <div>Wife cut: {(money*wife/over).toFixed(2)}</div> }
           

            {/* parents */}
           {father === 1/6 && <div>Father cut: {(money*father/over).toFixed(2)}</div> }
           {father === true && <div>Father cut: {(money-(money*cuts)).toFixed(2)}</div> }
           {mother !== 0 && <div>Mother cut: {(money*mother/over).toFixed(2)}</div> } 
           
           {/* Grandparents */}
           {grandmother !== 0 && <div>GrandMothers cut: {(money*grandmother/over).toFixed(2)}</div> }
           {grandfather !== 0 && <div>Paternal Grandfather cut: {(money*grandfather/over).toFixed(2)}</div>}
           
           {/* Children */}
           {son >= 1 && <div>Each son cut: {2*((money-(money*cuts))/((son*2)+daughter)).toFixed(2)} </div>}
           {son >= 1 && daughter>=1 && <div>Each daughter cut: {((money-(money*cuts))/(son*2+daughter)).toFixed(2)} </div>}
           {son < 1 && daughter >=1 && <div>Each daughter cut: {((daughterCut*money/over)/daughter).toFixed(2)} </div>}

            {/* GrandChildren */}
           {son < 1 && grandson >= 1 && <div>Each grandson cut: {2*((money-(money*cuts))/(grandson*2+granddaughter)).toFixed(2)} </div>}
           {son < 1 && grandson >= 1 && granddaughter >= 1 && <div>Each granddaughter cut: {((money-(money*cuts))/(grandson*2+granddaughter)).toFixed(2)} </div>}
           
            {/* full siblings  */}
           {son < 1 && grandson < 1 && father === false && fullBrother >= 1 && <div>Each full brother cut: {2*((money-(money*cuts))/(fullBrother*2+fullSister)).toFixed(2)}</div>}
           {son < 1 && grandson < 1 && father === false && fullBrother >= 1 && fullSister >= 1 && <div>Each full sister cut: {((money-(money*cuts))/(fullBrother*2+fullSister)).toFixed(2)}</div>}
           
           {/* paternal siblings  */}
           {son < 1 && grandson < 1 && father === false && fullBrother < 1 && paternalBrother>= 1 && <div>Each paternal brother cut: {2*((money-(money*cuts))/(paternalBrother*2+paternalSister)).toFixed(2)}</div>}
           {son < 1 && grandson < 1 && father === false && fullBrother < 1 && paternalBrother>= 1 && paternalSister >= 1 && <div>Each paternal sister cut: {(money-(money*cuts))/(paternalBrother*2+paternalSister).toFixed(2)}</div>}

            {/* maternal siblings */}
           {son < 1 && grandson < 1 && father === false && fullBrother < 1 && maternalBrother >= 1 &&  paternalBrother < 1 && <div>Each maternal brother cut: {(money-(money*cuts))/(maternalSister+maternalBrother).toFixed(2)}</div>}
           {son < 1 && grandson < 1 && father === false && fullBrother < 1 && paternalBrother < 1 && maternalBrother >= 1 && maternalSister >= 1 &&<div>Each maternal sister cut: {(money-(money*cuts))/(maternalBrother+maternalSister).toFixed(2)}</div>}

           
           
           
        </div>}   
    </div>
  );
}

export default App;
