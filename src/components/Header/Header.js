import React, { Component } from "react";
import { connect } from "react-redux";

import { getUser } from "../../actions";
import { summReplacer } from "../../utils/replacer";

import logo from "./assets/logo.svg";
import location from "./assets/icon-location.svg";
import addPromocode from "./assets/icon-addpromocod.svg";
import gold from "./assets/icon-gold.svg";
import cart from "./assets/icon-cart.svg";
import arrow from "./assets/icon-arrow.svg";
import styles from "./Header.module.css";

const initUser = { cart: 6, gold: true, bonuses: 4700 };

class Header extends Component {
  componentDidMount() {
    const { getUser } = this.props;

    getUser(initUser);
  }

  render() {
    const { user } = this.props;

    return (
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerTop}>
            <div className="header-top-left">
              <span className={styles.delivery}>
                <img src={location} alt="location" />
                Регион доставки:
                <span className={styles.deliveryCity}>
                  {` Москва`}
                  <img style={{ marginLeft: "6px" }} src={arrow} alt="arrow" />
                </span>
              </span>
            </div>
            <div className={styles.headerTopRight}>
              <span
                className={styles.promocode}
                style={{ marginRight: "30px" }}
              >
                <img src={addPromocode} alt="addPromocode" />
                Ввести промокод
              </span>
              <span
                className={styles.goldStatus}
                style={{ marginRight: "30px" }}
              >
                <img src={gold} alt="gold" />
                GOLD статус - Выберите ПОДАРОК!
              </span>
              <span className={styles.wallet}>
                Ваш счёт
                <span className={styles.walletSumm}>
                  {` ${
                    user.bonuses !== undefined ? summReplacer(user.bonuses) : 0
                  } ₽`}
                </span>
                <img style={{ marginLeft: "6px" }} src={arrow} alt="arrow" />
              </span>
            </div>
          </div>
          <div className={styles.headerBottom}>
            <div className="header-bottom-left">
              <img src={logo} alt="logo" />
            </div>
            <div className="header-bottom-center">
              <ul className={styles.headerNavList}>
                <li className={styles.headerNavItem}>Коллекции</li>
                <li className={styles.headerNavItem}>Как пополнить счет?</li>
                <li className={styles.headerNavItem}>Поддержка</li>
              </ul>
            </div>
            <div className="header-bottom-right">
              <span className={styles.cart}>
                <img src={cart} alt="cart" />
                Корзина
                <span className={styles.cartAmount}>{user.cart}</span>
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
