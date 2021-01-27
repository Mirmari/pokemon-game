import React from "react";
import styles from "./Header.module.css";

export const Header = ({title = 'This is title', description = 'This is Description!'}) => {
    return (
        <header className={styles.root}>
            <div className={styles.forest}></div>
            <div className={styles.container}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </header>
    )
}