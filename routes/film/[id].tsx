/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps, Handlers } from "$fresh/server.ts";
import { Film, getFilmById } from "../../services/films.ts";
import invariant from "https://esm.sh/invariant@2.2.0";
import FilmBanner from "../../components/FilmBanner.tsx";
import CharacterList from "../../components/CharacterList.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    invariant(ctx.params.id, "Film id is required");
    const film = await getFilmById(ctx.params.id);
    return ctx.render(film);
  },
};

export default function FilmPage({ data }: PageProps<Film | null>) {
  const { description, characters } = data || {};
  return (
    <div>
      {data && <FilmBanner film={data} />}
      <div class={tw`p-10`}>
        {description}
        <div class={tw`flex py-5 space-x-5`}>
          <CharacterList characters={characters} />
        </div>
      </div>
    </div>
  );
}
