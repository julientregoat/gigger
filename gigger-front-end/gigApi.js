const GigApi = (function() {
  return class GigApi {
    static getTags(){
      fetch("http://localhost:3000/tags").then(res => res.json()).then(json => console.log(json))
    }

    static fetchGigs() {
      fetch("http://localhost:3000/gigs")
      .then(res => res.json())
      .then(json => {
        for (const gig of json){
          const newGig = new Gig({id: gig.id, title: gig.title, body: gig.body, poster_id: gig.poster.id, tag_id: gig.tag.id})
          console.log(json)
          console.log(newGig)
        }
      })
    }
  };
})();
