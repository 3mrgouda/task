import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContentAi from './ContentAi';
import Details from './details/Details';

const HomeAiPage = () => {


    return (
       <Routes>
        <Route index element={<ContentAi/>}/>
        <Route path='/details' element={<Details/>} />
       </Routes>
    )
}

export default HomeAiPage