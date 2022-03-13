import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import CartWidget from "./CartWidget";
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes } from "react-router-dom";





function App (){
    return (
        <BrowserRouter>  
            <Header/>
            <Main
                title="Oahu Store"
                year="2022"
            /> 
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemDetailContainer/>}/>
                <Route path="/carrito" element={<CartWidget/>}/>
                <Route path="/item/:id" element={<ItemListContainer/>}/>
            </Routes>
            
            <Footer/> 
        </BrowserRouter>   
    ); 
}

export default App