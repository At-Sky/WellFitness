import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from '@src/Application.tsx';
import '@styles/main.scss';
import {BrowserRouter} from "react-router-dom";
import {ApolloProvider} from "@apollo/client";

import client from "@src/apollo/client.ts";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Application/>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>
);
