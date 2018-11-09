$(document).ready(()=>{
   
    $('#searchForm').on('submit', (e)=>{
       
        let search = $('#search').val();
        e.preventDefault();
        getMovies(search);
    })
})

function getMovies(search){
    // console.log(search);
    axios.get('http://www.omdbapi.com/?s='+search+'&apikey=c6f68c90')
    .then((response)=>{

        let movies = response.data.Search;
        let output = document.querySelector("#movies");
        output.innerHTML = "";
        $.each(movies, (index, movie)=>{
          
            var div = document.createElement("div");
            div.className = "column p-2 border"
            var img = document.createElement("img");
            img.src = movie.Poster;
            img.className = "image";
            var h5 = document.createElement("h5");
            h5.innerHTML= movie.Title;
            h5.className = "height";
            var button1 = document.createElement("button");
            button1.innerHTML = "Movie Details";
            button1.className = "btn btn-danger";

            div.appendChild(img);
            div.appendChild(h5);
            div.appendChild(button1);
            output.appendChild(div);
          button1.addEventListener("click", ()=> {
            sessionStorage.setItem('movieId', movie.imdbID);
            window.location=  "movie.html";
           
            return false;
          });
            
        })
    }).catch((err)=>{
        console.log("error is ",err);
    })

}

