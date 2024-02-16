import { API_URL } from "../contants";
import styles from '../../styles/movie-similar.module.css'

export async function getSimilar(id:string) {
	// console.log(`Fetching movies : ${Date.now()}`);
	// await new Promise((resolve) => setTimeout(resolve, 4000));
	
	const response = await fetch(`${API_URL}/${id}/similar`);
	return response.json();
}

export default async function MovieSimilar({id}: {id:string}) {
	const similar = await getSimilar(id);
	console.log(similar)
	return (
		<div className={styles.container}>
			{similar.map(similar => {
				return(
					<div key={similar.id} className={styles.inner_container}>
						<img src={similar.poster_path} alt={similar.title} />
						<p>{similar.title}</p>
					</div>
				)
			})}
		</div>
	)
}
