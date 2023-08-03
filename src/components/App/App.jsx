import "bootstrap-css-only";
import "./App.css";
import Layout from "../Pages/Layout";
import Login from "../Pages/Login";
import Registro from "../Pages/Registro";
import Dashboard from "../Pages/Dashboard";
import NotFound from "../Pages/NotFound";
import PrivateRoute from "../Pages/PrivateRoute";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/registro' element={<Registro/>} />
      <Route path='/dashboard' element={
        <PrivateRoute redirectTo='/login'>
          <Layout/>
        </PrivateRoute>
      }>
        <Route path="" element={<Dashboard/>} />
      </Route>
      <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
};

export default App;
