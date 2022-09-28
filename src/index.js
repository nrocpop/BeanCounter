import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import NewUser from './Pages/NewUser';
import Layout from './Pages/Layout';
import NoPage from './Pages/NoPageError';
import { useState } from 'react';


export default function App() {
  const [token,setToken] = useState();

  //  if(!token){
  //    return <Home setToken={setToken}></Home>
  //  }
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="NewUser" element={<NewUser />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  const element = document.getElementById('root');
  const root = ReactDOM.createRoot(element);
  root.render(<App />);






