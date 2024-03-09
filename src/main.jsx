import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context from './utils/Context.jsx'
import { BrowserRouter } from "react-router-dom"
import SearchContext from './utils/SearchContext.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Context>
        <SearchContext>
            <BrowserRouter>
                <App />
                <ToastContainer />
            </BrowserRouter>
       </SearchContext>
    </Context>
)
