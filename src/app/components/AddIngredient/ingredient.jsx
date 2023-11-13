import React, { useState } from 'react';
import styles from './ingredient.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function IngredientAdd({ togglePopUp }) {
    const [ingredient, setIngredient] = useState('');

    const handleInputChange = (e) => {
        setIngredient(e.target.value);
    };

    const togglePopUpAndPassIngredient = () => {
        togglePopUp(ingredient);
        setIngredient('');
    };

    return (
        <div className={styles.ingredient_add_container}>
            <div className={styles.ingredient_add_input}>
                <button className={styles.add_ingredient_button} onClick={togglePopUpAndPassIngredient}>
                    <FontAwesomeIcon icon={faPlus} className={styles.icon} />
                </button>
                <input
                    id="ingredient_specification_field"
                    type="text"
                    className={styles.ingredient_add}
                    placeholder="Ingredient..."
                    value={ingredient}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
}
