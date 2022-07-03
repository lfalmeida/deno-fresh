/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getFilms } from "../services/films.ts";
import type { Film } from "../services/films.ts";

export const handler: Handlers<Film[] | null> = {
  async GET(_, ctx) {
    const films = await getFilms();
    return ctx.render(films);
  },
};

export default function Home({ data }: PageProps<Film[] | null>) {
  return (
    <div class={tw`p-16 font-sans`}>
      <h1 class={tw`text-5xl font-bold text-center mb-4`}>Studio Ghibli</h1>
      <div class={tw`grid grid-cols-4 gap-4`}>
        {data &&
          data.map((film) => (
            <a
              href={`/film/${film.id}`}
              title={film.title}
              key={film.id}
              className={tw`hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer`}
            >
              <div>{film.title}</div>
              <img src={film.image} alt={film.title} />
            </a>
          ))}
      </div>
    </div>
  );
}
