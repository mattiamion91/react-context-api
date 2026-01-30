// importiamo comp segnaposto da libreria di routing
import { Outlet } from "react-router-dom";
// importiamo comp navbar per averlo nel template (che si ripeterà ad ogni sezione)
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
    return (
    <>
     <Navbar />
     <Outlet />
    </>            
    );
}