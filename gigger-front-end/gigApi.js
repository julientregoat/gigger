const GigApi = (function() {
  return class GigApi {
    static getTags(){
      fetch("http://localhost:3000/tags").then(res => res.json()).then(json => json)
    }

    static fetchGigs() {
      return fetch("http://localhost:3000/gigs")
      .then(res => res.json())
    }

    static fetchGigsPage(page) {
      return fetch(`http://localhost:3000/gigs?page=${page}`)
      .then(res => res.json())
    }

    static fetchYourGigs() {
      return fetch(`http://localhost:3000/gigs/user/${current_user.id}`).then(res => res.json())
    }
  };
})();
