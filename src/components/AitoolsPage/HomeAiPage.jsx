import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContentAi from './ContentAi';
import ToolDetails from './details/ToolDetails';

const HomeAiPage = () => {


    return (
       <Routes>
        <Route path='/' element={<ContentAi/>}/>
        <Route path='/:id' element={<ToolDetails/>} />
       </Routes>
    )
}

export default HomeAiPage