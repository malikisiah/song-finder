import { useState, useEffect } from "react";
import { songInfo } from "./Types";
import VideoPlayer from "./VideoPlayer";

export default function Reccomend(props: songInfo) {
  const randomMsg = [
    "You might like this banger",
    "Check out this heat",
    "You're gonna love this one!",
    "A personal favorite of mine",
    "This track is fire, give it a listen",
    "I think you'll dig this tune",
    "A great song for any occasion",
    "You won't be disappointed with this pick",
    "This one's been on repeat for me lately",
    "A hidden gem you need to hear",
    "One of my go-to songs for a good vibe",
    "This song never fails to get me pumped up",
    "An underrated track that deserves more love",
    "A real crowd-pleaser",
    "A total earworm",
    "A real head-bobber",
    "This song is fire",
    "A mood-booster",
    "An instant favorite",
    "A feel-good tune",
    "This one's a jam",
  ];

  let randomNum = Math.floor(Math.random() * randomMsg.length);

  const playSong = async () => {};

  if (props.artist != "") {
    return (
      <div className='flex justify-center'>
        <div className='card lg:card-side bg-base-100 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title'>{randomMsg[randomNum]}</h2>
            <p className='text-center pt-2'>
              {props.artist} - {props.song}
            </p>
            <div className='card-actions justify-center pt-8'>
              <label htmlFor='my-modal-3' className='btn'>
                Listen
              </label>

              {/* Put this part before </body> tag */}
              <input type='checkbox' id='my-modal-3' className='modal-toggle' />
              <div className='modal   bg-opacity-80 bg-black'>
                <div className='modal-box relative bg-neutral'>
                  <label
                    htmlFor='my-modal-3'
                    className='btn btn-sm btn-circle absolute right-2 top-2'
                  >
                    ✕
                  </label>
                  <VideoPlayer vidID={props.vidID} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
