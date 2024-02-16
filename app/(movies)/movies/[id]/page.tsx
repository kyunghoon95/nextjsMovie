
import MovieInfo, { getMovie } from "../../../components/movie-info";

import Tab from "../../../components/tab";
import { Suspense } from "react"

interface IParams {
	params:{id:string}
}

// export async function generateMetaData({params:{id}} : IParams) {
// 	const movie = await getMovie(id);
	
// 	return{
// 		title : movie.title,
// 	}
// }

export default async function MovieDetail({params : {id}} : IParams) {
	return (
		<div style={{padding : '0px 20px'}}>
			<Suspense fallback={<h1>Loading movie info</h1>}>
				<MovieInfo id={id}/>
			</Suspense>
			<Tab id={id}/>
		</div>
	)
}
