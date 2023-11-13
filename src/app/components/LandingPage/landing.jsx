import React, { useState } from 'react';
import styles from './landing.module.css';
import GenerateButton from '../GenerateButton/generate';
import IngredientAdd from '../AddIngredient/ingredient';
import Logo from '../RecippLogo/logo';
import AddedIngredient from '../AddedIngredient/addedIngredient';
import PopUp from '../IngredientEditPopUp/popup';
import FilteringPopUp from '../RecipesFilteringPopUp/filteringpopup';
import ButtonDropdown from '../FilteringButton/filtering';

export default function LandingPage() {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [showFilteringPopUp, setShowFilteringPopUp] = useState(false);
    const [ingredient, setIngredient] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const addIngredient = (name, ingredientDetails) => {
        const newIngredient = { name, ...ingredientDetails };
        setSelectedIngredients([...selectedIngredients, newIngredient]);
    };

    const handleDeleteIngredient = (index) => {
        const updatedIngredients = selectedIngredients.filter((_, i) => i !== index);
        setSelectedIngredients(updatedIngredients);
    };

    const handleEditIngredient = (index, ingredientData) => {
        setIngredient(ingredientData.name);
        setShowEditPopup(true);
        setIsEditing(true);
        setEditingIndex(index);
    };

    const togglePopUp = (name, editingMode = false) => {
        if (name !== '') {
            setShowPopUp(!showPopUp);
            setIngredient(name);

            if (editingMode) {
                setEditingIndex(true);
            } else {
                setEditingIndex(false);
            }
        }
    };

    const toggleFilteringPopup = () => {
        if (!editingIndex) {
            setShowFilteringPopUp(!showFilteringPopUp);
        }
    };

    const abortPopUpp = () => {
        if (!editingIndex) {
            setShowPopUp(false);
        }
    };

    const handleAddIngredientFromPopUp = ({ name, amount, unit }) => {
        addIngredient(name, { amount, unit });
        setShowPopUp(false);
    };

    const handleSaveEditedIngredient = ({ name, amount, unit, index }) => {
        const updatedIngredients = [...selectedIngredients];
        updatedIngredients[index] = { name, amount, unit };
        setSelectedIngredients(updatedIngredients);
        setShowEditPopup(false);
        setIsEditing(false);
    };

    return (
        <>
            {showPopUp && (
                <PopUp togglePopUp={handleAddIngredientFromPopUp} abortPopUp={abortPopUpp} ingredient={ingredient} />
            )}
            {showEditPopup && (
                <PopUp
                    togglePopUp={() => setShowEditPopup(false)}
                    ingredient={ingredient}
                    isEditing={isEditing}
                    onSave={handleSaveEditedIngredient}
                    editingIndex={editingIndex}
                />
            )}
            {showFilteringPopUp && <FilteringPopUp togglePopup={toggleFilteringPopup} />}
            <div
                className={`${styles.recipp_website_content} ${
                    showPopUp || showEditPopup || showFilteringPopUp ? styles.blur : ''
                }`}>
                <div className={styles.ingredient_container}>
                    <Logo />
                    <IngredientAdd togglePopUp={togglePopUp} />
                    <div className={styles.selected_ingredients_container}>
                        {selectedIngredients.map((ingredient, index) => (
                            <AddedIngredient
                                key={index}
                                name={ingredient.name}
                                amount={ingredient.amount}
                                unit={ingredient.unit}
                                onDelete={handleDeleteIngredient}
                                onEdit={handleEditIngredient}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.nav_bottom_buttons}>
                    <div className={styles.filter}>
                        <ButtonDropdown togglePopup={toggleFilteringPopup} />
                    </div>
                    <GenerateButton selectedIngredients={selectedIngredients} />
                </div>
            </div>
        </>
    );
}
