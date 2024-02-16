import { API_URL } from "../contants";
import styles from '../../styles/movie-videos.module.css'
async function getVideos(id:string) {
	// console.log(`Fetching videos : ${Date.now()}`);
	// await new Promise((resolve) => setTimeout(resolve, 3000));
	
	const response = await fetch(`${API_URL}/${id}/videos`);
	return response.json();
	// throw new Error('something broke...');
}

export default async function MovieVideos({id}: {id:string}) {
	const videos = await getVideos(id);
	return (
		<div className={styles.container}>
			{videos.map(video => {
				return(
					<iframe key={video.id} src={`https://www.youtube.com/embed/${video.key}`} title={video.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen/>
				)
			})}
		</div>
	)
}
