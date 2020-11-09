import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return( 
    <article className="teacher-item">
    <header>
        <img src="https://lh3.googleusercontent.com/3LJ_tlLqBNc1OMv29j9blZdbGFLIWdrHL-VxdIrSWKMeKaCYOGECghMW63-5PhIzZQ4pCcg=s85" alt="Thamires"/>
        <div>
            <strong>Thamires</strong>
            <span>Química</span>
        </div>
    </header>

    <p>
        Apaixonada por química e tals 
        <br/><br/>
        E até que gosta da pessoas(as vezes)
    </p>

    <footer>
        <p>
            Preço/Hora
            <strong>R$ 2</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
        </button>
    </footer>
</article>);
}

export default TeacherItem;