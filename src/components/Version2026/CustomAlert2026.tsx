
import React, { useEffect } from 'react';
import styles from './CustomAlert2026.module.css';

interface CustomAlertProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

const CustomAlert2026: React.FC<CustomAlertProps> = ({ isOpen, onClose, message }) => {
    // Lock scroll when alert is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.alertCard} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>
                    <span className="material-symbols-outlined">close</span>
                </button>

                <div className={styles.header}>
                    <span className={styles.tag}>Aviso Oficial</span>
                    <h2 className={styles.title}>Próximamente</h2>
                </div>

                <p className={styles.message}>
                    {message}
                </p>

                <div className={styles.footer}>
                    <button className={styles.okBtn} onClick={onClose}>
                        Entendido
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomAlert2026;
