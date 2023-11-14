import React, { useState } from "react";
import styles from "./TicTacToe.module.scss";
import { Icon } from '@iconify/react';

type SquareValue = "X" | "O" | null;

interface BoardProps {
    squares: SquareValue[];
    onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
    return (
        <div className={styles.gamecolumn}>
            {Array(3)
                .fill(null)
                .map((_, row) => (
                    <div className={styles.gamerow} key={row}>
                        {Array(3)
                            .fill(null)
                            .map((_, col) => (
                                <div className={styles.gamebutton} onClick={() => onClick(row * 3 + col)}>
                                    {squares[row * 3 + col]}
                                </div>
                            ))}
                    </div>
                ))}
        </div>
    );
};

const calculateWinner = (squares: SquareValue[]): SquareValue | null => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

const TicTacToe: React.FC = () => {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [stepNumber, setStepNumber] = useState(0);
    const xIsNext = stepNumber % 2 === 0;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const restart = () => {
      setHistory([{ squares: Array(9).fill(null) }]);
      setStepNumber(0);

    };    

    const handleClick = (i: number) => {
        const newHistory = history.slice(0, stepNumber + 1);
        const currentSquares = [...current.squares];

        if (winner || currentSquares[i]) {
            return;
        }

        currentSquares[i] = xIsNext ? "X" : "O";
        setHistory([...newHistory, { squares: currentSquares }]);
        setStepNumber(newHistory.length);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.infobar}>
              {(!winner && stepNumber < 9) && (<div className={styles.infolabel}>{`Next player: ${xIsNext ? "X" : "O"}`}</div>)}
              {winner && (<div className={styles.infolabel}>{`Winner: ${xIsNext ? "X" : "O"}`}</div>)}
              {(!winner && stepNumber == 9) && (<div className={styles.infolabel}>{`No one wins`}</div>)}
              {(winner || stepNumber <= 9) && (<div onClick={restart} className={styles.resetbutton}><Icon color="white" icon="material-symbols:restart-alt-rounded" /></div>)}
            </div>
            <div className={styles.headline}>Tic Tac Toe</div>
            <div className={styles.gameboard}>
                <Board squares={current.squares} onClick={handleClick} />
            </div>
        </div>
    );
};

export default TicTacToe;
