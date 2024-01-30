import React from 'react'
import './Home.css'
import Fotter from '../Footer';
import characters from "../characters.json"
// import MouseFollower from '../MouseFollower';

export const Home = () => {

  //Some characteristics Charactes Berlin Serie -->
  // const characterspictures = [
  //   {
  //     url: "https://images.mubicdn.net/images/cast_member/634535/cache-345183-1557133135/image-w856.jpg?size=800x",
  //     character: "Pedro Alonso",
  //     id: 1,
  //     description: "Pedro González Alonso es un actor español conocido por sus papeles en Rías Baixas, Maridos e mulleres, y Padre Casares a nivel gallego, y a nivel español por interpretar a personajes como Diego Murquía en Gran Hotel y Andrés de Fonollosa «Berlín», en La casa de papel y su spin off.",
  //   },
  //   {
  //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bego%C3%B1a_Vargas%2C_XIV_Premis_Gaud%C3%AD_%282022%29_%28cropped%29.jpg/640px-Bego%C3%B1a_Vargas%2C_XIV_Premis_Gaud%C3%AD_%282022%29_%28cropped%29.jpg",
  //     character: "Begoña Vargas",
  //     id: 2,
  //     description: "Begoña Vargas es una actriz, modelo y bailarina española conocida por interpretar a Roberta en La otra mirada y a Verónica de García en la ficción de Netflix Alta mar.​",
  //   },
  //   {
  //     url: "https://hips.hearstapps.com/hmg-prod/images/julio-pena-berlin-1677243546.jpg",
  //     character: "Julio Peña",
  //     id: 3,
  //     description: "Julio Peña Fernández es un actor y cantante español conocido por su papel de Manuel Gutiérrez Quemola en la serie original de Disney Channel Bia y Ares Hidalgo en la película de Netflix A través de mi ventana, basada en el libro de Ariana Godoy.",
  //   },
  //   {
  //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Michelle_Jenner_at_Premios_Goya_2017_%28cropped%29.jpg/640px-Michelle_Jenner_at_Premios_Goya_2017_%28cropped%29.jpg",
  //     character: "Michelle Jenner",
  //     id: 4,
  //     description: "Michelle Jenner Husson es una actriz española de cine, televisión y doblaje. Como actriz es principalmente conocida por su papel de Sara Miranda en la serie de televisión Los hombres de Paco y como Isabel la Católica en la serie Isabel.",
  //   },
  //   {
  //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Trist%C3%A1n_Ulloa_pic_by_Javier_Mantrana.jpg/1200px-Trist%C3%A1n_Ulloa_pic_by_Javier_Mantrana.jpg",
  //     character: "Tristán Ulloa",
  //     id: 5,
  //     description: "Tristán Ulloa es un actor y director español",
  //   }
  // ];

  return (
    <>

      <div className='container-berlin-png'>
        <img className='Berlin-background-png' alt="Berlin Logo" src='https://static.vecteezy.com/system/resources/previews/010/503/918/non_2x/la-casa-de-papel-title-with-dali-mask-clothes-red-design-graphic-netflix-film-abstract-illustration-money-heist-in-black-background-free-vector.jpg' />
      </div>


      <section className='container-home-pages'>
        <div className='container-description-home-page'>
          <section className='description-home-page'>
            <section className='section-description'>
              <p className='little-description-berlin'>
                Una banda organizada de ladrones se propone cometer el atraco del siglo en la <span className='letter'>Fábrica Nacional de Moneda y Timbre</span>. Cinco meses de preparación quedarán reducidos a once días para poder llevar a cabo con éxito el gran golpe.</p>
            </section>
            <aside>
              <img className='image-lcdp' src='https://fotografias.lasexta.com/clipping/cmsimages01/2020/04/05/52C0C468-C1E1-4808-9E14-5664E300E774/98.jpg?crop=1250,703,x0,y125&width=1900&height=1069&optimize=low&format=webply' alt='banda de berlin' />
            </aside>
          </section>
        </div>

        <aside className='container-trailer'>
          <a href='https://youtu.be/3y-6iaveY6c?si=20cdUuqpWBRy7jIf' target='_blank' className='redirect-trailer'>
            Ver Trailer
          </a>
        </aside>
      </section>

      {/* map the characteristics array for show in screen --> */}
      <section style={{ marginTop: "100px" }} className='container-reparto-characters'>
        <h1>Reparto</h1>
        <div className='container-characters'>
          <section className='characters-list'>
            {characters.reparto.map((item) => (
              <div className='card-character' key={item.id}>
                <section>
                  <img
                    src={item.url}
                    alt={`Reparto: ${item.nombre}`}
                    className='picture-character'
                  />
                </section>
                <a href="#bentoGrid" className='character-styled'>{item.character}</a>
              </div>
            ))}
          </section>
        </div>
      </section>


      <section style={{ marginTop: "50px", paddingTop: "100px", paddingBottom: "100px" }}>
        <div id='bentoGrid' className='container-bento-grid'>
          <section className='bento-grid'>
            <div>
              <p>KevinBest</p>
            </div>
            <div>
              <img className='imagensita' src='https://pbs.twimg.com/media/GAmFd3PXAAAw-jk.jpg:large' alt='Berlin una de las mejores series de España'></img>
            </div>
            <div>
              KevinBestefef
            </div>
            <div>
              KevinBestforevers
            </div>
            <div>
              KevinBest
            </div>
          </section>
        </div>
      </section>
      <Fotter />
    </>
  )
}
