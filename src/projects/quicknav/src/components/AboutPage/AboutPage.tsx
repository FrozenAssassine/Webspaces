import { Icon } from "@iconify/react";
import styles from "./AboutPage.module.scss";

export default function AboutPage() {
	return (
		<div id="aboutPage" className={styles.aboutPage}>
			<div className={`${styles.headline} textanimation`}>About</div>
			<div className={styles.githubInfo}>
				<a href="https://github.com/FrozenAssassine/quicknav">
					<Icon className={styles.aboutIcon} color="white" icon="bi:github" />
				</a>
				<div className={styles.githubInfoText}>
					This project is open source on GitHub, contributions are welcome.
				</div>
			</div>
			<div>
                <img className={styles.icon} src="./assets/icon.svg"/>
				<div className={styles.appname}>QuickNav</div>
				<div className={styles.copyright}>Copyright © 2024, <a className={styles.link} href="https://frozenassassine.de">Julius Kirsch</a>{'; '}<a className={styles.link} href="https://finnfreitag.com">Finn Freitag</a></div>
			</div>
			<div className={styles.imprint}>
				<a href="./assets/imprint.txt">Impressum/imprint</a>
			</div>
		</div>
	);
}
