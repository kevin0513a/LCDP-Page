import './App.css'
import Form from './components/FormPage/Form.jsx';
import { Home } from './components/HomePage/Home.jsx';
// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// Supports weights 100-900
import '@fontsource-variable/onest';

function App() {
  return (
    <div>
      <section className='container-header'>
        <header>
          <aside className='container-logo'>
            <span className='logo'>Kevin<span className='letter'>B</span>est</span>
          </aside>
          <nav className='container-routes-list'>
            <ul className='routes-list'>
              <li><Link className='button-nav' to="/">HOME</Link></li>
              <li><Link className='button-nav' to="/form">FORM</Link></li>
            </ul>
          </nav>
          {/* <aside style={{position:"absolute"}}>
            <span class="material-symbols-outlined menu">
              menu
            </span>
          </aside> */}
        </header>
      </section>

      {/* Creamos las rutas para la navegacion de nustro sitio */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form/*" element={<Form />} />
      </Routes>
    </div>
  )
}

export default App;
