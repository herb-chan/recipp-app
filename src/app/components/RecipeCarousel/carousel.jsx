import React, { useState } from 'react';
import styles from './carousel.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCow,
    faClock,
    faNotesMedical,
    faLeaf,
    faEgg,
    faBreadSlice,
    faBacon,
    faPizzaSlice,
    faMugHot,
    faCaretRight,
    faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';

export default function Carousel({
    togglePopup,
    isPopupVisible,
    setSelectedRecipe,
    checkIfContains,
    getHealthScoreClassName,
}) {
    const [startIndex, setStartIndex] = useState(0);

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + recipes.length) % recipes.length);
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % recipes.length);
    };

    const handleSlideClick = (recipe) => {
        setSelectedRecipe(recipe);
        togglePopup(recipe);
    };

    const recipes = [
        {
            title: 'Vegan Pasta with Tomato Sauce',
            image: '/images/ramen.jpg',
            imageType: 'jpg',
            readyInMinutes: 25,
            servings: 4,
            dairyFree: true,
            diets: ['vegan', 'vegetarian'],
            glutenFree: true,
            sustainable: false,
            vegan: true,
            vegetarian: true,
            healthScore: 95,
            dishTypes: ['main course', 'pasta'],
        },
        {
            title: 'Quinoa Salad with Chickpeas',
            image: '/images/ramen.jpg',
            imageType: 'jpg',
            readyInMinutes: 20,
            servings: 6,
            dairyFree: true,
            diets: ['vegetarian', 'gluten free'],
            glutenFree: true,
            sustainable: true,
            vegan: false,
            vegetarian: true,
            healthScore: 92,
            dishTypes: ['salad', 'side dish'],
        },
        {
            title: 'Spaghetti Carbonara',
            image: '/images/ramen.jpg',
            imageType: 'jpg',
            readyInMinutes: 35,
            servings: 4,
            dairyFree: false,
            diets: ['none'],
            glutenFree: false,
            sustainable: true,
            vegan: false,
            vegetarian: false,
            healthScore: 65,
            dishTypes: ['main course', 'pasta'],
        },
        {
            title: 'Mushroom Risotto',
            image: '/images/ramen.jpg',
            imageType: 'jpg',
            readyInMinutes: 40,
            servings: 4,
            dairyFree: false,
            diets: ['none'],
            glutenFree: true,
            sustainable: false,
            vegan: false,
            vegetarian: true,
            healthScore: 70,
            dishTypes: ['main course', 'rice'],
        },
        {
            title: 'Grilled Salmon with Lemon Butter',
            image: '/images/ramen.jpg',
            imageType: 'jpg',
            readyInMinutes: 30,
            servings: 4,
            dairyFree: false,
            diets: ['pescatarian'],
            glutenFree: true,
            sustainable: true,
            vegan: false,
            vegetarian: false,
            healthScore: 85,
            dishTypes: ['main course', 'seafood'],
        },
    ];

    return (
        <div className={`${styles.carousel} ${isPopupVisible ? styles.blur : ''}`}>
            <div>
                <div className={styles.slides_container}>
                    {[...recipes, ...recipes, ...recipes].slice(startIndex, startIndex + 3).map((recipe, index) => (
                        <div key={index} className={styles.slide_container} onClick={() => handleSlideClick(recipe)}>
                            <Image
                                src={recipe.image}
                                alt={recipe.title}
                                className={styles.recipe_image}
                                width={400}
                                height={250}
                            />
                            <div className={styles.recipe_text_container}>
                                <h1 className={styles.recipe_name}>{recipe.title}</h1>
                                <div className={styles.additional_informations_container}>
                                    <p className={styles.additional_informations}>
                                        <span className={styles.additional_key}>
                                            <FontAwesomeIcon icon={faMugHot} /> Type of dish:
                                        </span>{' '}
                                        <span className={styles.additional_value}>{recipe.dishTypes}</span>
                                    </p>
                                    <p className={styles.additional_informations}>
                                        <span className={styles.additional_key}>
                                            <FontAwesomeIcon icon={faPizzaSlice} /> Servings amount:
                                        </span>{' '}
                                        <span className={styles.additional_value}>{recipe.servings}</span>
                                    </p>
                                    <p className={styles.additional_informations}>
                                        <span className={styles.additional_key}>
                                            <FontAwesomeIcon icon={faClock} /> Preparation time:
                                        </span>{' '}
                                        <span className={styles.additional_value}>{recipe.readyInMinutes} minutes</span>
                                    </p>
                                    <p className={styles.additional_informations}>
                                        <span className={styles.additional_key}>
                                            <FontAwesomeIcon icon={faCow} /> Dairy:
                                        </span>{' '}
                                        <span className={styles.additional_value}>
                                            {checkIfContains(recipe.dairyFree)}
                                        </span>
                                    </p>
                                    <p className={styles.additional_informations}>
                                        <span className={styles.additional_key}>
                                            <FontAwesomeIcon icon={faBreadSlice} /> Gluten:
                                        </span>{' '}
                                        <span className={styles.additional_value}>
                                            {checkIfContains(recipe.glutenFree)}
                                        </span>
                                    </p>
                                    <p className={styles.additional_informations}>
                                        <span className={styles.additional_key}>
                                            <FontAwesomeIcon icon={faLeaf} /> Vegan:
                                        </span>{' '}
                                        <span className={styles.additional_value}>{checkIfContains(recipe.vegan)}</span>
                                    </p>
                                    <p className={styles.additional_informations}>
                                        <span className={styles.additional_key}>
                                            <FontAwesomeIcon icon={faEgg} /> Vegetarian:
                                        </span>{' '}
                                        <span className={styles.additional_value}>
                                            {checkIfContains(recipe.vegetarian)}
                                        </span>
                                    </p>
                                    <p className={styles.additional_informations}>
                                        <span className={styles.additional_key}>
                                            <FontAwesomeIcon icon={faNotesMedical} /> Health score:
                                        </span>{' '}
                                        <span className={styles.additional_value}>
                                            positive in{' '}
                                            <span className={getHealthScoreClassName(recipe.healthScore)}>
                                                {recipe.healthScore}%
                                            </span>
                                        </span>
                                    </p>
                                    <p className={styles.additional_informations}>
                                        <span className={styles.additional_key}>
                                            <FontAwesomeIcon icon={faBacon} /> Sustainable:
                                        </span>{' '}
                                        <span className={styles.additional_value}>
                                            {checkIfContains(recipe.sustainable)}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.nav_buttons_container}>
                    <button onClick={handlePrev} className={`${styles.nav_button} ${styles.nav_button_left}`}>
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </button>
                    <button onClick={handleNext} className={`${styles.nav_button} ${styles.nav_button_right}`}>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </button>
                </div>
            </div>
        </div>
    );
}
