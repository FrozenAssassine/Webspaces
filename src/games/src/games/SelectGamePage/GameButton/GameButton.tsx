import styles from './GameButton.module.scss';

type GameButtonProps = {
    gameName: string,
    gameImage: string,
    route: string,
};

export default function GameButton(props: GameButtonProps){
    return (
        <a className={styles.button} href={props.route}>
            {props.gameName}
            <img src={props.gameImage} className={styles.image}></img>
        </a>
    );
}