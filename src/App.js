import React from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStudent from './pages/AddStudent';
import LeftStudent from './pages/LeftStudent';
import ManagePayment from './pages/ManagePayment';
import ManageReason from './pages/ManageReason';
import VoidReport from './pages/VoidReport';
import ExportPayment from './pages/ExportPayment';
import ExportStudent from './pages/ExportStudent';
import PrepareReceipt from './pages/PrepareRecepit';

function App() {
  return (
   
    <div className="app">
      <BrowserRouter>
      <Nav/>
      <Routes>
            <Route path="/add-student" element={<AddStudent/>} />
            <Route path="/left-student" element={<LeftStudent/>} />
            <Route path="/prepare-recepit" element={<PrepareReceipt/>} />
            <Route path="/manage-reason" element={<ManageReason/>} />
            <Route path="/void-report" element={<VoidReport/>} />
            <Route path="/manage-payment" element={<ManagePayment/>} />
            <Route path="/export-student" element={<ExportStudent/>} />
            <Route path="/export-payment" element={<ExportPayment/>} />
         </Routes>
         </BrowserRouter>
    </div>
    
  );
};

export default App;



