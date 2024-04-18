
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Services from "./pages/Services";

const WebRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>                    
                    <Route path="services" element={<Services/>} />
                    <Route path="*" element={<NoPage />} />                
                </Route>
            </Routes>
        </BrowserRouter>
    )      
}

export default WebRoute;