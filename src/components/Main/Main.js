import React, { Component } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { connect } from "react-redux";

import { getCart } from "../../actions";
import { summReplacer } from "../../utils/replacer";

import Slider from "../Slider";
import ProducstList from "../ProducstList";

import styles from "./Main.module.css";

class Main extends Component {
  state = {
    productsAmount: 0,
    value: 100,
    fullPrice: 0,
    usedBonuses: 0,
    totalPrice: 0,
    gold: true,
    returnBonuses: 0
  };

  componentDidUpdate(prevProps) {
    const { cart } = this.props;
    let productsAmount = 0;
    let fullPrice = 0;

    if (prevProps.cart !== cart)
      cart.map(product => {
        productsAmount += product.amount;
        fullPrice += product.price * product.amount;
        return this.setState({
          fullPrice,
          productsAmount
        });
      });
  }

  render() {
    const { user, cart } = this.props;

    return (
      <div className={styles.container}>
        <ProducstList />
        {cart.length ? (
          <div className={styles.total}>
            <div className={styles.amountProducts}>
              <span>{`${this.state.productsAmount} товара на сумму`}</span>
              <span className={styles.startingPrice}>
                {`${summReplacer(this.state.fullPrice)} ₽`}
              </span>
            </div>
            <div className={styles.usedBonuses}>
              <span>Используется рублей с личного счета</span>
              <span className={styles.bonusesAmount}>
                {`${summReplacer(this.state.value)} ₽`}
              </span>
            </div>
            <p className={styles.bonusesInfo}>
              Передвигая лягушку, выберите сколько рублей с личного счета вы
              хотите потратить
            </p>
            <div className={styles.bonusesRange}>
              <div className={styles.minMaxBonuses}>
                <span>{`${summReplacer(0)} ₽`}</span>
                <span>
                  {`${
                    user.bonuses !== undefined ? summReplacer(user.bonuses) : 0
                  } ₽`}
                </span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <InputRange
                  maxValue={user.bonuses !== undefined ? user.bonuses : 100}
                  minValue={0}
                  step={100}
                  value={this.state.value}
                  onChange={value => this.setState({ value })}
                />
              </div>
            </div>

            <div className={styles.confirmationOrder}>
              <div className={styles.confirmationOrderContainer}>
                <div className={styles.deliveryInfo}>
                  Доставка
                  <span
                    className={styles.deliveryInfoAmount}
                  >{`Бесплатно`}</span>
                </div>
                <div className={styles.totalPrice}>
                  Итоговая стоимость
                  <span className={styles.totalPriceAmount}>
                    {`${summReplacer(
                      this.state.fullPrice - this.state.value
                    )} ₽`}
                  </span>
                </div>
                <div className={styles.goldBonuses}>
                  + 20% на личный счет от GOLD статуса
                  <span className={styles.goldBonusesAmount}>
                    {`${summReplacer(
                      (this.state.fullPrice - this.state.value) * 0.2
                    )} ₽`}
                  </span>
                </div>
                <div className={styles.returnBonuses}>
                  На личный счет вернется
                  <span className={styles.returnBonusesAmount}>
                    {` ${summReplacer(
                      this.state.fullPrice -
                        this.state.value +
                        (this.state.fullPrice - this.state.value) * 0.2
                    )} ₽`}
                  </span>
                </div>
              </div>

              <button className={styles.confirmOrderBtn}>
                Перейти к оформлению заказа
              </button>
            </div>
          </div>
        ) : null}

        <div className={styles.recommend}>
          <div>
            <h4 className={styles.title}>Мы также рекоммендуем</h4>
            <span className={styles.seeAllRecommend}>Смотреть все</span>
          </div>
          <Slider />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  getCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
