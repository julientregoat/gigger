//gig

const Gig = (function() {
  return class Gig {
    constructor({ id, title, body, poster_id, tag_id }) {
      this.id = id;
      this.title = title;
      this.body = body;
      this.poster_id = poster_id;
      this.tag_id = tag_id;
    }
  };
})();
