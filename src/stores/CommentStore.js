import { EventEmitter } from "events";

class CommentStore extends EventEmitter {
  constructor(){
    super();
    this.comments = [
      {
        "comment" : "This playlist is awesome",
        "user" : "Beaniekid221"
      },
      {
        "comment" : "Who's listening in 2016?",
        "user" : "ThatOneYoutubeGuy"
      },
      {
        "comment" : "Check out my playlists guys http://lolthelinker.com",
        "user" : "Paperman__XX"
      }
    ];
  }

  getAll() {
    return this.comments;
  }
}

const commentStore = new CommentStore();
export default commentStore;
