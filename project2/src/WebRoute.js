
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Testimonials from './pages/Testimonials';
import NoPage from "./pages/NoPage";
import Services from "./pages/Services";
import Concerns from './pages/Concerns';
import Products from './pages/Products';
import TargetedFacial from './pages/TargetedFacial';
import Microcurrent from './pages/Microcurrent';
import ContactUs from './pages/ContactUs';

const WebRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/> 
                    <Route path="testimonials" element={<Testimonials/>} />                   
                    <Route path="services" element={<Services/>} />
                    <Route path="targetedfacial" element={<TargetedFacial/>} />
                    <Route path="microcurrent" element={<Microcurrent/>} />
                    <Route path="concerns" element={<Concerns/>} />
                    <Route path="products" element={<Products/>} />
                    <Route path="contact" element={<ContactUs/>} />
                    <Route path="*" element={<NoPage />} />                
                </Route>
            </Routes>
        </BrowserRouter>
    )      
}

export default WebRoute;