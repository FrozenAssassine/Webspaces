import React from "react";
import styles from "../styles/ProjectItem.module.scss";
import { Icon } from "@iconify/react";

type Props = {
    headline: string;
    imageURL: string;
    content: string;
    buttons: { text: string; url: string, icon: string }[];
    tags: string[];
};

function ProjectItem({ headline, imageURL, content, buttons, tags }: Props) {
    return (
        <div className={styles.projectitem}>
            <div className={styles.title}>{headline}</div>
            <div className={styles.tags}>
                {tags.map((value, index) => {
                    return <div className={styles.tag}>{value}</div>;
                })}
            </div>
            <img src={imageURL} className={styles.image} />
            <div className={styles.content}>{content}</div>
            <div className={styles.buttons}>
                {buttons.map((value, index) => {
                    return (
                        <a href={value.url} className={styles.button}>
                            <div>{value.text}</div>
                            <Icon className={styles.icon} icon={value.icon} color="white"/>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectItem;
