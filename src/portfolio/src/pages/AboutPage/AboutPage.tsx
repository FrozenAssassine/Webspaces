import React from "react";
import styles from "./AboutPage.module.scss";
import AboutItem from "../../components/AboutItem/AboutItem";
import FriendItem from "../../components/FriendItem/FriendItem";

function AboutPage() {
    return (
        <div className={styles.aboutpage}>
            <div className={styles.abouttext}>
            I am Julius, also known as FrozenAssassine. I started programming at 11 and currently live in Germany. My favorite IDE is VSCode, and I love coding in C#. React is my go-to framework. I'm passionate about building user-friendly apps and aspire to be a software engineer, AI engineer, or game designer.
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
                    description="We love doing things together, whether it's working with Arduino, flying drones, programming, exploring electronics, or photography -pretty much everything!"
                    name="Sna8xs"
                    url="https://github.com/sna8xs"
                ></FriendItem>
                <FriendItem
                    description="I taught him programming, and now he builds funny games. 🍣😺"
                    name="Sushicat"
                    url="https://github.com/nathans-sushicat"
                    projects={[{description: "A funny game made in Java", name: "Java-Game", url: "https://github.com/Nathans-SushiCat/Java-Game"}]}
                
                ></FriendItem>
                <FriendItem
                    description="He taught me React and some Rust, a very kind person. Together we build some helpful projects to make school simpler."
                    name="Phill"
                    url="https://github.com/phill030"
                    projects={[{description: "Minecraft Server Protocol implementation in Rust", name: "Enderforge", url: "https://github.com/Phill030/enderforge"}]}
                
                ></FriendItem>
            </div>
        </div>
    );
}

export default AboutPage;
