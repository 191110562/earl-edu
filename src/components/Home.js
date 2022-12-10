import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="container-header">
            <div className="row">
                <div className="column-header">
                    <img src="./img/familly.svg" alt="familly" id="familly-img"/>
                    <img src="./img/circle.svg" alt="circle-img" style={{marginLeft: 70, marginTop: 90}}/>
                </div>
                <div className="column-header">
                    <article>
                        <h2 id="judul"> Welcome to EarlEdu! <br></br>The best gift a parent can give children is time!</h2>
                        <h2 id="isi">EarlEdu is ready to help parents in nurturing their loved ones!</h2>
                    </article>
                </div>
            </div>
            <img src="./img/line.svg" id="line-img" alt="Line"/>
        </div>
            <div className="container-feature" id="features">
            <h1>FEATURES</h1>
            <div className="wrapper">
                <div className="card-community">
                    <Link to="/community">
                        <div className="card">
                            <img src="./img/home-community.svg" alt="logofeature"/>
                            <h3>Community</h3>
                            <p>Come join the community!</p>
                            <p>The community is ready to help on solving your problems!</p>
                        </div>
                    </Link>
                </div>
                <div className="card-finder">
                    <Link to="/baby-name-finder">
                        <div className="card">
                            <img src="./img/home-babyname.svg" alt="logofeature"/>
                            <h3>Baby Name Finder</h3>
                            <p>Confused about naming your loved ones?</p>
                            <p>Come and try out as many names as you'd like!</p>
                        </div>
                    </Link>
                </div>
                <div className="card-alphabet">
                    <Link to="/learn-alphabet">
                        <div className="card">
                            <img src="./img/home-abc.svg" alt="logofeature"/>
                            <h3>Learn Alphabet</h3>
                            <p>Come and learn alphabets!</p>
                            <p>Click on the alphabet and pronounce it together!</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

        <div className="container-team" id="our-team">
            <h1>OUR TEAM 
                <article>Get to know us, nice to meet you!</article>
            </h1>
            
            <div className="row">
                <div className="column-team" id="container-team">
                    <div className="card">
                        <img src="./img/michelle.jpg" alt="ourteam-img"/>
                        <article>Michelle</article>
                        <article>Universitas Mikroskil</article>
                    </div>
                </div>
                <div className="column-team">
                    <div className="card">
                        <img src="./img/ahmadray.jpg" alt="ourteam-img"/>
                        <article>Ahmad Ray Septa Firdaus</article>
                        <article>Universitas Singaperbangsa Karawang</article>
                    </div>
                </div>
                <div className="column-team">
                    <div className="card">
                        <img src="./img/habib.jpg" alt="ourteam-img"/>
                        <article>Muhammad Hilman Habib Habibi</article>
                        <article>Universitas Pembangunan Nasional Veteran Jawa Timur</article>
                    </div>
                </div>
                <div className="column-team">
                    <div className="card">
                        <img src="./img/Belia.png" alt="ourteam-img"/>
                        <article>Belia Rizki Nurapriyani</article>
                        <article>Universitas Kuningan</article>
                    </div>
                </div>
            </div>
        </div>
        <footer id="footer">
        <ul className="icons">
            <li><a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
        </ul>
        <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#our-team">Our Team</a></li>
                <li><a href="mailto: earledu@gmail.com">Contact Us</a></li>
        </ul>
            <div className="footer-copyright">
                <p>EarlEdu @ 2022 All Rights Reserved.</p>
            </div>
        </footer>  
    </div>
  );
};
