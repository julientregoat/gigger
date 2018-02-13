//gig
const GIGS = []

const Gig = (function() {
  return class Gig {
    constructor({ id, title, body, poster, tag }) {
      this.id = id;
      this.title = title;
      this.body = body;
      this.poster_id = poster.id;
      this.tag_id = tag.id;
      GIGS.push(this)
    }

    static renderGigItem(gig){
      let newGigItem =
      `<a href="$" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${gig.title}</h5>
          <small>Date Posted</small>
        </div>
        <p class="mb-1">${gig.body}</p>
        <span class="badge badge-success">${gig.tag}</span>
      </a>`
      console.log(newGigItem)
      return newGigItem
    }

    static renderAllGigs(){
      document.getElementById('gigs-list-group').innerHTML = " "
      GIGS.forEach(gig => {document.getElementById('gigs-list-group').innerHTML += Gig.renderGigItem(gig)})
    }

  };
})();
