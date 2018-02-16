const tagAPI = function(){
  return class tagAPI{

    static fetchTags(){
      return fetch('http://localhost:3000/tags')
      .then(res => res.json()).then(json => json)
    }
  }
}()
