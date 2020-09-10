import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero"/>
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="E02041" />
                </button>
            </header>

            <h1>Casos cadastrados </h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>100,00 €</p>

                    <button>
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>

        </div>
    )
}