import { API_URL } from "../contants";
import styles from '../../styles/movie-credits.module.css'

export async function getMovie(id:string) {
		const response = await fetch(`${API_URL}/${id}/credits`);
	return response.json();
}

export default async function MovieCredits({id}: {id:string}) {
	const credits = await getMovie(id);
	return (
		<div className={styles.container}>
			{credits.map((credit)=>{
				return(
					<div key={credit.id} className={styles.inner_wrap}>
						<img src={credit.profile_path} alt={credit.name} />
						<p>{credit.name}</p>
					</div>
				)
			})}
			
		</div>
	)
}
