const Gig = (function() {
  return class Gig {
    constructor({ id, title, body, poster, tag, created_at, comments}) {
      this.id = id;
      this.title = title;
      this.body = body;
      this.poster = poster.name;
      this.tag = tag.name;
      this.createdAt = created_at.slice(0, 10);
      this.comments = comments
    }

    static createGig(){
      const gigsList = document.getElementById('gigs-list-group')

      fetch('http://localhost:3000/gigs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: "New Gig Title", body: "Insert your gig details here", poster_id: current_user.id, tag_id: 13})
      }).then(res => res.json()).then(gig => {
        const newGig = new Gig(gig)
        gigsList.prepend(newGig.renderPreview())
      })
    }

    static updateGig(button){
      const gigID = button.dataset.gig_id
      const newGigTitle = document.getElementById('gig-title-input').value
      const newGigBody = document.getElementById('gig-body-input').value

      fetch(`http://localhost:3000/gigs/${gigID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({gig: {title: newGigTitle, body: newGigBody}})
      }).then(res => res.json()).then(json => {
        const gigID = json.id
        const gigTitleEl = document.getElementById('show-gig-title')
        const gigBodyEl = document.getElementById('show-gig-body')
        const gigDiv = document.getElementById('show-gig-content')
        const newCommentButton = document.getElementById('submit-new-comment')
        const editButton = document.getElementById('edit-gig-button')
        const deleteButton = document.getElementById('delete-gig-button')

        gigTitleEl.innerHTML = json.title
        gigBodyEl.innerHTML = json.body

        newCommentButton.dataset.gig_id = json.id
        editButton.dataset.gig_id = json.id
        deleteButton.dataset.gig_id = json.id

        const gigsList = document.getElementById('gigs-list-group')
        gigsList.innerHTML = ''
        GigApi.fetchYourGigs().then((gigs) => {
          gigs.forEach((gig) => {
            const newGig = new Gig(gig)
            gigsList.prepend(newGig.renderPreview())
          })
        })
      })
    }

    static editGig(gig){
      const gigID = gig.dataset.gig_id
      const gigTitleEl = document.getElementById('show-gig-title')
      const gigBodyEl = document.getElementById('show-gig-body')
      const gigDiv = document.getElementById('show-gig-content')
      const title = gigTitleEl.textContent
      const body = gigBodyEl.textContent

      gigTitleEl.innerHTML = `<textarea id="gig-title-input" class="form-control" aria-label="Enter a gig title:">${title}</textarea>`
      gigBodyEl.innerHTML = `<textarea id="gig-body-input" class="form-control" aria-label="Enter your gig content:" rows="10" cols="50">${body}</textarea>`

      const submitButton = document.createElement('div')
      submitButton.innerHTML = `<button id="submit-new-comment" data-gig_id="${gigID}"class="btn btn-outline-secondary" type="button" onclick="Gig.updateGig(this)">Edit</button>`
      gigDiv.append(submitButton)
    }

    static deleteGig(gig){
      const gigID = gig.dataset.gig_id
      fetch(`http://localhost:3000/gigs/${gigID}`, {method: 'DELETE'})
      .then(res => res.json()).then(json => {
        document.getElementById('button-group').className = "btn-group invisible"
        document.getElementById('show-gig-title').innerHTML = ''
        document.getElementById('show-gig-body').innerHTML = ''
        document.getElementById('comments-list-group').innerHTML = ''
        document.getElementById('submit-new-comment').dataset.gig_id = ''
        document.getElementById('edit-gig-button').dataset.gig_id = ''
        document.getElementById('delete-gig-button').dataset.gig_id = ''
        document.getElementById(`gig-${gigID}`).remove()
      })
    }

    static submitEdit(commentId){
      let updatedContent = document.getElementById('edit-comment-input').value
      fetch(`http://localhost:3000/comments/${commentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({content: updatedContent})
      }).then(res => res.json()).then(comment => {
        document.getElementById(`comment-${commentId}`).innerHTML = `<div class="d-flex w-100 justify-content-between">
          <h5 id="comment-content-${comment.id}" class="mb-1">${comment.content}</h5>
          <small>${comment.created_at.slice(0,10)}</small>
        </div>
        <div class="d-flex w-100 justify-content-between">
          <p class="mb-1">${comment.user.username}</p>
          ${comment.user.username === current_user.username ? `<div><button type="button" class="btn btn-warning btn-sm" data-comment_id="${comment.id}" onclick="Gig.editComment(this)">Edit</button><button type="button" class="btn btn-danger btn-sm" data-comment_id="${comment.id}" onclick="Gig.deleteComment(this)">Delete</button></div>` : ""}
        </div>`
      })
    }

    static editComment(commentElement){
      let commentID = commentElement.dataset.comment_id
      let previousContent = document.getElementById(`comment-content-${commentID}`).textContent
      document.getElementById(`comment-${commentID}`).innerHTML =
      `<textarea id="edit-comment-input" class="form-control">${previousContent}</textarea><button id="submit-comment-edit" class="btn btn-outline-secondary" type="button" onclick="Gig.submitEdit(${commentID})">Submit Edit</button>`
    }

    static deleteComment(commentElement){
      let commentID = commentElement.dataset.comment_id
      fetch(`http://localhost:3000/comments/${commentID}`, {method: 'DELETE'})
      .then(res => {
        document.getElementById(`comment-${commentID}`).remove()
        alert('Comment deleted.')})
    }

    static generateCommentHTML(comment){
      let commentHTML =
      `<a href="#" id="comment-${comment.id}"class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 id="comment-content-${comment.id}" class="mb-1">${comment.content}</h5>
          <small>${comment.created_at.slice(0,10)}</small>
        </div>
        <div class="d-flex w-100 justify-content-between">
          <p class="mb-1">${comment.user.username}</p>
          ${comment.user.username === current_user.username ? `<div><button type="button" class="btn btn-warning btn-sm" data-comment_id="${comment.id}" onclick="Gig.editComment(this)">Edit</button><button type="button" class="btn btn-danger btn-sm" data-comment_id="${comment.id}" onclick="Gig.deleteComment(this)">Delete</button></div>` : ""}
        </div>
      </a>`
      return commentHTML
    }

    renderComments(){
      let commentsHTML = ""
      for (const comment of this.comments){
        commentsHTML += Gig.generateCommentHTML(comment)
      }
      return commentsHTML
    }

    static postComment(comment){
      let commentContent = document.getElementById('new-comment-input').value
      const commentsList = document.getElementById('comments-list-group')
      fetch('http://localhost:3000/comments',{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({comment: {gig_id: comment.dataset.gig_id, user_id: current_user.id, content: commentContent}})
      })
      .then(res => res.json())
      .then(comment => {
        if (comment.message){
          alert('You must be logged in to comment.')
        } else {
          commentsList.innerHTML += Gig.generateCommentHTML(comment)
        }
      }) //append new commment pessemisticly
    }

    renderFull(){
      const showTitle = document.getElementById('show-gig-title')
      const showBody = document.getElementById('show-gig-body')
      const buttonGroup= document.getElementById('button-group')
      const commentsList = document.getElementById('comments-list-group')
      const newCommentButton = document.getElementById('submit-new-comment')
      const editButton = document.getElementById('edit-gig-button')
      const deleteButton = document.getElementById('delete-gig-button')

      buttonGroup.className = "btn-group"

      showTitle.innerHTML = this.title
      showBody.innerHTML = this.body
      commentsList.innerHTML = this.renderComments()

      newCommentButton.dataset.gig_id = this.id
      editButton.dataset.gig_id = this.id
      deleteButton.dataset.gig_id = this.id
    }

    renderPreview(){
      let newGig = document.createElement('a')
      newGig.className = "list-group-item list-group-item-action flex-column align-items-start"
      newGig.href = "#"
      newGig.id = `gig-${this.id}`
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
