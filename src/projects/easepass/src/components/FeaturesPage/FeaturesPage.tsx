import FeatureItem from '../FeatureItem/FeatureItem';
import styles from './FeaturesPage.module.scss';

export default function FeaturesPage() {
    return (
        <div className={styles.featurespage}>
            <div className={styles.headline}>Features</div>
            <div className={styles.featureItems}>
                <FeatureItem headline='Security' content='Passwords are exclusively encrypted using your master password.'/>
                <FeatureItem headline='Offline' content='Access your passwords even when your are offline'/>
                <FeatureItem headline='Backup' content='Create Encrypted Backups of Stored Passwords'/>
                <FeatureItem headline='Search' content='Search for your passwords in the list of passwords'/>
                <FeatureItem headline='Simplicity' content='Enjoy a straightforward and user-friendly interface.'/>
            </div>
        </div>
    );
}