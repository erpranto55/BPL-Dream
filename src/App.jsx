import { Suspense } from 'react';
import './App.css'
import Banner from './components/HomePage/Banner/Banner'
import Players from './components/HomePage/Players/Players';
import NavBar from './components/NavBar/NavBar'

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer();
  return (
    <>
      <NavBar />
      <Banner />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise={playersPromise} />
      </Suspense>
    </>
  )
}

export default App
