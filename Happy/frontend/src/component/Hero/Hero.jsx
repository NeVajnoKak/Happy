import React from 'react'

import heroImg from '../../assets/img/interior-wall-with-green-plant-decoration-light-green-wall-shelf-3d-rendering 4.png'

const Hero = () => {
    return (
        <>
            <div id="heroIndicator" className="carousel slide mt-5">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={heroImg} className="round mx-auto d-block" alt="..." />
                        <div className="carousel-caption top-0 mt-4  d-none d-md-block">
                            <div className="hero-text">Сделай любой праздник <br />незабываемым! </div>
                            <p className="hero-text">Самый широкий ассортимент товаров<br /> для всех видов праздников.</p>
                            <button className="custom-btn gold hero-btn mt-3">Выбрать подарок</button>
                        </div>
                        <div className="posrel carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={heroImg} className="round mx-auto d-block" alt="..." />
                        <div className="carousel-caption top-0 mt-4  d-none d-md-block">
                            <div className="hero-text">Сделай любой праздник <br />незабываемым! </div>
                            <p className="hero-text">Самый широкий ассортимент товаров<br /> для всех видов праздников.</p>
                            <button className="custom-btn gold hero-btn mt-3">Выбрать подарок</button>
                        </div>
                        <div className="posrel carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={heroImg} className="round mx-auto d-block" alt="..." />
                        <div className="carousel-caption top-0 mt-4  d-none d-md-block">
                            <div className="hero-text">Сделай любой праздник <br />незабываемым! </div>
                            <p className="hero-text">Самый широкий ассортимент товаров<br /> для всех видов праздников.</p>
                            <button className="custom-btn gold hero-btn mt-3">Выбрать подарок</button>
                        </div>
                        <div className="posrel carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#heroIndicator" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#heroIndicator" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#heroIndicator" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#heroIndicator" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#heroIndicator" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
            </div>
        </>
    )
}

export default Hero