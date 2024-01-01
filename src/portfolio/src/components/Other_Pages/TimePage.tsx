import { useEffect, useState } from "react";
import styles from "../../styles/Other_Pages/TimePage.module.scss";

export default function TimePage() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = time.toLocaleTimeString();
    const formattedDate = time.toLocaleDateString();

    return (
        <div className={styles.timepage}>
            <div className={styles.time}>{formattedTime}</div>
            <div className={styles.date}>{formattedDate}</div>
        </div>
    );
}
