import { Route, Routes } from "react-router-dom"

// Pages LAYOUT
import LayoutAuth from "./layout/LayoutAuth"
import LayoutAdmin from "./layout/LayoutAdmin"

// Pages AUTH
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"

// Pages ADMIN
import HomePage from "./pages/admin/HomePage"
import ChatPage from "./pages/admin/Chat"

import ErrorPage from "./pages/ErrorPage"


const App = () => {
  return (
    <>
      <Routes>

        <Route path="/auth" element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path="registro" element={<Register />} />
        </Route>

        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<HomePage />} />
          <Route path="chat" element={<ChatPage />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}
export default App