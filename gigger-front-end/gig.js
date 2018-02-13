const Gig = (function() {
  return class Gig {
    constructor({ id, title, body, poster, tag, created_at}) {
      this.id = id;
      this.title = title;
      this.body = body;
      this.poster = poster.name;
      this.tag = tag.name;
      this.createdAt = created_at.slice(0, 10);
    }

    renderFull(){
      const showTitle = document.getElementById('show-gig-title')
      const showBody = document.getElementById('show-gig-body')
      const showComments = document.getElementById('show-gig-comments')
      showTitle.innerHTML = this.title
      showBody.innerHTML = this.body
    }

    render(){
      let newGig = document.createElement('a')
      newGig.className = "list-group-item list-group-item-action flex-column align-items-start"
      newGig.href = "#"
      newGig.innerHTML =
      `<div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${this.title}</h5>
        <small>${this.createdAt}</small>
      </div>
      <p class="mb-1">${this.body.slice(0,60)}</p>
      ${Tag.renderBadge(this.tag)}`
      newGig.addEventListener('click', this.renderFull.bind(this))
      return newGig
    }

  };
})();
