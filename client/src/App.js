
import NavbarOne from './components/navbar/NavbarOne';
import './App.css'
import LoginRegister from './components/loginRegister/LoginRegister';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserPage from './pages/userPages/UserPage';
import AdminPage from './pages/adminPages/AdminPage';
import { useEffect, useState } from 'react';
import { getCurrentUser } from './services/GetCurrentUser';



function App() {

  const [toggleLogin, setToggleLoign] = useState(false);

  const handleToggleLogin = () => {
    setToggleLoign(!toggleLogin);
  }

  useEffect(()=> {
    getCurrentUser().then((result) => {
      console.log(result.data)
    })
  }, [toggleLogin] );

  const router = createBrowserRouter([
    {
      element: (
        <NavbarOne/>
      ),
      children: [
        {
          path: "/",
          element: (
            <LoginRegister handleToggleLogin={handleToggleLogin}/>
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

  return (
    <div className="App">

      <div className='AppContent'>
        <RouterProvider router={router}/>
      </div>
      
    </div>
  );
}

export default App;
