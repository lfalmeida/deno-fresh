export type FilmCharacter = {
  id: string;
  name: string;
  gender?: string;
  age?: string;
  eye_color?: string;
  hair_color?: string;
};

export type Film = {
  id: string;
  title: string;
  original_title: string;
  description: string;
  image: string;
  movie_banner: string;
  people: string[];
  characters?: FilmCharacter[];
};

const API_URL = "https://ghibliapi.herokuapp.com";

export async function getFilms(title?: string | null): Promise<Film[]> {
  const response = await fetch(`${API_URL}/films`);
  const films = await response.json();
  return films.filter((film: Film) =>
    title ? film.title.toLowerCase().includes(title.toLowerCase()) : true
  );
}

export async function getFilmById(filmId: string): Promise<Film> {
  const response = await fetch(`${API_URL}/films/${filmId}`);

  const film: Film = await response.json();

  const characters = await Promise.all(
    film.people
      .filter((url) => url !== `${API_URL}/people/`)
      .map((url) => fetch(url).then((res) => res.json()))
  );

  return { ...film, characters };
}

export async function getFilmCharacter(characterId: string) {
  const response = await fetch(`${API_URL}/people/${characterId}`);

  if (!response.ok) {
    throw response;
  }

  return response.json();
}
