/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './homeBanner.css';
import { Link } from 'react-router-dom';
import tv from '../../assets/images/tv.png';
const HomeBanner = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1><span className="d-block">Curved Gaming Monitor</span></h1>
                            <p className="mb-4">49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR...</p>
                            <p>
                                <Link to={`/details/14`} className="btn btn-secondary me-2">Shop Now</Link>
                                <Link to={`/products`} className="btn btn-white-outline">Explore</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img-wrap">
                            <img src={tv} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;