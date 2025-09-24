import React from 'react';
import './home.css';
import image from '../../assets/3.png'




const Home = () => {
    return (
        <div className='home-container'>

           
          <div id='home' className="promo-wrapper">

                <div className="promo-container">
                    <div className="text-content">

                        <h1 id='first'>Embroidery Promo Sale </h1>
                        <h1 id='second'>Elevate Your <br />Style for <br />Less</h1>
                    </div>


                    <div className="text-mobile">
                        <img src={image} id='mobile-pic' alt="Embroidery Hoop" />
                        <h1 id='first'>Embroidery Promo Sale </h1>
                        <h1 id='second-mobile'>Elevate Your Style for Less</h1>
                    </div>


                    <div className="image-container">
                        <img
                            src={image}
                            alt="Embroidery Hoop"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
