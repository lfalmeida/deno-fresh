/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { FilmCharacter } from "../services/films.ts";

type CharacterListProps = {
  characters?: FilmCharacter[];
};

const CharacterList = ({ characters }: CharacterListProps) => {
  return (
    <div class="flex-1 max-w-md">
      <h3 class="text-3xl">Characters</h3>
      <ul class="flex flex-col space-y-3 my-3">
        {characters?.map((character) => (
          <li key={character.id}>
            <a
              href={`characters/${character.id}`}
              class={tw(
                "w-full hover:underline p-3 rounded border border-slate-400 inline-block"
              )}
            >
              {character.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
