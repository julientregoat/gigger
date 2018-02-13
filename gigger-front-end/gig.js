const Gig = (function() {
  return class Gig {
    constructor({ id, title, body, poster, tag }) {
      this.id = id;
      this.title = title;
      this.body = body;
      this.poster_id = poster.id;
      this.tag_id = tag.id;
    }

    static renderGigItem(gig){
      let newGig = document.createElement('a')
      newGig.className = "list-group-item list-group-item-action flex-column align-items-start"
      newGig.href = "#"
      newGig.innerHTML =
      `<div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${gig.title}</h5>
        <small>Date Posted</small>
      </div>
      <p class="mb-1">${gig.body}</p>
      <span class="badge badge-success">${gig.tag}</span>`
      //
      // let newGigItem =
      // `<a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
      //   <div class="d-flex w-100 justify-content-between">
      //     <h5 class="mb-1">${gig.title}</h5>
      //     <small>Date Posted</small>
      //   </div>
      //   <p class="mb-1">${gig.body}</p>
      //   <span class="badge badge-success">${gig.tag}</span>
      // </a>`
      console.log(newGig)
      return newGig
    }


    render() {
      let newGig = document.createElement('a')
      newGig.className = "list-group-item list-group-item-action flex-column align-items-start"
      newGig.href = "#"
      newGig.innerHTML =
      `<div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${this.title}</h5>
        <small>Date Posted</small>
      </div>
      <p class="mb-1">${this.body}</p>
      <span class="badge badge-success">${this.tag}</span>`
      return newGig

    }

  };
})();
