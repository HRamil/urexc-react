import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from './components/Header';
import Landing from './pages/Landing';

//style
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
