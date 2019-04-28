//Run the function when the button is clicked
document.getElementById('submit').addEventListener('click', getGiphy);

//DOM Variables
let section = document.createElement('section');

function getGiphy(){
    let input = document.getElementById('input').value;

    fetch('https://api.giphy.com/v1/gifs/search?q='+ input +'&api_key=WuFF3cibrKfQkQk2Wl31TFHpU9bWy1uP')
        .then(response => response.json())
        .then((gifs) => {
            console.log(gifs);
        
            for( i = 0; i < gifs.data.length; i++) {

                //Storing json values in variables
                let title = gifs.data[i].title;
                let url   = gifs.data[i].images.original.url;

                //debugging
                console.log(title)
                console.log(url)
    
                let h2 = document.createElement('h2')
                    h2.innerHTML = title;
                    section.appendChild(h2);

                let img = document.createElement('img')
                    img.src = url;
                    section.appendChild(img);
            }
            document.getElementById('gifs').appendChild(section);
    });
}
