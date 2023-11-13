import Home from "~/pages/Home";
import ViewProduct from "~/pages/ViewProduct";
import Login from "~/pages/Login";
import ViewProducts from "~/pages/ViewProducts";


const publishRouters = [
    {path: '/', componet : Home},
    {path: '/viewproduct', componet : ViewProduct},
    {path: '/viewproducts', componet : ViewProducts}, 
    {path: '/login', componet : Login, layout : null},
]


export {publishRouters}