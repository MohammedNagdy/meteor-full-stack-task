import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Community from '../pages/Community';

export default function AppRouter () {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/event/:id" element={<Community/>}/> 
        </Routes>
    )
}