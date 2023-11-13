import React, { useState } from 'react';
import styles from './recipes.module.css';
import SideBar from '../SideBar/side';
import FilteringPopUp from '../RecipesFilteringPopUp/filteringpopup';
import RecipePopUp from '../RecipePopUp/recipepopup';
import Carousel from '../RecipeCarousel/carousel';
import NavBar from '../NavBar/navbar';

export default function Recipes() {
    const [isPopupVisible, setPopupVisibility] = useState(false);
    const [isRecipeVisible, setRecipeVisibility] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const togglePopupVisibility = () => {
        setPopupVisibility(!isPopupVisible);
    };

    const toggleRecipeVisibility = () => {
        setRecipeVisibility(!isRecipeVisible);
    };

    const checkIfContains = (ifContains) => {
        const checkResult = ifContains ? 'Yes' : 'No';

        return checkResult;
    };

    const getHealthScoreClassName = (healthScore) => {
        let healthScoreClassName;

        if (healthScore < 33) {
            healthScoreClassName = styles.health_score_negative;
        } else if (healthScore >= 33 && healthScore < 66) {
            healthScoreClassName = styles.health_score_neutral;
        } else if (healthScore >= 66) {
            healthScoreClassName = styles.health_score_positive;
        }

        return healthScoreClassName;
    };

    return (
        <>
            {isPopupVisible && <FilteringPopUp togglePopup={togglePopupVisibility} />}
            {isRecipeVisible && (
                <RecipePopUp
                    recipe={selectedRecipe}
                    checkIfContains={checkIfContains}
                    getHealthScoreClassName={getHealthScoreClassName}
                    togglePopup={toggleRecipeVisibility}
                />
            )}
            <div
                className={`${styles.recipes_page_whole} ${isPopupVisible ? styles.blur : ''} ${
                    isRecipeVisible ? styles.blur : ''
                }`}>
                <div className={styles.recipes_page}>
                    <SideBar togglePopup={togglePopupVisibility} />
                    <div className={styles.recipes_page_content}>
                        <NavBar togglePopup={togglePopupVisibility} />
                        <Carousel
                            togglePopup={toggleRecipeVisibility}
                            setSelectedRecipe={setSelectedRecipe}
                            checkIfContains={checkIfContains}
                            getHealthScoreClassName={getHealthScoreClassName}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
