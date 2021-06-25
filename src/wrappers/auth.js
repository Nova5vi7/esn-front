import Image from 'next/image';
import React from 'react';

import styles from '../styles/modules/form-container.module.scss';

const FormWrap = ({children}) => (
    <div className={styles.formContainer}>
        <div className={styles.blockLeft}>
            <div className={styles.content}>
                <div className={styles.imgWrap}>
                    <Image
                        src="/images/form-logo.png"
                        alt="Logo"
                        width={284}
                        height={284}
                    />
                </div>
                <p className={styles.logoText}>PLATFORM</p>
            </div>
        </div>
        <div className={styles.blockRight}>{children}</div>
    </div>
);

export default FormWrap;
