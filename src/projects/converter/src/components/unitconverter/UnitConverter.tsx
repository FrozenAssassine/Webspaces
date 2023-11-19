import ComboBox from './Combobox/Combobox';
import styles from './UnitConverter.module.scss';
import Select from 'react-select'

interface UnitConfig {
    [category: string]: {
      [unit: string]: number;
    };
  }
  
  const unitConfig: UnitConfig = {
    length: {
      meter: 1,
      kilometer: 1000,
      mile: 1609.34,
      // Add more units as needed
    },
    weight: {
      gram: 1,
      kilogram: 1000,
      pound: 453.592,
      // Add more units as needed
    },
    // Add more categories as needed
  };

// Function to perform unit conversion
function convertUnit(value: number, fromUnit: string, toUnit: string, category: string): number {
    if (!unitConfig[category] || !unitConfig[category][fromUnit] || !unitConfig[category][toUnit]) {
      throw new Error("Invalid units or category");
    }
  
    const conversionFactor: number = unitConfig[category][fromUnit] / unitConfig[category][toUnit];
    return value * conversionFactor;
  }

export default function UnitConverter(){
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]      

    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebyside}>
                <div className={styles.topbottom}>
                    <input type='number' className={styles.valueinput}/>
                    <ComboBox />
                </div>
                <div className={styles.equals}>=</div>
                <div className={styles.topbottom}>
                    <input type='number' className={styles.valueinput}/>
                    <Select className={styles.selectbox} options={options} />
                </div>
            </div>
        </div>
    );
}