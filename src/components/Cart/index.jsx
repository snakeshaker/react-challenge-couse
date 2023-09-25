import styles from './Cart.module.css'
import Modal from "../UI/Modal";

const Cart = ({items}) => {
    return (
        <Modal>
            <ul className={styles.cartItems}>
                {items.map(item =>
                    <li>{items.name}</li>
                )}
            </ul>
            <div className={styles.total}>
                <span>Result</span>
                <span>0.44</span>
            </div>
            <div className={styles.actions}>
                <button className={styles.buttonAlt}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;