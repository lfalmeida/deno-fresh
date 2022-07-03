/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Film } from "../services/films.ts";

type FilmBannerProps = {
  film: Film;
};

const FilmBanner = ({ film }: FilmBannerProps) => {
  return (
    <div>
      <div class={tw`w-full h-96 overflow-hidden relative`}>
        <div
          class={tw`w-full h-full flex flex-col absolute justify-between items-start`}
        >
          <a href="/" class={tw`text-white p-5 text-2xl hover:underline`}>
            Go Back
          </a>
          <div class={tw`bg-slate-700/60 p-5`}>
            <div class={tw`text-6xl font-bold text-white`}>{film.title}</div>
          </div>
        </div>
        <img
          src={film.movie_banner}
          class={tw`w-full h-auto`}
          style={{ marginTop: "-100px" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default FilmBanner;
