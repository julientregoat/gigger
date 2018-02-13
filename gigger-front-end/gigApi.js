const GigApi = (function() {
  return class GigApi {
    static getTags(){
      fetch("http://localhost:3000/tags").then(res => res.json()).then(json => console.log(json))
    }

    static getGigs() {
      fetch("http://localhost:3000/gigs").then(res => res.json()).then(json => console.log(json))
    }
  };
})();
