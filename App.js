import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Footer from "./src/components/Footer";
import Contact from "./src/components/Contact";
 const App=()=>{
     return (
        <div>
        <Header/>
        <Outlet/>
        <Footer/>
        </div>  
        
    );
};
const appRouter=createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                path: "/",
                element:<Body/>

            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/contact",
                element:<Contact/>
            }
        ],
        errorElement:<Error/>
    },
    
])
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter}/>);