import { useState, useEffect } from "react";
import { Selector, Header, NavBar, Reccomend, VideoPlayer } from "./assets";
import { songInfo } from "./assets/Types";

function App() {
  const [token, setToken] = useState("");
  const [songInfo, setSongInfo] = useState({ artist: "", song: "", vidID: "" });
  const updateSongInfo = (newSongInfo: songInfo): void => {
    setSongInfo(newSongInfo);
  };

  const updateToken = (newToken: string): void => {
    setToken(newToken);
  };

  return (
    <div className=' bg-base-300 min-h-screen'>
      <NavBar updateToken={updateToken} />
      <Header />
      <Selector token={token} updateSongInfo={updateSongInfo} />
      <Reccomend
        artist={songInfo.artist}
        song={songInfo.song}
        vidID={songInfo.vidID}
      />
    </div>
  );
}

export default App;
