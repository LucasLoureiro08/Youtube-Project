import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import { useState} from 'react';
import Library from "./pages/library";
import Home from "./pages/home";
import History from "./pages/history";
import Shorts from "./pages/shorts";




function App() {

  const [ openMenu, setOpenMenu] = useState(true)
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header openMenu= {openMenu} setOpenMenu={setOpenMenu}/>
        {/* Container */}
        <div style={ {width: "100%", display: "flex"}}>
          {/* Side Bar */}
          <Menu openMenu={openMenu}/>
          <div style={{width: '100%', padding: '50px 70px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center'}}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/library" element={<Library />} />
                <Route path="/history" element={<History />} />
                <Route path="/shorts" element={<Shorts />} />
              </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
