import styles from './Modal.module.css'
import * as ReactDOM from "react-dom";

const Backdrop = () => {
    return (
        <div className={styles.backdrop}/>
    )
}

const ModalWindow = ({children}) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = ({children}) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop/>,portalElement)}
            {ReactDOM.createPortal(<ModalWindow>{children}</ModalWindow>,portalElement)}
        </>
    )
}

export default Modal;