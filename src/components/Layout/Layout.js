import React from "react";
import styles from "./Layout.module.css";

export const Layout = ({
   id,
   title = 'title',
   descr = 'descr',
   urlBg,
   colorBg
}) => {
    const resolveBg = () => {
        let background = 'none'
        if (urlBg) {
            background = `url(${urlBg})`;
        }
        if (colorBg) {
            background = colorBg
        }
        return background
    }

    return (
        <section style={{background: resolveBg()}} className={styles.root} id={id}>
            <div className={styles.wrapper}>
                <article>
                    <div className={styles.title}>
                        <h3>{title}</h3>
                        <span className={styles.separator}></span>
                    </div>
                    <div className={`${styles.desc} ${styles.full}`}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}