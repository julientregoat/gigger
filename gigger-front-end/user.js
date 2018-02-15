const User = (function() {
  return class User {
    constructor({ id, username, email }) {
      this.id = id;
      this.username = username;
      this.email = email;
    }

    renderFoundUser() {
      let renderUser = document.createElement("div");
      renderUser.innerHTML = `
    <div id="welcome-page" class="container-fluid">
      <div id="welcome-page-div" class="list-group col-10">
        <div id="show-account-content" class="alert alert-success">
        <div class="row justify-content-between">
          <h4 class="col-4" id="account-name">Welcome ${this.username}</h4>
        </div>
      </div>
    </div>
    </div>
      `;
      return renderUser;
    }

    renderAccount() {
      let div = document.createElement("div");
      let name = document.createElement("p");
      let email = document.createElement("p");
      name.innerText = "Username:  " + this.username;
      email.innerText = "Email:  " + this.email;
      div.append(name);
      div.append(email);
      return div;
    }

    editAccountPage() {
      let container = document.getElementById("user-info");
      container.innerHTML = "";
      container.innerHTML = `
      <form id='sign-up-form'>
        <div class='form-group'>
          <label for='username-input-signup'>Username</label>
          <input type='text' class='form-control' id='username-input' placeholder='Edit Username' value="${this.username}">
        </div>
        <div class='form-group'>
          <label for='email-input'>Email</label>
          <input type='text' class='form-control' id='email-input' placeholder='Edit Email' value="${this.email}">
        </div>
        <button type='submit' id="edit-btn" class='btn btn-success'>Edit Account Info</button>
        <br><br>
        <button type='button' id="delete-btn" class='btn btn'>Delete Account</button
      </form>
    `
      let editBTN = document.getElementById('edit-btn')
      let deleteBTN = document.getElementById('delete-btn')
      editBTN.addEventListener('click', current_user.editUser.bind(current_user))

      return container
    }

    editUser(event){
      event.preventDefault()
      console.log("in the edit user account", this);
      let username = document.getElementById('username-input').value
      let email = document.getElementById('email-input').value
      UserApi.fetchEditAccount(username, email)

    }

  };
})();
