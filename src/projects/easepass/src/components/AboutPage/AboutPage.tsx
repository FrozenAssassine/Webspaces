import { Icon } from "@iconify/react";
import styles from "./AboutPage.module.scss";

export default function AboutPage() {
	return (
		<div id="aboutPage" className={styles.aboutPage}>
			<div className={`${styles.headline} textanimation`}>About</div>
			<div className={styles.githubInfo}>
				<a href="https://github.com/FrozenAssassine/easepass">
					<Icon className={styles.aboutIcon} color="white" icon="bi:github" />
				</a>
				<div className={styles.githubInfoText}>
					This project is open source on GitHub, contributions are welcome.
				</div>
			</div>
			<div>
                <img className={styles.icon} src="./assets/icon.png"/>
				<div className={styles.appname}>Ease Pass</div>
				<div className={styles.copyright}>Copyright © 2023-2024, Julius Kirsch</div>
			</div>
			<div className={styles.imprint}>
				<a href="./assets/imprint.txt">Impressum/imprint</a>
			</div>
		</div>
	);
}
