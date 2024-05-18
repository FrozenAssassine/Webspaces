import React from "react";
import styles from "./AboutPage.module.scss";
import AboutItem from "../../components/AboutItem/AboutItem";
import FriendItem from "../../components/FriendItem/FriendItem";

function AboutPage() {
    return (
        <div className={styles.aboutpage}>
            <div className={styles.aboutitems}>
                <AboutItem headline="Aka" text="FrozenAssassine" />
                <AboutItem headline="Residence" text="Germany" />
                <AboutItem headline="Best IDE" text="VSCode" />
                <AboutItem headline="Best Language" text="C#" />
                <AboutItem headline="Best Framework" text="React" />
            </div>
            <div className={styles.friendsheadline}>Friends</div>
            <div className={styles.friendslist}>
                <FriendItem
                    description="We have already done some awesome projects like Ease Pass and QuickNav together. Check him out; he does some awesome stuff."
                    name="Finn Freitag"
                    url="https://finnfreitag.com"
                    projects={[{description: "A very advanced calculator", name: "Calculator", url: "https://finnfreitag.com/tools/calculator"}]}
                ></FriendItem>
                <FriendItem
                    description="Most of the time we build funny stuff with Arduino or ESP together"
                    name="Sna8xs"
                    url="https://github.com/sna8xs"
                ></FriendItem>
                <FriendItem
                    description="I taught him programming, and now he builds funny games. 🍣😺"
                    name="Sushicat"
                    url="https://github.com/nathans-sushicat"
                    projects={[{description: "A funny game made in Java", name: "Java-Game", url: "https://github.com/Nathans-SushiCat/Java-Game"}]}
                
                ></FriendItem>
            </div>
        </div>
    );
}

export default AboutPage;
