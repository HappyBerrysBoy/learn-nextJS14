import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export const metadata = {
  title: "Movie Detail22",
};

export default async function MovieDetail(props) {
  console.log("MovieDetail", props);

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={props.params.id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={props.params.id} />
      </Suspense>
    </div>
  );
}
