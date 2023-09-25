import styles from './MealList.module.css';
import {DUMMY_MEALS} from "../../../utils/constants";
import Card from "../../UI/Card";
import MealItem from "../mealItem";

const MealList = () => {
    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map((meal) =>
                        <MealItem
                            key={meal.id}
                            id={meal.id}
                            name={meal.name}
                            description={meal.description}
                            price={meal.price}/>
                    )}
                </ul>
            </Card>
        </section>
    )
}

export default MealList;