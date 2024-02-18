import FeatureItem from '../FeatureItem/FeatureItem';
import styles from './FeaturesPage.module.scss';

export default function FeaturesPage() {
    return (
        <div className={styles.featurespage}>
            <div className={`${styles.headline} textanimation`}>Features</div>
            <div className={styles.featureItems}>
            <FeatureItem headline='Security' content='Passwords are exclusively encrypted using your master password.'/>
<FeatureItem headline='Offline Access' content='Access your passwords even when you are offline.'/>
<FeatureItem headline='Backup' content='Create encrypted backups of stored passwords.'/>
<FeatureItem headline='2FA Token Generation' content='Generate two-factor authentication tokens for added security.'/>
<FeatureItem headline='Search Functionality' content='Quickly search for your passwords in the list.'/>
<FeatureItem headline='Simplicity' content='Enjoy a straightforward and user-friendly interface.'/>
<FeatureItem headline='Browser Password Import' content='Import your passwords directly from your browser.'/>
<FeatureItem headline='Windows Wifi Password Import' content='Import your Wi-Fi passwords from Windows.'/>
            </div>
        </div>
    );
}