import React from "react";
import styles from "./Layout.module.css";

export const Layout = ({
   id,
   title = 'title',
   urlBg,
   colorBg,
   children
}) => {
    return (
        <section
            className={styles.root}
            id={id}
            style={{
            backgroundColor: colorBg ?? '',
            backgroundImage: `url(${urlBg})` ?? '',
        }}>
            <div className={styles.wrapper}>
                <article>
                    <div className={styles.title}>
                        <h3>{title}</h3>
                        <span className={styles.separator}></span>
                    </div>
                    <div className={`${styles.desc} ${styles.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    )
}