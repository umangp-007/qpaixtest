
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import StudentForm from './pages/StudentForm';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const App: React.FC = () => (
  <>
    <Header />
    <main className="content-wrapper">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add" element={<StudentForm />} />
        <Route path="/update/:id" element={<StudentForm />} />
      </Routes>
    </main>
    <Footer />
    <ToastContainer position="top-right" autoClose={3000} />
  </>
);

export default App;