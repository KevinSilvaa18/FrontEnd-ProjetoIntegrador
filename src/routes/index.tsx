import React from 'react';
import { Routes, Route } from 'react-router-dom';
//import DashBoard from '../pages/DashBoard';  
// <Route path='/dashboard' element={<DashBoard/>}/>
import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';

const Rotas: React.FC = () => (
    <Routes>
        <Route path='/*' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        
    </Routes>
);

export default Rotas;