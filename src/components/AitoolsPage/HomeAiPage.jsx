import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContentAi from './ContentAi';
import KnowMore from './knowmore/KnowMore';

const HomeAiPage = () => {


    return (
       <Routes>
        <Route path='/' element={<ContentAi/>}/>
        <Route path='KnowMore' element={<KnowMore/>} />
       </Routes>
    )
}

export default HomeAiPage