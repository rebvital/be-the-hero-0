import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setID] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
    }   catch (err) {
        alert('Erro ao logar, tente novamente')
    }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Sua ID"
                    value={id}
                    onChange={e => setID(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="backlink" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro 
                        </Link>
                </form>
            </section>

            <img src={heroesImg} alt="heroes"/>
        </div>
    )
}