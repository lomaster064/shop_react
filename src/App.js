export default function App() {
  return (
    <div className="wrapper">
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
              <span> 1000 Rub </span>
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
