function fetchBooks(){
  fetch ("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())    //render the API's response as plain old JavaScript object
  .then(json => renderBooks(json));  //the console.log() prints the JavaScript object to our console.
}

function renderBooks(books) {  
  const main = document.querySelector('main') 
    books.forEach(book => {   
    const h2 = document.createElement('h2')    
    h2.innerHTML = book.name    
    main.appendChild(h2)  
  })
}


document.addEventListener("DOMContentLoaded", function() {
  fetchBooks();
});

