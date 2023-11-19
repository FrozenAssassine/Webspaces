import GameButton from "./GameButton/GameButton";
import styles from "./SelectGamePage.module.scss";

export default function SelectGamePage() {
    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.headline}>FrozenAssassine's Play Zone</div>
            </div>
            <div className={styles.gamesList}>
                <GameButton route="./tictactoe" gameImage="./assets/tictactoe.png" gameName="Tic Tac Toe" />
                {/* <GameButton route="./tictactoe" gameImage="./assets/tictactoe.png" gameName="Tic Tac Toe" /> */}
            </div>
            <a className={styles.imprint} href="./assets/imprint.txt">
                Impressum/Imprint
            </a>
        </div>
    );
}
