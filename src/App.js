import Topbar from "./Components/Topbar/Topbar";
import Home from "./Components/pages/Home/Home";
import ProductList from "./Components/pages/ProductList/ProductList";
import NewProduct from "./Components/pages/newProduct/NewProduct";
import NewUser from "./Components/pages/newUser/NewUser";
import Product from "./Components/pages/products/Product";
import User from "./Components/pages/user/User";
import UserList from "./Components/pages/userList/UserList";
import Sidebar from "./Components/sidebar/Sidebar";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/NewUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:productId" element={<Product/>} />
            <Route path="/newProduct" element={<NewProduct/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
