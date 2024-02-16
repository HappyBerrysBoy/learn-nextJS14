import { API_URL } from "../../../(home)/page";

export const metadata = {
  title: "Movie Detail",
};

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail(props) {
  console.log("MovieDetail", props);

  const [movie, videos] = await Promise.all([
    getMovie(props.params.id),
    getVideos(props.params.id),
  ]);

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>{movie.director}</p>
    </div>
  );
}
