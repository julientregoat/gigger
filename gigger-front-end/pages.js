let STARTPAGE = `
<div id="start-page" class="container">
<span id="alert"></span>
<div class='row'>
  <div id='login' class='col-5'>
    <label for='login-form' class='label-header' id='login-header'>Log In</label>
    <form id='login-form'>
      <div class='form-group'>
        <label for='username-input-login'>Username</label>
        <input type='text' class='form-control' id='username-input-login' placeholder='Enter username'>
      </div>
      <button type='submit' id='login-btn' class='btn btn-danger'>Log In</button>
    </form>
  </div>
  <div id='or' class='col-1'>
    or
  </div>
  <div id='sign-up' class='col-5'>
    <label for='sign-up-form' class='label-header' id='sign-up-header'>Sign Up</label>
    <form id='sign-up-form'>
      <div class='form-group'>
        <label for='username-input-signup'>Username</label>
        <input type='text' class='form-control' id='username-input-signup' placeholder='Enter desired username'>
      </div>
      <div class='form-group'>
        <label for='email-input'>Email</label>
        <input type='text' class='form-control' id='email-input' placeholder='Enter email'>
      </div>
      <button type='submit' class='btn btn-danger'>Sign Up</button>
    </form>
  </div>
</div>
</div>`

let VIEWGIGSPAGE = `
<div id="all-gigs-page" class="container-fluid">
  <form class="form-inline" id="gigs-search">
    <input class="form-control mr-sm-2" type="search" placeholder="Enter keywords" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search Gigs</button>
  </form>

  <div class="collapse" id="toggleComments">

    <div class="new-comment row justify-content-center">
      <div class="input-group input-group-sm col-6">
        <div class="input-group-prepend">
          <span class="input-group-text">Enter a new comment:</span>
        </div>
        <textarea id="new-comment-input" class="form-control" aria-label="Enter a new comment:"></textarea>
        <div class="input-group-append">
          <button id="submit-new-comment" class="btn btn-outline-secondary" type="button" onclick="Gig.postComment(this)">Submit</button>
        </div>
      </div>
    </div>

      <div id="comments-top">
        Comments
        <a class="close" data-toggle="collapse" href="#toggleComments" role="button" aria-expanded="false" aria-controls="collapseExample">
        <span aria-hidden="true">&times;</span>
        </a>
      </div>

      <div id="comments-list-group" class="list-group">
      </div>
  </div>

  <div class="row">
    <div id="gigs-list" class="col-6">
      <div id="gigs-list-group" class="list-group">

      </div>
    </div>

    <div id="show-gig" class="list-group col-6">
      <div id="show-gig-content" class="list-group-item">
        <div class="row justify-content-between">
          <h4 class="col-4" id="show-gig-title">Hi!</h4>
          <a id="show-gig-comments" class="btn btn-danger col-3" data-toggle="collapse" href="#toggleComments" role="button" aria-expanded="false" aria-controls="collapseExample">
            View Comments
          </a>
        </div>
        <p id="show-gig-body">Select a gig to view it.</p>
      </div>
    </div>
  </div>
</div>`

///////////////////////////////////////////////////////////////////////////////

let YOURGIGSPAGE = `
<div id="your-gigs-page" class="container-fluid">
 <div id="add-gig-btn-div">
    <button class="btn btn-outline-success my-2 my-sm-0" id="add-gig-btn" type="submit">Add A Gig</button>
  </div>

  <div class="collapse" id="toggleComments">
    <div id="comments-top">
      Comments for Gig Title
      <a class="close" data-toggle="collapse" href="#toggleComments" role="button" aria-expanded="false" aria-controls="collapseExample">
      <span aria-hidden="true">&times;</span>
      </a>
    </div>

    <div id="comments-list-group" class="list-group">

      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Comment</h5>
          <small>Date Posted</small>
        </div>
        <p class="mb-1">Commenter</p>
      </a>

    </div>
  </div>

  <div class="row">
    <div id="gigs-list" class="col-6">
      <div id="gigs-list-group" class="list-group">

        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Gig Name</h5>
            <small>Date Posted</small>
          </div>
          <p class="mb-1">Content preview</p>
          <span class="badge badge-success">Tag</span>
        </a>
      </div>
    </div>
    <div id="show-gig" class="list-group col-6">
      <div id="show-gig-content" class="list-group-item">
        <div class="row justify-content-between">
          <h1 class="col-4">Gig Title</h1>
          <a id="view-comments" class="btn btn-danger col-3" data-toggle="collapse" href="#toggleComments" role="button" aria-expanded="false" aria-controls="collapseExample">
            View Comments
          </a>
        </div>
        <p>Gig Info</p>
      </div>
    </div>
  </div>
</div>`

// <a id="edit-account" class="btn btn-outline-success my-2 my-sm-0" href="#editAccount" role="button">
//   Edit Account
// </a>

let ACCOUNTPAGE = `
<div id="account-page" class="container-fluid">

<div id="edit-account-btn-div">
   <button class="btn btn-outline-success my-2 my-sm-0" id="edit-account-btn" type="submit">Edit Profile</button>
 </div>

  <div id="account-page-div" class="list-group col-10">
    <div id="show-account-content" class="list-group-item">
    <div class="row justify-content-between">
      <h4 class="col-4" id="account-name">Your Account Page</h1>
    </div>
      <div id="user-info">
        <br>
      </div>
  </div>
</div>
</div>`

////////////////////////////////////////////////////////////////
