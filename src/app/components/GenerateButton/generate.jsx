'use client';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './generate.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

export default function GenerateButton() {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const onButtonClick = () => {
        setActive(!active);
        redirectUser();
    };

    const redirectUser = () => {
        setTimeout(() => {
            navigate('/recipes');
        }, 700);
    };

    const getClassName = (isActive) => {
        const baseClassName = styles.button;
        const stateClassName = isActive ? styles.button_active : styles.button_inactive;

        return `${baseClassName} ${stateClassName}`;
    };

    return (
        <button className={getClassName(active)} onClick={onButtonClick}>
            <FontAwesomeIcon icon={faWandMagicSparkles} className={active ? styles.icon_clicked : styles.icon} />{' '}
            Generate
        </button>
    );
}
