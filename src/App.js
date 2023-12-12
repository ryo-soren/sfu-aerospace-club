import './App.css';
import LandingPageImage from './components/LandingPageImage';
import MissionStatement from './components/MissionStatement';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <LandingPageImage/>
      <div className='w-4/5 mx-auto'>
        <MissionStatement/>
      </div>
    </>
  );
}

export default App;
