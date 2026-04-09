import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/HomePage/Banner/Banner'
import Players from './components/HomePage/Players/Players'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer();

  const [coin, setCoin] = useState(0);

  return (
    <>
      <NavBar coin={coin} />
      <Banner setCoin={setCoin} />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin} />
      </Suspense>

      <Footer></Footer>
    </>
  )
}

export default App
