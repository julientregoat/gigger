const Tag  = {
  renderBadge: function(tagName){
    switch(tagName){
      case "Music":
        return `<span class="badge badge-pill badge-primary">${tagName}</span>`;
      case "Photography":
        return `<span class="badge badge-pill badge-secondary">${tagName}</span>`;
      case "Food/Beverage":
        return `<span class="badge badge-pill badge-success">${tagName}</span>`;
      case "Web Design":
        return `<span class="badge badge-pill badge-danger">${tagName}</span>`;
      case "Film/Video":
        return `<span class="badge badge-pill badge-warning">${tagName}</span>`;
      case "Sales":
        return `<span class="badge badge-pill badge-info">${tagName}</span>`;
      default:
        return `<span class="badge badge-pill badge-light">${tagName}</span>`;
    }
  }
}
