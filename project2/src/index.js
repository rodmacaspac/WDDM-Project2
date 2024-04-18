import React from 'react';
import ReactDom from 'react-dom/client';
import WebRoute from './WebRoute';

import './css/style.css';

export default function App(){
    return (
        <WebRoute/>           
    )
}
const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(<App/>);
