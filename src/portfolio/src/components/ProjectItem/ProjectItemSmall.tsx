import React from "react";
import styles from "./ProjectItemSmall.module.scss";
import { Icon } from "@iconify/react";

type Props = {
    headline: string;
    content: string;
    buttons: { text: string; url: string, icon: string }[];
    tags: string[];
    authors?: {name: string, url: string}[];
};

function ProjectItemSmall({ headline, content, buttons, tags, authors }: Props) {
    return (
        <div className={styles.projectitem}>
            <div className={styles.title}>{headline}</div>
            {authors !== undefined && 
                <div className={styles.authors}>
                    Author{authors.length > 1 ? "s" : ""}:
                    {authors.map((value, index) => {
                        return <a key={index} href={value.url} className={styles.author}>{value.name}</a>;
                })}
                </div>
            }
            <div className={styles.tags}>
                {tags.map((value, index) => {
                    return <div key={index} className={styles.tag}>{value}</div>;
                })}
            </div>

            <div className={styles.content}>{content}</div>
            <div className={styles.buttons}>
                {buttons.map((value, index) => {
                    return (
                        <a key={index} href={value.url} className={styles.button}>
                            <div>{value.text}</div>
                            <Icon className={styles.icon} icon={value.icon} color="white"/>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectItemSmall;
