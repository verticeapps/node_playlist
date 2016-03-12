import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import $ from "jquery/dist/jquery";


class YoutubeStore extends EventEmitter {
  constructor(){
    super();
    this.initYoutubeAPI();
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

    this.results = [
      {
        song: "Candy Shop",
        artist: "50 Cent"
      }
    ];

  }

  initYoutubeAPI () {
    // gapi.client.setApiKey("AIzaSyBa4EZMsrNvoj9eA2jzAKELV-bu5dlbLpw");
    // gapi.client.load("youtube", "v3", function() {
    //   // yt api is ready
    //   console.log("YT api is ready");
    // });
  }

  prepareYoutubeRequest(searchVal) {
    var request = gapi.client.youtube.search.list({
      part : "snippet",
      type: "video",
      q: encodeURIComponent(searchVal).replace(/%20/g, "+"),
      maxResults: 3,
      order: "viewCount",
      publishedAfter: "2015-01-01T00:00:00Z"
    });
    // execute the request
    request.execute(function(response) {
      var results = response.result;
      $.each(results.items, function(index, item) {
        console.log(item);
        // $.get("tpl/item.html", function(data) {
        //   $('#results').append(data);
        // });
        this.results.push(item);
        this.setState( { results: this.state.results });
        //$("#results").append(item.id.videoId+""+item.snippet.title+"<br>");
      });
      // console.log(response);
    });
  }

  getAll() {
    return this.results;
  }

  createSearch(song, artist) {
    this.results.push({
      song: song,
      artist: artist
    });

    this.emit("change");
  }

  handleActions(action) {
    switch(action.type){
      case "CREATE_SONG":
        this.createSearch(action.song, action.artist);

        // console.log('sup');
      break;
    }
    console.log("YoutubeStore received an action", action);
  }
}

const youtubeStore = new YoutubeStore();
dispatcher.register(youtubeStore.handleActions.bind(youtubeStore));
export default youtubeStore;
