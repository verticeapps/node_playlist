import dispatcher from "../dispatcher";

export function createSearch (songName, songArtist) {
  dispatcher.dispatch({
    type: "CREATE_SONG",
    song: songName,
    artist: songArtist
  });

}
