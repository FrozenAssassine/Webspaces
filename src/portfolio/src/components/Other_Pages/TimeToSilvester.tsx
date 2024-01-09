import styles from "../../styles/Other_Pages/TimeToSilvester.module.scss";
import { useState, useEffect } from "react";

export default function TimeToSilvester() {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {

        const intervalId = setInterval(() => {
            const currentDate = new Date();
        const targetDate = new Date(currentDate.getFullYear(), 11, 31, 23, 59, 59);
        const timeDifference = targetDate.getTime() - currentDate.getTime();

        const seconds = Math.floor(timeDifference / 1000) % 60;
        const minutes = Math.floor(timeDifference / 1000 / 60) % 60;
        const hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        setTimeLeft(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

    }, 10000);
        return () => clearInterval(intervalId);

    }, []);

    return (
        <div className={styles.timeToSilvester}>
            <div className={styles.timeHead}>Time until Silvester:</div>
            <div className={styles.timeDisplay}>{timeLeft}</div>
        </div>
    );
}
