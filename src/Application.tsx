import React from 'react';
import MainPage from "@pages/MainPage/MainPage.tsx";
import Page404 from "@pages/Page404/Page404.tsx";
import Contacts from "@pages/Contacts.tsx";
import News from "@pages/News.tsx";
import {Route, Routes} from "react-router-dom";
import About from '@pages/About/About.tsx';
import Layout from "@components/Layout.tsx";

function Application() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path={'*'} element={<Page404/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/contacts'} element={<Contacts/>}/>
                <Route path={'/about'} element={<About/>}/>
            </Route>
        </Routes>
    );
}

export default Application;
