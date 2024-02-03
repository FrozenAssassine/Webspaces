import { ReactNode } from "react";
import styles from "./BlogPage.module.scss";

type Props = {
    headline: String;
    subheadline: String;
    children: ReactNode;
};

export default function BlogPage(props: Props) {
    return (
    <div className={styles.blogPage}>
        <div className={styles.headline}>{props.headline}</div>
        <div className={styles.subheadline}>{props.subheadline}</div>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
    );
}
