import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Snake.module.scss';

const GRID_SIZE = 20;
const INITIAL_SPEED = 20;

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

interface SnakeGameProps {
  gridSize: number;
  initialSpeed: number;
}

const Snake: React.FC<SnakeGameProps> = ({ gridSize, initialSpeed }) => {
  const [snake, setSnake] = useState<number[][]>([[5, 5]]);
  const [food, setFood] = useState<number[]>(generateRandomPosition());
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [speed, setSpeed] = useState<number>(initialSpeed);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp':
        setDirection('UP');
        break;
      case 'ArrowDown':
        setDirection('DOWN');
        break;
      case 'ArrowLeft':
        setDirection('LEFT');
        break;
      case 'ArrowRight':
        setDirection('RIGHT');
        break;
      default:
        break;
    }
  }, []);

  const updateGame = useCallback(() => {
    if (!isGameOver) {
      const newSnake = [...snake];
      const head = [...newSnake[0]];

      switch (direction) {
        case 'UP':
          head[1] = (head[1] - 1 + gridSize) % gridSize;
          break;
        case 'DOWN':
          head[1] = (head[1] + 1) % gridSize;
          break;
        case 'LEFT':
          head[0] = (head[0] - 1 + gridSize) % gridSize;
          break;
        case 'RIGHT':
          head[0] = (head[0] + 1) % gridSize;
          break;
        default:
          break;
      }

      newSnake.unshift(head);

      if (head[0] === food[0] && head[1] === food[1]) {
        setFood(generateRandomPosition());
        setSpeed((prevSpeed) => Math.max(prevSpeed - 5, 50)); // Increase speed
      } else {
        newSnake.pop();
      }

      if (checkCollision(newSnake)) {
        setIsGameOver(true);
      } else {
        setSnake(newSnake);
      }
    }
  }, [snake, direction, food, gridSize, isGameOver]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  useEffect(() => {
    const gameInterval = setInterval(updateGame, speed);

    return () => {
      clearInterval(gameInterval);
    };
  }, [updateGame, speed]);

  const resetGame = () => {
    setSnake([[5, 5]]);
    setFood(generateRandomPosition());
    setDirection('RIGHT');
    setSpeed(initialSpeed);
    setIsGameOver(false);
  };

  return (
    <div>
      <h1>{isGameOver ? 'Game Over!' : 'Snake Game'}</h1>
      <div>
        <p>Score: {snake.length - 1}</p>
        <button onClick={resetGame}>Restart</button>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 20px)`,
        }}
      >
        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
          const x = index % gridSize;
          const y = Math.floor(index / gridSize);
          const isSnake = snake.some((segment) => segment[0] === x && segment[1] === y);
          const isFood = food[0] === x && food[1] === y;

          return (
            <div className={styles.griditem}
              key={index}
              style={{
                backgroundColor: isSnake ? 'var(--accent1)' : isFood ? 'var(--accent2)' : 'var(--background)',
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

const generateRandomPosition = (): number[] => {
  const x = Math.floor(Math.random() * GRID_SIZE);
  const y = Math.floor(Math.random() * GRID_SIZE);
  return [x, y];
};

const checkCollision = (snake: number[][]): boolean => {
  const head = snake[0];
  const body = snake.slice(1);

  return body.some((segment) => segment[0] === head[0] && segment[1] === head[1]);
};

export default Snake;