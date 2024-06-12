import React from "react";
import "./styles.css";
import imgGallery1 from "../../assets/img/imgGallery1.png";
import imgGallery2 from "../../assets/img/imgGallery2.png";
import imgGallery3 from "../../assets/img/imgGallery3.png";
import imgGallery4 from "../../assets/img/imgGallery4.png";
import imgGallery5 from "../../assets/img/imgGallery5.png";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-column">
        <img
          src={imgGallery1}
          alt="Galeria 1"
          className="gallery-image small"
        />
        <img
          src={imgGallery2}
          alt="Galeria 2"
          className="gallery-image small"
        />
      </div>
      <img src={imgGallery3} alt="Galeria 3" className="gallery-image large" />
      <div className="gallery-column">
        <img
          src={imgGallery4}
          alt="Galeria 4"
          className="gallery-image small"
        />
        <img
          src={imgGallery5}
          alt="Galeria 5"
          className="gallery-image small"
        />
      </div>
    </div>
  );
};

export default Gallery;
