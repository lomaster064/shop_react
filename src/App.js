export default function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h3> Корзина </h3>

          <div className="cartItem">
            <img
              src="./images/iphone_15_white.jpeg"
              alt="Тест"
              className="img_basket"
            />
            <div className="cardItemInfo">
              <p> iPhone 15 white 256 Gb </p>
              <p> 99 000 Rub </p>
            </div>

            <img
              src="./images/btn-remove.svg"
              className="remove_item_basket"
              alt="Кнопка удаления"
            />
          </div>

          <div className="cartItem">
            <img
              src="./images/samsung_s23_grey.png"
              alt="Тест"
              className="img_basket"
            />
            <div className="cardItemInfo">
              <p> Samsung galaxy s23 grey 256 Gb </p>
              <p> 90 000 Rub </p>
            </div>

            <img
              src="./images/btn-remove.svg"
              className="remove_item_basket"
              alt="Кнопка удаления"
            />
          </div>

          <div className="result_price">
            <p> Итоговая сумма: 189 000 Rub </p>
          </div>

          <button className="btn_buy"> Оформить заказ </button>
        </div>
      </div>

      <header>
        <div className="header_left">
          <img src="./images/logo.svg" className="img_logo" alt="logo shop" />
          <div className="header_info">
            <h3> SarSeller </h3>
            <p> Лучший магазин </p>
          </div>
        </div>

        <div className="header_right">
          <ul className="menu_right">
            <li>
              <img
                src="./images/shop_basket.png"
                className="img_logo"
                alt="logo shop"
              />
              <span> 189000 Rub </span>
            </li>

            <li>
              <img
                src="./images/user_logo.png"
                className="img_logo"
                alt="logo shop"
              />
              <span> lomaster </span>
            </li>
          </ul>
        </div>
      </header>

      <div className="content"></div>
    </div>
  );
}
