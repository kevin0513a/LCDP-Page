import React from 'react'
import '../../App.css';
import './Form.css'
import {
  Link,
} from "react-router-dom";

const Form = () => {
  return (
    <div className='container-form-page'>
      <section className='form-data'>
        <form>
          <aside className='center-title-form'>
            <span className='title-form'>SIGN UP</span>
          </aside>
          <div className='container-inputs'>
            <section className="individual-input">
              <input placeholder='Name' type="text" name="name" />
              <span className="material-symbols-outlined">
                person
              </span>
            </section>
            <section className="individual-input">
              <input placeholder='Email' type="email" name="name" />
              <span className="material-symbols-outlined">
                mail
              </span>
            </section>
            <section className="individual-input">
              <input placeholder='Password' type="password" name="name" />
              <span className="material-symbols-outlined">
                lock
              </span>
            </section>
          </div>
          <aside className='container-button-form'>
            <button className='button-form'>Get Started</button>
          </aside>
          <aside className='question-acount'>
            <span>
              Have an account?<strong> Sign In</strong>
            </span>
          </aside>
        </form>
      </section>

      <aside className='phrase'>
        <h1>Let's Change Now!</h1>
        <p>The only way humans get anywhere <br></br>is by leaving something behind.</p>
      </aside>

      {/* Aquí el boton que redirige a la futura Home */}

      <aside className='second-button-home'>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path opacity="1" fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
        <button className='button-home'>
          <Link className='link-home-form' to="/">HOME</Link>
        </button>
      </aside>

      {/* Componente Reutilizable --> */}
      <div>
        <aside className='credits'>
          <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512"><path opacity="1" fill="#000000" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z" /></svg>
          <small>Copyright KevinBest</small>
        </aside>
      </div>

    </div>
  )
}

export default Form