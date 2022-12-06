function HomePage() {
  return (
    <>
      <div>
        <nav className="navbar">
          <button type="button" className="navbar-responsive">
            <div className="button-login">Login</div>
          </button>

          <h1 className="navbar-tittle">EarlEdu</h1>
          <nav className="navbar-menu">
            <a href="#footer">
              <button type="button">Contact Us</button>
            </a>
            <a href="login">
              <button type="button" className="button-login">
                Login
              </button>
            </a>
          </nav>
        </nav>
        <div className="container-header">
          <div className="row">
            <div className="column-header">
              <img src="./img/familly.svg" alt="familly" id="familly-img" />
              <img
                src="./img/circle.svg"
                alt="circle-img"
                style={{ marginLeft: 70, marginTop: 90 }}
              />
            </div>
            <div className="column-header">
              <article>
                <h2 id="judul">
                  The best gift a parent can give children is time
                </h2>
                <p id="isi">
                  EarlEdu adalah aplikasi lorem Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
              </article>
            </div>
          </div>
          <img src="./img/line.svg" id="line-img" />
        </div>
        <div className="container-feature" id="features">
          <h1>FEATURES</h1>
          <div className="wrapper">
            <div className="card">
              <img src="./img/logofeature-img.svg" alt="logofeature" />
              <article>Lorem ipsum dolor sit amet, veniam,</article>
            </div>
            <div className="card">
              <img src="./img/logofeature-img.svg" alt="logofeature" />
              <article>Lorem ipsum dolor sit amet, veniam,</article>
            </div>
            <div className="card">
              <img src="./img/logofeature-img.svg" alt="logofeature" />
              <article>Lorem ipsum dolor sit amet, veniam,</article>
            </div>
          </div>
        </div>

        <div className="container-team" id="our-team">
          <h1>
            OUR TEAM
            <article>Get to know us, nice to meet you!</article>
          </h1>

          <div className="row">
            <div className="column-team" id="container-team">
              <div className="card">
                <img src="./img/ourteam-img.svg" alt="ourteam-img" />
                <article>Hilman Habib</article>
                <article>Surabaya</article>
              </div>
            </div>
            <div className="column-team">
              <div className="card">
                <img src="./img/ourteam-img.svg" alt="ourteam-img" />
                <article>Hilman Habib</article>
                <article>Surabaya</article>
              </div>
            </div>
            <div className="column-team">
              <div className="card">
                <img src="./img/ourteam-img.svg" alt="ourteam-img" />
                <article>Hilman Habib</article>
                <article>Surabaya</article>
              </div>
            </div>
            <div className="column-team">
              <div className="card">
                <img src="./img/ourteam-img.svg" alt="ourteam-img" />
                <article>Hilman Habib</article>
                <article>Surabaya</article>
              </div>
            </div>
          </div>
        </div>
        <footer id="footer">
          <ul className="icons">
            <li>
              <a href="#">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#our-team">Our Team</a>
            </li>
            <li>
              <a href="mailto: earledu@gmail.com">Contact Us</a>
            </li>
          </ul>
          <div className="footer-copyright">
            <p>EarlEdu @ 2022 All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
