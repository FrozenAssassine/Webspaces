import React, { useState } from 'react';
import styles from './Combobox.module.scss';

type ComboboxProps = {
    className?: string;
}

const ComboBox: React.FC<ComboboxProps> = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options: string[] = ['Option 1', 'Option 2', 'Option 3'];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ background: 'black', color: 'white', padding: '10px' }}>
      <select
        id="comboBox"
        value={selectedOption || ''}
        onChange={handleChange}
        style={{ background: 'black', color: 'white', padding: '5px' }}
      >
        {options.map((option, index) => (
          <option className={styles.option} key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ComboBox;
