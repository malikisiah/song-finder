import { useState, useEffect, ChangeEvent } from "react";
import { songInfo } from "./Types";

type selectorProp = {
  token: string | null;
  updateSongInfo: ({}: songInfo) => void;
};

export default function Selector(props: selectorProp) {
  const [genre, setGenre] = useState<string>("");

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setGenre(event.target.value);
  };

  const API_KEY = import.meta.env.VITE_API_KEY;

  const handleClick = async () => {
    if (!props.token) {
      alert("You need to sign in first");
    } else if (genre == "") {
      alert("Please select a genre");
    } else {
      const response = await fetch(
        `https://api.spotify.com/v1/recommendations?limit=1&market=US&seed_genres=${genre}`,
        {
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      );

      const data = await response.json();
      console.log(data);

      const song = data.tracks[0].name;

      const artist = data.tracks[0].artists[0].name;

      const vidResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
          `${artist} ${song}`
        )}&type=video&key=${API_KEY}`
      );

      const vidData = await vidResponse.json();

      const ID = vidData.items[0].id.videoId;

      const songInfo = { song: song, artist: artist, vidID: ID };

      props.updateSongInfo(songInfo);
    }
  };

  return (
    <div className='flex justify-center py-10 '>
      <select
        value={genre}
        onChange={handleSelect}
        className='select w-full max-w-xs flex  mr-2 '
      >
        <option disabled value=''>
          Pick a Genre
        </option>
        <option value='r-n-b'>R&B</option>
        <option value='hip-hop'>Hip-Hop</option>
        <option value='classical'>Classical</option>
        <option value='electronic'>Electronic</option>
        <option value='reggae'>Reggae</option>
      </select>
      <button className='btn ml-4' onClick={handleClick}>
        Search
      </button>
    </div>
  );
}
