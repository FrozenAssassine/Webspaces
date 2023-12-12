import { YoutubeVideo } from "../../Modules/YoutubeVideo";
import styles from "./VideosPage.module.scss";

export default function VideosPage() {
    const videos = [new YoutubeVideo("https://www.youtube.com/watch?v=tSJ3QohvTxg", ""), new YoutubeVideo("https://www.youtube.com/watch?v=yaULneckBaA&feature=youtu.be", ""), new YoutubeVideo("https://www.youtube.com/watch?v=YnQ7j26eS3w", "./Assets/thumbnails/video_1_thumbnail.jpg")];

    return (
        <div className={styles.videosPage}>
            <div className="headline textanimation">Videos</div>
            <div className={styles.videoList}>{videos.map((video, i) => [
                <a className={styles.videoItem} href={video.videoURL}>
                    <img src={video.videoImage} className={styles.videoImage}/>
                </a>
            ])};</div>
        </div>
    );
}
