import styles from './MealItemForm.module.css'
import Input from "../../../UI/Input";

const MealItemForm = ({id}) => {
    const inputObject = {
        id,
        type: 'number',
        min: '1',
        step: '1',
        defaultValue: '1'
    }

    return (
        <form className={styles.form}>
            <Input label="Amount" input={inputObject}/>
            <button>Add</button>
        </form>
    )
}

export default MealItemForm;