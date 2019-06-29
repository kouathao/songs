import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "When I Was Your Man", duration: "4:05" },
    { title: "Just The Way You Are", duration: "2:30" },
    { title: "Grenade", duration: "3:15" },
    { title: "The Lazy Song", duration: "1:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

// Doing export default allows any other files can get access to combineReducers
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
