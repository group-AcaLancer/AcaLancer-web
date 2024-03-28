import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/Home.css";

const Home = () => {
  return (
    <div>
      <div className="carousel-wrapper">
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={9000}
          showArrows={false} // Oculta los botones laterales de navegación
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            return (
              <li
                className={`indicator ${isSelected ? "active" : ""}`}
                onClick={() => onClickHandler(index)}
                key={index}
                aria-label={`Go to slide ${index}`}
                title={`${label || index + 1}`}
              />
            );
          }}
        >
          <div className="carousel__container">
            <h2 className="carousel__title">
              bienvenido a <span>nuestro mundo</span>
            </h2>
            <p className="carousel__text">
              En esta travesía, viajando por vastas y desconocidas galaxias,
              hemos descubierto nuestros mayores potenciales y nuevas maneras de
              hacer las cosas. Si hay algo en lo que nos consideramos muy
              buenos, es en mejorar continuamente. Por eso somos inquietos,
              activos, creativos, y unos buenos aliados para llevar tus
              proyectos fuera de este planeta.
            </p>
          </div>
          <div>
            <h2 className="carousel__title">
              nos gustan las relaciones <span>a largo plazo</span>
            </h2>
            <p className="carousel__text">
              Pensar en el otro, valorarnos, estar cerca, crecer juntos. Ser
              amigos, más que proveedores. <br />
              Tener una relación humana, más que una relación solamente
              transaccional.
            </p>
          </div>
          <div className="carousel__container">
            <h2 className="carousel__title">
              nuestras acciones, son
              <br /> nuestra mejor
              <span>carta de presentacion</span>
            </h2>
            <p className="carousel__text">
              eso significa alejarnos de calificaciones como: 'los mejores', y
              utilizar expresiones como: 'cada vez mejor'. una invitacion a
              retarnos constantemente y estar en aprendizaje continuo para
              sorprenderte, cada dia, con nuevas cosas.
            </p>
          </div>
          <div className="carousel__container">
            <h2 className="carousel__title">
              diversion: <span>siempre!</span>
            </h2>
            <p className="carousel__text">
              Un juego de ping pong, un cafe, clases de guitarra... Un espacio
              libre de jerarquias y lleno de creatividad, entre amigos.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
