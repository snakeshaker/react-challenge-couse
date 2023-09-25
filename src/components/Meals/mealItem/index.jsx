import styles from './MealItem.module.css';
import MealItemForm from "./mealItemForm";

const MealItem = ({name, description, price, id}) => {
    const formattedPrice = `$${price.toFixed(2)}`

    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{formattedPrice}</div>
            </div>
            <div>
                <MealItemForm id={id}/>
            </div>
        </li>
    )
}

export default MealItem;