
import NavbarOne from './components/navbar/NavbarOne';
import './App.css'
import LoginRegister from './components/loginRegister/LoginRegister';

function App() {
  return (
    <div className="App">
      <NavbarOne/>

      <div className='AppContent'>
        <LoginRegister/>
      </div>
      
    </div>
  );
}

export default App;
