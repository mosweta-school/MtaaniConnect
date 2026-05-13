import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminDashboard from "./Pages/AdminDashboard"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import ProtectedRoute from "./Components/ProtectedRoute"
import CreateEvent  from "./Pages/CreateEvent"
import MyEvents from "./Pages/MyEvents"

import Layout from "./Components/Layout"
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>

        <Route path="/" element={<Layout> <Home /> </Layout>} />
        <Route path="/login" element={<Layout> <Login /> </Layout>} />
        <Route path="/register" element={<Layout> <Register /> </Layout>} />
        <Route path="/my-events" element={<Layout> <MyEvents /> </Layout>} />
        <Route path="/admin" element={<Layout> <AdminDashboard /> </Layout>} />
        <Route path="/create-event" element={<Layout> <CreateEvent /> </Layout>} />

      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
