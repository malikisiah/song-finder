import { useEffect, useState } from "react";

export default function NavBar(props: {
  updateToken: (token: string) => void;
}) {
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const REDIRECT_URI = "https://mysongfinder.netlify.app/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  let hasToken = window.location.hash.includes("access_token");

  useEffect(() => {
    if (hasToken) {
      const token = window.location.hash.split("=")[1];
      console.log(token);
      props.updateToken(token);
    }
  }, [hasToken, props]);

  return (
    <div className='navbar sticky top-0   bg-base-300 z-10'>
      <div className='navbar-start pl-8'>
        <div className='avatar'>
          <div className='w-12 mask mask-squircle'></div>
        </div>
      </div>
      <div className='navbar-center'>
        {!hasToken && (
          <a
            className='link  text-accent navbar-center'
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
              REDIRECT_URI
            )}&response_type=${RESPONSE_TYPE}`}
          >
            Sign in to Spotify
          </a>
        )}
      </div>
    </div>
  );
}
