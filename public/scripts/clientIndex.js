// Client facing scripts here
$(document).ready(function() {
  let items = {};
  if(localStorage.getItem('items') !== null) {
    items = JSON.parse(localStorage.getItem('items'))
  };
  const addtoCartBtn = document.getElementsByClassName('add-button')
  for (let i = 0; i < addtoCartBtn.length; i++) {
    addtoCartBtn[i].addEventListener('click', function(e) {
      let itemId = e.target.parentElement.getAttribute('id');
      let item = {
        "id": itemId,
        "image_url": e.target.parentElement.children[0].getAttribute('src'),
        "name": e.target.parentElement.children[1].children[0].textContent,
        "description": e.target.parentElement.children[1].children[1].textContent,
        "price": e.target.parentElement.children[2].textContent,
        "qty": 1
      };
      items[itemId] = item;
      localStorage.setItem('items', JSON.stringify(items));
      $('.badge').text(Object.keys(JSON.parse(localStorage.getItem('items'))).length);
    })
  }
  $('.badge').text(Object.keys(JSON.parse(localStorage.getItem('items'))).length);
})