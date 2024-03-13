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
          interval={1000}
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
          <div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              alias reprehenderit quaerat explicabo culpa dignissimos est
              temporibus natus, quae assumenda! Assumenda ipsa doloremque
              laboriosam in dolor, quisquam labore quidem saepe.
            </h2>
          </div>
          <div>
            <h4>jjjjjjjjjjjjjj</h4>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              alias reprehenderit quaerat explicabo culpa dignissimos est
              temporibus natus, quae assumenda! Assumenda ipsa doloremque
              laboriosam in dolor, quisquam labore quidem saepe.
            </h2>
          </div>
          <div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              alias reprehenderit quaerat explicabo culpa dignissimos est
              temporibus natus, quae assumenda! Assumenda ipsa doloremque
              laboriosam in dolor, quisquam labore quidem saepe.
            </h2>
          </div>
          <div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              alias reprehenderit quaerat explicabo culpa dignissimos est
              temporibus natus, quae assumenda! Assumenda ipsa doloremque
              laboriosam in dolor, quisquam labore quidem saepe.
            </h2>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
