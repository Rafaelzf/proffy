import React from 'react'
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './style.css';


const TeacherItem = () => {
    return (
        <>
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/53485909?s=460&u=ee81d252734c26ae44523666873d8b986ffa716a&v=4" alt="Rafael Zanini Francucci"/>
            <div>
                <strong>Rafael Zanini Francucci</strong>
                <span>Filosofia</span>
            </div>
        </header>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br /><br />
             Unde magni tempore nobis eaque, molestias accusamus in, delectus repellendus quidem nesciunt vero, reprehenderit repudiandae dignissimos ducimus sunt fuga sint. Temporibus, culpa!
        </p>
        <footer>
            <p>
               Preço/hora <strong>R$ 20,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    </>
    )
}

export default TeacherItem;
