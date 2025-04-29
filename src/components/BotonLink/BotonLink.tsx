import React from 'react';
import styles from './BotonLink.module.css';

interface BotonLinkProps {
  texto: string;
  url: string;
}

const BotonLink: React.FC<BotonLinkProps> = ({ texto, url }) => {
  return (
    <button
      className={styles.boton}
      onClick={() => window.open(url, '_blank')}
    >
      {texto}
    </button>
  );
};

export default BotonLink;
