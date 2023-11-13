'use client';

import styles from './recipepopup.module.css';
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
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

export default function RecipePopUp({ recipe, checkIfContains, getHealthScoreClassName, togglePopup }) {
    const containsDairy = checkIfContains(recipe.dairyFree);
    const containsGluten = checkIfContains(recipe.glutenFree);
    const containsVegan = checkIfContains(recipe.vegan);
    const containsVegetarian = checkIfContains(recipe.vegetarian);
    const containsSustainable = checkIfContains(recipe.sustainable);
    const healthScoreClass = getHealthScoreClassName(recipe.healthScore);

    const onAbortClick = () => {
        togglePopup();
    };

    return (
        <div className={styles.popup_container}>
            <button className={styles.abort_popup} onClick={onAbortClick}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <div className={styles.recipe_banner}>
                <Image src={recipe.image} alt={recipe.title} className={styles.recipe_image} width={400} height={250} />
                <p className={styles.recipe_text}>
                    Recipe for <span className={styles.recipe_name}>{recipe.title}</span>
                </p>
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
                        <span className={styles.additional_value}>{containsDairy}</span>
                    </p>
                    <p className={styles.additional_informations}>
                        <span className={styles.additional_key}>
                            <FontAwesomeIcon icon={faBreadSlice} /> Gluten:
                        </span>{' '}
                        <span className={styles.additional_value}>{containsGluten}</span>
                    </p>
                    <p className={styles.additional_informations}>
                        <span className={styles.additional_key}>
                            <FontAwesomeIcon icon={faLeaf} /> Vegan:
                        </span>{' '}
                        <span className={styles.additional_value}>{containsVegan}</span>
                    </p>
                    <p className={styles.additional_informations}>
                        <span className={styles.additional_key}>
                            <FontAwesomeIcon icon={faEgg} /> Vegetarian:
                        </span>{' '}
                        <span className={styles.additional_value}>{containsVegetarian}</span>
                    </p>
                    <p className={styles.additional_informations}>
                        <span className={styles.additional_key}>
                            <FontAwesomeIcon icon={faNotesMedical} /> Health score:
                        </span>{' '}
                        <span className={styles.additional_value}>
                            positive in <span className={healthScoreClass}>{recipe.healthScore}%</span>
                        </span>
                    </p>
                    <p className={styles.additional_informations}>
                        <span className={styles.additional_key}>
                            <FontAwesomeIcon icon={faBacon} /> Sustainable:
                        </span>{' '}
                        <span className={styles.additional_value}>{containsSustainable}</span>
                    </p>
                </div>
            </div>
            <div className={styles.recipe_step_by_step}>
                <p className={styles.recipe_guide_text}>Step by step</p>
                <div className={styles.recipe_guide_container}>
                    <p className={styles.recipe_guide}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis unde, consequatur distinctio
                        earum facere dicta alias eveniet soluta sunt! Dolore, placeat facere repellendus quo dicta
                        facilis eum atque fuga saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                        possimus sequi reiciendis vel quisquam inventore molestias est doloremque, esse sed eius
                        cupiditate, laudantium nam quidem! Cupiditate repellat tenetur rerum sapiente! Lorem ipsum dolor
                        sit amet consectetur, adipisicing elit. Reiciendis sit provident adipisci, possimus, repudiandae
                        excepturi natus atque quae ratione eveniet ipsa esse accusantium autem doloribus quas ad nam
                        architecto consequuntur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis unde,
                        consequatur distinctio earum facere dicta alias eveniet soluta sunt! Dolore, placeat facere
                        repellendus quo dicta facilis eum atque fuga saepe? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Aliquam possimus sequi reiciendis vel quisquam inventore molestias est
                        doloremque, esse sed eius cupiditate, laudantium nam quidem! Cupiditate repellat tenetur rerum
                        sapiente! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis sit provident
                        adipisci, possimus, repudiandae excepturi natus atque quae ratione eveniet ipsa esse accusantium
                        autem doloribus quas ad nam architecto consequuntur? Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Debitis unde, consequatur distinctio earum facere dicta alias eveniet soluta
                        sunt! Dolore, placeat facere repellendus quo dicta facilis eum atque fuga saepe? Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Aliquam possimus sequi reiciendis vel quisquam
                        inventore molestias est doloremque, esse sed eius cupiditate, laudantium nam quidem! Cupiditate
                        repellat tenetur rerum sapiente! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Reiciendis sit provident adipisci, possimus, repudiandae excepturi natus atque quae ratione
                        eveniet ipsa esse accusantium autem doloribus quas ad nam architecto consequuntur?
                    </p>
                </div>
            </div>
        </div>
    );
}
