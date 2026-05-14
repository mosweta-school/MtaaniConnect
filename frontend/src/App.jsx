import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminDashboard from "./Pages/AdminDashboard"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import CreateEvent  from "./Pages/CreateEvent"
import MyEvents from "./Pages/MyEvents"
import About from "./Pages/About"

import Layout from "./Components/Layout"
import { AuthProvider } from "./context/AuthContext";

function App() {


  return (
    <AuthProvider>
    <Router>
      <Routes>

        <Route path="/" element={<Layout> <Home /> </Layout>} />
        <Route path="/about" element={<Layout> <About /> </Layout>} />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/my-events" element={<Layout> <MyEvents /> </Layout>} />
        <Route path="/admin" element={<Layout> <AdminDashboard /> </Layout>} />
        <Route path="/create-event" element={<Layout> <CreateEvent /> </Layout>} />

      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
