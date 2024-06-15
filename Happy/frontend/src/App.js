import { Route, Routes } from "react-router";
import Header from "./component/Header/Header";
import '../src/assets/css/styles.css'
import Home from "./pages/Home/Home";
import ProductList from "./pages/Product/ProductList/ProductList";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Auth/Login/Login";
import NoRenderOnPath from "./routes/NoRenderOnPath";
import Register from "./pages/Auth/Register/Register";
import Cart from "./pages/Cart/Cart";
import Admin from "./pages/Admin/Admin";


function App() {
  return (
    <>
      <NoRenderOnPath noRenderPaths={['/login', '/register', '/profile/order','/profile/history', '/admin/clients']}>
        <Header isProfile={false}/>
      </NoRenderOnPath>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart/>} />


        {/* Profile */}
        <Route path="/profile/order" element={<Profile isHistory={true}/>} />
        <Route path="/profile/history" element={<Profile isHistory={false}/>} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin */}
        <Route path="/admin/clients" element={<Admin  />} />
      </Routes>
    </>
  );
}

export default App;
