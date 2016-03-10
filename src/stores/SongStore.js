import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
class SongStore extends EventEmitter {
  constructor(){
    super();
    this.songs = [
      {
        task: 'Gold Digger',
        artist: 'Kanye West',
        isCompleted: false
      },
      {
        task: 'Bohemian Rhapsody',
        artist: 'Queen',
        isCompleted: false
      },
      {
        task: 'Weird Fishes',
        artist: 'Radiohead',
        isCompleted: false
      },
      {
        task: 'Sexy Back',
        artist: 'Justin Timberlake',
        isCompleted: false
      }
    ];
  }

  getAll() {
    return this.songs;
  }

  handleActions(action) {
    switch(action.type){
      case "CREATE_SONG":
        console.log('sup');
      break;
    }
    //console.log("SongStore received an action", action);
  }
}

const songStore = new SongStore();
dispatcher.register(songStore.handleActions.bind(songStore));
//window.dispatcher = dispatcher;
export default songStore;
