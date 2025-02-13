import s from './VideoMovie.module.css'

export function VideoMovie({videos}) {
    console.log(videos);
    return (
        <div className={s.videoContainer}>
             <h4 className={s.sectionTitle}>Videos</h4>
             <div className={s.videoList}>
                 {videos.map((video) => (
                     <div key={video.id} className={s.videoItem}>
                         <h3 className={s.videoTitle}>{}</h3>
                         <div className={s.videoFrame}>
                             <iframe
                                 src={"https://www.youtube.com/embed/" + video.key}
                                 title={video.name}
                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                 allowFullScreen
                             ></iframe>
                         </div>
                     </div>
                 ))}
             </div>
        </div>
    );
}