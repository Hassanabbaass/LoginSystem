
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

  const [currentUser, setCurrentUser] = useState();

  const handleToggleLogin = () => {
    setToggleLoign(!toggleLogin);
  }

  useEffect(()=> {
    getCurrentUser().then((result) => {
      console.log(result.data)
      if(result.data.role === 'user'){
        setCurrentUser(result.data.user)
      }
      if(result.data.role === 'admin'){
        setCurrentUser(result.data.admin)
      }
    })
  }, [toggleLogin] );

  const router = createBrowserRouter([
    {
      element: (
        <NavbarOne currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      ),
      children: [
        {
          path: "/",
          element: (
            <LoginRegister handleToggleLogin={handleToggleLogin} currentUser={currentUser}/>
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
