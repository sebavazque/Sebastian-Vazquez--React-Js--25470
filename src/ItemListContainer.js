import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { toast } from 'react-toastify';
import { dbFirebase } from "./Firebase";
import { getDocs, query, where, collection } from "firebase/firestore";
import Loader from './Loader';

const ItemListContainer = (props) => { 
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {category}= useParams()



    useEffect(()=>{
        
        if(!category){
            getDocs(collection(dbFirebase, "products"))
                .then((resp => setProductos(resp.docs.map(doc => doc.data())))) 
                .catch(err => toast.error(err.message))
                .finally(()=>setLoading(false))
        
        }else{

            const q =  query(collection(dbFirebase, "products"),where("categoria", "==", category))

            getDocs(q)
            .then((res => setProductos(res.docs.map (doc =>  doc.data())))) 
            .catch(err => toast.error(err.message))
            .finally(()=>setLoading(false))
        }
    },[category])


    return  loading ? <Loader/>  :<ItemList productos={productos}/> 
            
    
}




export default ItemListContainer