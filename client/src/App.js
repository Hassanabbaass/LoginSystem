
import NavbarOne from './components/navbar/NavbarOne';
import './App.css'
import LoginRegister from './components/loginRegister/LoginRegister';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserPage from './pages/userPages/UserPage';
import AdminPage from './pages/adminPages/AdminPage';

const router = createBrowserRouter([
  {
    element: (
      <NavbarOne/>
    ),
    children: [
      {
        path: "",
        element: (
          <LoginRegister/>
        ),
      },
      {
        path: "/user",
        element: (
          <UserPage/>
        ),
      },
      {
        path: "/admin",
        element: (
          <AdminPage/>
        ),
      },
    ]
  }

]);

function App() {
  return (
    <div className="App">

      <div className='AppContent'>
        <RouterProvider router={router}/>
      </div>
      
    </div>
  );
}

export default App;
