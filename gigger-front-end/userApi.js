const UserApi = (function() {
  return class UserApi {
    static checkUser(username) {
      return fetch("http://localhost:3000/check_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username
        })
      }).then(res => res.json());
    }

    static fetchUser(user_id) {
      return fetch(`http://localhost:3000/users/${user_id}`).then(res =>
        res.json()
      );
    }

    static makeUser(username, email) {
      return fetch(`http://localhost:3000/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          email: email
        })
      }).then(res => res.json())
      // then(json => console.log(json))
    }

    static fetchEditAccount(username, email){
      // console.log("in the edit fetch", this)
      // console.log(current_user);
      // this is the userAPI class
      return fetch(`http://localhost:3000/users/${current_user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          email: email
        })
      }).then(res => res.json())
    }

    static fetchDeleteAccount(){
      event.preventDefault()

    }
  };
})();
