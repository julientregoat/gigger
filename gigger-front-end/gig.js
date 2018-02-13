//gig

const Gig = (function() {
  return class Gig {
    constructor({ title, body, poster_id, tag_id }) {
      this.title = title;
      this.body = body;
      this.poster_id = poster_id;
      this.tag_id = tag_id;
    }

    static showAllGigs(){
      GigApi.getGigs();

    }
  };
})();
