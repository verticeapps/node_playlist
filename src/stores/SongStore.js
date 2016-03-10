import { EventEmitter } from "events";

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
}

const songStore = new SongStore();
export default songStore;
