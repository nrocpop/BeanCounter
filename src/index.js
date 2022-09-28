import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import NewUser from './Pages/NewUser';
import Test from './Pages/Testing';
import Layout from './Pages/Layout';
import NoPage from './Pages/NoPageError';
import {Amplify,Auth} from 'aws-amplify'
import aswconfig from './aws-exports'
Amplify.configure(aswconfig)


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Testing" element={<Test />} />
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






