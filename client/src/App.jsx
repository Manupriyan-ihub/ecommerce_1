import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import AdminLayout from "./components/admin-view/layout"
import AdminDashboard from "./pages/admin-view/dashboard"
import AdminOrders from "./pages/admin-view/orders"
import AdminFeatures from "./pages/admin-view/features"
import AdminProducts from "./pages/admin-view/products"
import ShoppingLayout from "./components/shopping-view/layout"
import NotFound from "./pages/not-found"
import ShoppingHome from "./pages/shopping-view/home"
import ShoppingAccount from "./pages/shopping-view/account"
import ShoppingCheckout from "./pages/shopping-view/checkout"
import ShoppingListing from "./pages/shopping-view/listing"
import CheckAuth from "./components/common/check-auth"
import UnAuthPage from "./pages/unauth-page"

function App() {

  const isAuthenticated = false
  const user = null

  return (
    <div className="flex  flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
          }>
          <Route path="login"  element={<Login/>}/>
          <Route path="register"  element={<Register/>}/>
        </Route>
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
          </CheckAuth>
          }>
          <Route path="dashboard" element={<AdminDashboard/>}/>
          <Route path="orders" element={<AdminOrders/>}/>
          <Route path="features" element={<AdminFeatures/>}/>
          <Route path="products" element={<AdminProducts/>}/>
        </Route>
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout/>
          </CheckAuth>}>
          <Route path="home" element={<ShoppingHome/>}/>
          <Route path="account" element={<ShoppingAccount/>}/>
          <Route path="checkout" element={<ShoppingCheckout/>}/>
          <Route path="listing" element={<ShoppingListing/>}/>
        </Route>
        <Route path="*" element={<NotFound/>} />
        <Route path="/unauth-page" element={<UnAuthPage/>} />
      </Routes>
    </div>
  )
}

export default App
