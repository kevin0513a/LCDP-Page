import React from 'react'
import '../App.css'
// import { Credits } from './FormPage/Form'

// All styles of this component are located in App Css -->

const Fotter = () => {

  const ElementsFooter = ({ atribute }) => {
    return (
      <div>
        <aside className='contentbox-element'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="10"
            width="10"
            viewBox="0 0 512 512"
          >
            <path
              opacity="1"
              fill="#fff"
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
          </svg>
          <p style={{fontSize:"12px"}}>{atribute}</p>
        </aside>
      </div>
    );
  }
  return (
    <footer>
      <div className='container-footer-phrase'>
        <aside className='credits-footer-page'>
          <svg xmlns="http://www.w3.org/2000/svg"
            height="13"
            width="13"
            viewBox="0 0 512 512"
          >
            <path
              opacity="1"
              fill="#ffffff"
              d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z" />
          </svg>
          <small>Copyright KevinBest</small>
        </aside>
        <p className='phrase-footer'>“Hay gente que estudió años para ganar un sueldo
          de mi*rda, nosotros solo vamos a estudiar cinco meses”.</p>
      </div>

      <section className='footer-list-container'>
        <aside className='elements-unique-fotter'>
          <svg xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 512 512"><path opacity="1" fill="#fff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
          <p style={{fontWeight:"bold", fontSize:"12px"}}>STAY IN THE KNOW</p>
        </aside>
        <div className='elements-atributes-footer'>
          <ElementsFooter atribute="Vancober Films" />
          <ElementsFooter atribute="Groot Comunication" />
          <ElementsFooter atribute="KevinBestForever" />
        </div>
      </section>
    </footer>
  )
}

export default Fotter