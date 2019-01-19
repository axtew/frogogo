import React, { Component } from "react";
import styles from "./Slider.module.css";
import Flickity from "react-flickity-component";

import { summReplacer } from "../../utils/replacer";

import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";

const slides = [
  {
    id: 1,
    name: "Многофункциональный штопор Richardson Sheffield",
    image: img1,
    defaultPrice: 799,
    discount: 349,
    finalPrice: 450
  },
  {
    id: 2,
    name: "Сумка для шопинга с удлиненными ручками SwissOak",
    image: img2,
    defaultPrice: 799,
    discount: 450,
    finalPrice: 349
  },
  {
    id: 3,
    name: "Банное полотенце Sweet Dreams",
    image: img3,
    defaultPrice: 3499,
    discount: 1199,
    finalPrice: 2300,
    colors: ["#a396c4", "#c3a37f", "#e1eb31"]
  },
  {
    id: 4,
    name: "Банное полотенце Sweet Dreams",
    image: img3,
    defaultPrice: 3499,
    discount: 1199,
    finalPrice: 2300
  },
  {
    id: 5,
    name: "Банное полотенце Sweet Dreams",
    image: img3,
    defaultPrice: 3499,
    discount: 1199,
    finalPrice: 2300
  }
];

class Slider extends Component {
  render() {
    const flickityOptions = {
      cellAlign: "left",
      draggable: true,
      pageDots: false,
      contain: true,
      // adaptiveHeight: false,
      initialIndex: 2
    };

    return (
      <div className={styles.App}>
        <Flickity
          className={"carousel"}
          elementType={"ul"}
          flickityRef={c => (this.flkty = c)}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
        >
          {slides.map(slide => (
            <li key={slide.id} className={styles.slide}>
              <a href="/change-me" className={styles.slideLink}>
                <img
                  alt={slide.name}
                  src={slide.image}
                  style={{ height: "100%" }}
                />
              </a>

              <div className="price">
                <span className={styles.original}>
                  {`${summReplacer(slide.defaultPrice)} ₽`}
                </span>
                <span className={styles.discount}>
                  {` - ${summReplacer(slide.discount)} ₽`}
                </span>
                <span className={styles.final}>
                  {` = ${summReplacer(slide.defaultPrice - slide.discount)} ₽`}
                </span>
              </div>

              <p className={styles.name}>{slide.name}</p>

              {slide.colors ? (
                <div className={styles.colors}>
                  {slide.colors.map(color => (
                    <svg
                      key={color}
                      style={{ margin: "0 5px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="20"
                      viewBox="0 0 17 20"
                    >
                      <path
                        fill={color}
                        fillRule="evenodd"
                        d="M8.5 20c4.694 0 8.5-3.024 8.5-7.826C17 7.37 8.5 0 8.5 0S0 7.371 0 12.174C0 16.976 3.806 20 8.5 20z"
                      />
                    </svg>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </Flickity>
      </div>
    );
  }
}

export default Slider;
