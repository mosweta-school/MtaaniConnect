import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AdminDashboard from "./Pages/AdminDashboard"
import AdminDashboard2 from "./Pages/AdminDashboard2"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import CreateEvent  from "./Pages/CreateEvent"
import MyEvents from "./Pages/MyEvents"
import EditingEvent from "./Pages/EditingEvent"

import Layout from "./Components/Layout"
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./RouteProtect/ProtectedRoute"
import AdminOnlyRoute from "./RouteProtect/AdminProtect"

function App() {


  return (
    <AuthProvider>
    <Router>
      <Routes>

        <Route path="/" element={<Layout> <Home /> </Layout>} />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/edit-event/:id" element={<ProtectedRoute><Layout> <EditingEvent /> </Layout> </ProtectedRoute>} />
        
        <Route path="/my-events" element={<ProtectedRoute> <Layout> <MyEvents /> </Layout> </ProtectedRoute>} />
        <Route path="/create-event" element={<ProtectedRoute><Layout> <CreateEvent /> </Layout> </ProtectedRoute>} />

        
        
        <Route path="/admin" element={<AdminOnlyRoute><Layout> <AdminDashboard /> </Layout> </AdminOnlyRoute>} />
        
      </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
