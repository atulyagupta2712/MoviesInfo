window.addEventListener("DOMContentLoaded", init);

function init(){
  

        let movieId = sessionStorage.getItem('movieId');
        axios.get('http://www.omdbapi.com/?i='+movieId+'&apikey=c6f68c90').then(response=>{
            // console.log(response);
            let movie = response.data;
            let output = document.querySelector("#movie");
            let div1 = document.createElement("div");
            div1.className = "col-md-4 text-center";
            let img1 = document.createElement("img");
            img1.src = movie.Poster;
            img1.className = "thumbnail";
            div1.appendChild(img1);
            let div2 = document.createElement("div");
            div2.className = "col-md-8";

            let h2 = document.createElement("h2");
            h2.className = "text-white"
            h2.innerHTML = movie.Title;

            let ul = document.createElement("ul");
            ul.className = "list-group";
            
            let li1 = document.createElement("li");
            li1.className = "list-group-item  bg-dark text-white";
            li1.innerHTML = "<span> Genre: </span>"+movie.Genre;
            
            let li2 = document.createElement("li");
            li2.className = "list-group-item bg-dark text-white";
            li2.innerHTML = "<span> Released: </span>"+movie.Released;
            
            let li3 = document.createElement("li");
            li3.className = "list-group-item bg-dark text-white";
            li3.innerHTML = "<span> Rated: </span>"+movie.Rated;
          
            let li4 = document.createElement("li");
            li4.className = "list-group-item bg-dark text-white";
            li4.innerHTML = "<span> Imdb Rating: </span> "+movie.imdbRating;

            let li5 = document.createElement("li");
            li5.className = "list-group-item bg-dark text-white";
            li5.innerHTML = "<span> Director: </span> "+movie.Director;

            let li6 = document.createElement("li");
            li6.className = "list-group-item bg-dark text-white";
            li6.innerHTML = "<span> Writer: </span> "+movie.Writer;

            let li7 = document.createElement("li");
            li7.className = "list-group-item bg-dark text-white";
            li7.innerHTML = "<span> Actors: </span> "+movie.Actors;

            let h4 = document.createElement("h4");
            h4.className = "title text-white";
            h4.innerHTML = "Plot: <br> <strong>"+movie.Plot+"</strong>";

           let button1 = document.createElement("a");
           button1.className = "btn btn-dark";
           button1.target = "_blank";
           button1.href= 'http://imdb.com/title/'+movie.imdbID;
            button1.innerHTML = "View more";

            let button2 = document.createElement("a");
            button2.className = "btn btn-dark";
            button2.href = "index.html";
            button2.innerHTML = "Go back"
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            ul.appendChild(li5);
            ul.appendChild(li6);
            ul.appendChild(li7);
            div2.appendChild(h2);
            div2.appendChild(ul);
            output.appendChild(div1);
            output.appendChild(div2);
            output.appendChild(h4);
            output.appendChild(button1);
           output.appendChild(button2);
        })
       
    
}