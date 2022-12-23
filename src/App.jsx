import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ResidentInfo from './components/ResidentInfo'
import randomNumber from './utils/randomNumber'
import Location from './components/Location'
import serchIcon from './img/lupa.png'
import Loading from './components/Loading'
function App() {

const [queryData, setQueryData] = useState()
const [inputData, setInputData] = useState(randomNumber())

useEffect(() => {
axios.get(`https://rickandmortyapi.com/api/location/${inputData}`)
.then(res => setQueryData(res.data))
.catch(err => console.log(err))
}, [inputData])

const HandleSerch = (e) => {
  e.preventDefault()
  setInputData(e.target.dataSerch.value)
} 

  return ( 

    <div className="App">
      <div className='App__img'>  </div>
      <h1 className='App__h1 '>Rick and Morty Wiki</h1>
      <form className='App__form' onSubmit={HandleSerch}>
        <input className="App__input" type="number" id="dataSerch" required placeholder="Enter numbers from 1 to 126"/>
        <button  className="App__btn"  type="submit"> <img src={serchIcon} alt="" /> </button>
      </form>
      <Location queryData={queryData}/>
      <h2 className='App__h2'>Residents</h2>
      <div className='Div__ResidentInfo'>
        {
        queryData ?  queryData?.residents?.map(resident => <ResidentInfo key={resident} resident={resident}/>)  : <Loading />
        }
      </div>
      <footer>
      <div className="copyright">Copyright&copy; Academlo Gen 20 - by Antonio Castillo.</div>
      </footer>
    </div>
    
  )
}

export default App
