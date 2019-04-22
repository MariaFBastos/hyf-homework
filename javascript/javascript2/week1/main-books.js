
/* Make a function (or functions) that generates a ul with li elements for each book title in the array using a for loop. And inserts this ul to the dom. You should now be able to see the book titles rendered on your html page!*/

/* const ul = document.getElementById('bookList');

function loadBookTitle(){
    for(let i = 0; i < myBooks.length; i++){
        const li = document.createElement('li');
            li.innerHTML = myBooks[i];
            ul.appendChild(li);
    }
}
loadBookTitle(); */

//function to display the actual information about the book from the object

const section = document.createElement('section');
      section.setAttribute('id','books');

function loadBookInfo(){
    for(let i = 0; i < booksInfos.length; i++){
        let imageURL = '';
        //getting the cover link which is in another array key-value
        let  objectKeys = Object.keys(booksCovers);
        debugger
        for(let x = 0; x < objectKeys.length; x++){
            let key   = objectKeys[x];
            let value = booksCovers[key];
            
            if (key === booksInfos[i].id){
                imageURL = value;
                
            }
            
        }
        // putting the information in the correct HTML tag
        const article = document.createElement('article');

        const h1 = document.createElement('h1');
              h1.innerHTML = booksInfos[i].title;
        article.appendChild(h1);

        const p1 = document.createElement ('p');
              p1.innerHTML = booksInfos[i].author;
        article.appendChild(p1);

        const p2 = document.createElement('p');
              p2.innerHTML = booksInfos[i].language;
        article.appendChild(p2);

        const image = document.createElement('img');
              image.src = imageURL;
              image.style.width = '120px';
              image.style.height = 'auto';
        article.appendChild(image);

        section.appendChild(article);
    }
    const div = document.getElementById('loadInfo');
    div.appendChild(section);
}
loadBookInfo();