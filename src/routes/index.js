import Home from "~/pages/Home";
import ViewProduct from "~/pages/ViewProduct";
import Login from "~/pages/Login";


const publishRouters = [
    {path: '/', componet : Home},
    {path: '/viewproduct', componet : ViewProduct},
    {path: '/login', componet : Login, layout : null},
]


export {publishRouters}