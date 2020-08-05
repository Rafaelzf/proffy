import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import StudyIcons from '../../assets/images/icons/study.svg';
import giveClassIcons from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Landing = () => {
    return (
        <div id="landing-page">
            <div id="landing-page-content" className="conatainer">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landing} alt="Plataforma de estudo" className="hero-image" />

                <div className="buttons-container">
                    <a href="#" className="study">
                        <img src={StudyIcons} alt="Estudar" />
                        Estudar
                    </a>

                    <a href="#" className="give-classes">
                        <img src={giveClassIcons} alt="Dar aulas" />
                        Dar aulas
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexões realizadas.
                    <img src={PurpleHeartIcon} alt="Purple Heart" />
                </span>
            </div>
        </div>
    );
}

export default Landing;

