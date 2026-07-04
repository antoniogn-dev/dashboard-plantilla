import { Route, Routes } from "react-router-dom"

// Pages LAYOUT
import LayoutAdmin from "./layout/LayoutAdmin"

// Pages AUTH
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

// Pages ADMIN
import HomePage from "./pages/admin/HomePage"
import ChatPage from "./pages/admin/Chat"

import ErrorPage from "./pages/ErrorPage"
import ForgetPassword from "./pages/auth/ForgetPassword"
import Profile from "./pages/admin/Profile"
import Tikets from "./pages/admin/Tikets"


const App = () => {
  return (
    <>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/olvide-password" element={<ForgetPassword />} />

        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<HomePage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="perfil" element={<Profile />} />
          <Route path="tikets" element={<Tikets />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}
export default App