import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import NewUser from './Pages/NewUser';
import AdminView from './Pages/AdminView';
import Layout from './Pages/Layout';
import ManagerView from './Pages/ManagerView'
import NoPage from './Pages/NoPageError';
import AccountantView from './Pages/AccountantView'
import {Amplify,Auth} from 'aws-amplify'
import aswconfig from './aws-exports'
Amplify.configure(aswconfig)


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="AdminView" element= {<AdminView />}></Route>
            <Route path="ManagerView" element= {<ManagerView />}></Route>
            <Route path="AccountantView" element= {<AccountantView />}></Route>
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






