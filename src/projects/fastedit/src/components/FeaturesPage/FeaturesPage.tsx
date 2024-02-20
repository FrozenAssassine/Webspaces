import FeatureItem from '../FeatureItem/FeatureItem';
import styles from './FeaturesPage.module.scss';

export default function FeaturesPage() {
    return (
        <div className={styles.featurespage}>
            <div className={`${styles.headline} textanimation`}>Features</div>
            <div className={styles.featureItems}>
                <FeatureItem headline='Syntax highlighting' content='Enhance your code with syntax highlighting for improved readability and clarity.'/>
                <FeatureItem headline='Tabs' content='Efficiently navigate your code or documents using tabs.'/>
                <FeatureItem headline='Designs' content='Personalize your writing experience with customizable designs.'/>
                <FeatureItem headline='Line numbers' content='Track your writing with line numbers for efficient navigation and reference.'/>
                <FeatureItem headline='Quick access' content='Maximize your productivity with the Quick Access flyout that displays all available functions and shortcuts'/>
                <FeatureItem headline='Undock tab' content='Undock tabs into separate windows for increased productivity and a tailored work environment.'/>
                <FeatureItem headline='Session snapshot' content='Continue your work where you left off.'/>
            </div>
        </div>
    );
}