import React, { Component } from "react";

import styles from "./Footer.module.css";
import visa from "./assets/logo-visa.png";
import mastercard from "./assets/logo-mastercard.png";
import mir from "./assets/logo-mir.png";
import vk from "./assets/icon-vk.png";
import fb from "./assets/icon-facebook.png";
import inst from "./assets/icon-instagram.png";
import twitter from "./assets/icon-twitter.png";
import phone from "./assets/icon-phone.svg";
import email from "./assets/icon-email.svg";

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            <ul className={styles.footerSections}>
              <li className={styles.sectionsItem}>
                <span className={styles.sectionsTitle}>Меню</span>
                <ul className={styles.sectionsContent}>
                  <li>
                    <a className={styles.sectionsLink} href="/change-me">
                      Категории
                    </a>
                  </li>
                  <li>
                    <a className={styles.sectionsLink} href="/change-me">
                      Коллекции
                    </a>
                  </li>
                  <li>
                    <a className={styles.sectionsLink} href="/change-me">
                      Бренды
                    </a>
                  </li>
                  <li>
                    <a className={styles.sectionsLink} href="/change-me">
                      Что такое Frogogo?
                    </a>
                  </li>
                  <li>
                    <a className={styles.sectionsLink} href="/change-me">
                      Как пополнить счёт?
                    </a>
                  </li>
                  <li>
                    <a className={styles.sectionsLink} href="/change-me">
                      Поддержка
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.sectionsItem}>
                <span className={styles.sectionsTitle}>Помощь</span>
                <ul className={styles.sectionsContent}>
                  <li>
                    <a className={styles.sectionsLink} href="/change-me">
                      О нас
                    </a>
                  </li>
                  <li>
                    <a className={styles.sectionsLink} href="/change-me">
                      Карьера
                    </a>
                  </li>
                  <li>
                    <a className={styles.sectionsLink} href="/change-me">
                      Поставщики
                    </a>
                  </li>
                  <li>
                    <a className={styles.sectionsLink} href="/change-me">
                      Партнерская программа
                    </a>
                  </li>
                  <li>
                    <a className={styles.sectionsLink} href="/change-me">
                      Конфиденциальность
                    </a>
                  </li>
                  <li>
                    <a className={styles.sectionsLink} href="/change-me">
                      Публичная оферта
                    </a>
                  </li>
                </ul>
              </li>

              <li className={styles.sectionsItem}>
                <span className={styles.sectionsTitle}>Способы оплаты</span>
                <div className={styles.sectionsContent}>
                  <ul className={styles.cardsList}>
                    <li className={styles.cardsItem}>
                      <img src={mastercard} alt="mastercard" />
                    </li>
                    <li className={styles.cardsItem}>
                      <img src={visa} alt="visa" />
                    </li>
                    <li className={styles.cardsItem}>
                      <img src={mir} alt="mir" />
                    </li>
                  </ul>
                  <p className={styles.paymentInfo}>
                    Вы можете оплатить покупки наличными или банковской картой
                    при получении заказа.
                  </p>
                  <p className={styles.paymentInfo}>
                    Либо оплатить заказ онлайн на сайте.
                  </p>
                </div>
              </li>

              <li className={styles.sectionsItem}>
                <span className={styles.sectionsTitle}>Наши контакты</span>
                <div className={styles.sectionsContent}>
                  <span className={styles.contacts}>
                    <img
                      className={styles.contactsIcon}
                      src={phone}
                      alt="phone"
                    />
                    <a href="tel:88005553535">8 800 555 35 35</a>
                  </span>
                  <span
                    className={styles.contacts}
                    style={{ marginTop: "15px" }}
                  >
                    <img
                      className={styles.contactsIcon}
                      src={email}
                      alt="email"
                    />
                    <a href="mailto:info@frogogo.ru">info@frogogo.ru</a>
                  </span>

                  <ul className={styles.socialsList}>
                    <li className={styles.socialsItem}>
                      <a className={styles.socialsLink} href="/change-me">
                        <img src={fb} alt="fb" />
                      </a>
                    </li>
                    <li className={styles.socialsItem}>
                      <a className={styles.socialsLink} href="/change-me">
                        <img src={twitter} alt="twitter" />
                      </a>
                    </li>
                    <li className={styles.socialsItem}>
                      <a className={styles.socialsLink} href="/change-me">
                        <img src={inst} alt="inst" />
                      </a>
                    </li>
                    <li className={styles.socialsItem}>
                      <a className={styles.socialsLink} href="/change-me">
                        <img src={vk} alt="vk" />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles.footerBottom}>
            <ul className={styles.footerBottomList}>
              <li className={styles.footerBottomItem}>
                <a className={styles.footerBottomLink} href="/change-me">
                  100% Cashback
                </a>
              </li>
              <li className={styles.footerBottomItem}>
                <a className={styles.footerBottomLink} href="/change-me">
                  Доставка
                </a>
              </li>
              <li className={styles.footerBottomItem}>
                <a className={styles.footerBottomLink} href="/change-me">
                  ВИП Статус
                </a>
              </li>
              <li className={styles.footerBottomItem}>
                <a className={styles.footerBottomLink} href="/change-me">
                  Как работает Frogogo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
