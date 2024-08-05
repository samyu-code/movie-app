const form = document.querySelector('form');
const imagediv=document.querySelector(".imagecontainer");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let query = form.querySelector('input').value;
    console.log(query);
    if(query=="")
        query="marvel";
    movieapi(query);

})

async function movieapi(query){
    const req=await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    const movies = await req.json();
    movieimages(movies);
}

function movieimages(movies){
    imagediv.innerHTML="";
    for(let movie of movies){
        let src=movie.show.image.medium;
        const img=document.createElement('img');
        img.src=src;
        imagediv.appendChild(img);
        
    }
}
