import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import {
  getCart,
  productAmountAdd,
  productAmountDel,
  productDelete,
  clearCart
} from "../../actions";
import { summReplacer } from "../../utils/replacer";

import styles from "./ProducstList.module.css";
import trashHover from "./assets/icon-cart-trash-action.svg";
import trash from "./assets/icon-cart-trash.svg";
import gold from "./assets/icon-gold.svg";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3_1 from "./assets/3_1.jpg";
import img3_2 from "./assets/3_2.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";

let initCart = [
  {
    id: 1,
    name: "Стакан YPSILON BRIO CAPPUCCINO 220 мл",
    image: img1,
    amount: 2,
    price: 1790,
    discont: 1000,
    minDiscont: 1000,
    set: false,
    params: {
      type: "color",
      value: "#e1eb31"
    }
  },
  {
    id: 2,
    name: "Одеяло Woolfield Sunrise",
    image: img2,
    amount: 1,
    price: 2000,
    discont: 1000,
    minDiscont: 0,
    set: false,
    params: {
      type: "size",
      value: "170х200"
    }
  },
  {
    id: 3,
    name: "Комбо набор Сумка с удлиненными ручками + Зонт-трость SwissOak",
    image: [img3_1, img3_2],
    amount: 1,
    price: 2300,
    discont: 1199,
    minDiscont: 0,
    set: true
  },
  {
    id: 4,
    name: "Беспроводная колонка Goodyear Bluetooth Speaker",
    image: img4,
    amount: 1,
    price: 5000,
    discont: 2500,
    minDiscont: 0,
    set: false
  },
  {
    id: 5,
    name: "Очки солнцезащитные спортивные антибликовые с поляризацией",
    image: img5,
    amount: 1,
    price: 0,
    discont: 0,
    minDiscont: 0,
    set: false
  }
];

class ProducstList extends Component {
  componentDidMount() {
    const { getCart } = this.props;
    getCart(initCart);
  }

  handleClickClearCart = () => {
    const { clearCart } = this.props;

    clearCart();
  };

  handleClickDel = event => {
    const { productDelete } = this.props;

    productDelete(event.target.dataset.id);
  };

  handleClickMinus = ({ target }) => {
    const { productAmountDel } = this.props;

    productAmountDel(target.dataset.id);
  };

  handleClickPlus = ({ target }) => {
    const { productAmountAdd } = this.props;

    productAmountAdd(target.dataset.id);
  };

  renderParams(param) {
    switch (param.type) {
      case "color":
        return (
          <div className={styles.productInfo}>
            Цвет
            <svg
              style={{ marginLeft: "16px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="20"
              viewBox="0 0 17 20"
            >
              <path
                fill={param.value}
                fillRule="evenodd"
                d="M8.5 20c4.694 0 8.5-3.024 8.5-7.826C17 7.37 8.5 0 8.5 0S0 7.371 0 12.174C0 16.976 3.806 20 8.5 20z"
              />
            </svg>
          </div>
        );

      case "size":
        return (
          <div className={styles.productInfo}>
            Размер
            <span style={{ marginLeft: "16px" }} className={styles.sizeParam}>
              {param.value}
            </span>
          </div>
        );

      default:
        break;
    }
  }

  render() {
    const { cart } = this.props;

    return (
      <Fragment>
        <div>
          <h2 className={styles.title}>Вот что в Вашей корзине</h2>
          <span className={styles.clear} onClick={this.handleClickClearCart}>
            Очистить корзину
          </span>
        </div>

        {cart.length ? (
          <ul className={styles.productList}>
            {cart.map(product => (
              <li key={product.id} className={styles.productItem}>
                <div className={styles.productHeading}>
                  <h3 className={styles.productTitle}>{product.name}</h3>
                  <span className={styles.productDelete}>
                    <img src={trash} alt="trash" />
                    <img
                      data-id={product.id}
                      src={trashHover}
                      alt="trashHover"
                      className={styles.trashHover}
                      onClick={this.handleClickDel}
                    />
                  </span>
                </div>

                <div className={styles.product}>
                  {product.set !== true ? (
                    <div className={styles.productLeft}>
                      <div className={styles.productImgContainer}>
                        <img
                          className={styles.productImg}
                          src={product.image}
                          alt={product.name}
                        />
                      </div>

                      {product.price !== 0 ? (
                        <div className={styles.productSetting}>
                          {product.params
                            ? this.renderParams(product.params)
                            : null}

                          <div
                            className={styles.productAmount}
                            style={
                              product.params
                                ? { marginTop: "20px" }
                                : { marginTop: "32px" }
                            }
                          >
                            <span
                              className={styles.amountControl}
                              data-id={product.id}
                              onClick={this.handleClickMinus}
                            >
                              −
                            </span>
                            <span className={styles.amountCurrent}>
                              {product.amount}
                            </span>
                            <span
                              className={styles.amountControl}
                              data-id={product.id}
                              onClick={this.handleClickPlus}
                            >
                              +
                            </span>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className={styles.productLeft}>
                      <div className={styles.productImgContainer}>
                        <ul className={styles.productImgList}>
                          {product.image.map(image => (
                            <li className={styles.productImgItem}>
                              <img
                                className={styles.productImg}
                                src={image}
                                alt={product.name}
                              />
                              <span>+</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {product.price !== 0 ? (
                    <div className={styles.productRight}>
                      <div className={styles.originalPrice}>
                        Полная цена
                        <span>{`${summReplacer(
                          product.price * product.amount
                        )} ₽`}</span>
                      </div>
                      <div className={styles.discont}>
                        Можно оплатить с личного счета
                        <span>{`${summReplacer(
                          product.discont * product.amount
                        )} ₽`}</span>
                      </div>
                      {product.minDiscont !== 0 ? (
                        <div className={styles.minDiscont}>
                          Минимально к оплате с личного счета
                          <span>{`${summReplacer(
                            product.minDiscont * product.amount
                          )} ₽`}</span>
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className={styles.productRight}>
                      <span className={styles.goldGift}>
                        {"Подарок от "}
                        <span className={styles.gold}>
                          <img src={gold} alt="gold" />
                          {" GOLD статуса"}
                        </span>
                      </span>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.cartIsEmpy}>Пустота...</p>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getCart,
  productAmountAdd,
  productAmountDel,
  productDelete,
  clearCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProducstList);
