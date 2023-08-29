import './App.css';
import GeneralMovieList from './Components/GeneralMovieList';
import Header from './Components/Header';
import ProductionHouse from './Components/ProductionHouse';
import Slider from './Components/Slider';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <ProductionHouse/>
      <GeneralMovieList/>
    </>
  );
}

export default App;
