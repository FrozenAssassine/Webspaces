import FeatureItem from "../FeatureItem/FeatureItem";
import styles from "./FeaturesPage.module.scss";

export default function FeaturesPage() {
    return (
        <div className={styles.featurespage}>
            <div className={`${styles.headline} textanimation`}>Features</div>
            <div className={styles.featureItems}>
                <FeatureItem
                    headline="Live Advanced Calculator"
                    content="Perform calculations with advanced functions like sin, cos, tan, e, and pi."
                />
                <FeatureItem headline="File Search" content="Quickly search for files on your system." />
                <FeatureItem headline="Commandline Executor" content="Execute commands directly from QuickNav." />
                <FeatureItem headline="File Info" content="Get information about files on your system." />
                <FeatureItem headline="Start Apps" content="Launch applications with ease." />
                <FeatureItem headline="System Information" content="View information about your system." />
                <FeatureItem headline="Lock Screen" content="Lock your screen instantly." />
                <FeatureItem headline="Web Search" content="Search the web directly from QuickNav." />
                <FeatureItem headline="Clipboard to Plain Text" content="Convert clipboard contents to plain text." />
                <FeatureItem headline="Timer" content="Set timers for various tasks." />
                <FeatureItem headline="Word Counter" content="Count words in a text snippet." />
                <FeatureItem headline="Color Chooser" content="Select colors for your projects." />
            </div>
        </div>
    );
}
