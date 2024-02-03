import styles from './BlogImage.module.scss';

type Props = {
    src: string,

}

export default function BlogImage(props: Props){
    return (
        <img className={styles.blogImage} src={props.src}/>
    );
}