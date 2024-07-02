import './App.css';
import LateralMenu from './components/LateralMenu/LateralMenu';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <LateralMenu />
    </BrowserRouter>
  )
}

export default App;