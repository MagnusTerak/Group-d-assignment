import"./header-DdJ7hLaC.js";import{o as _}from"./aboutUs-BzN1-uDG.js";const u=document.querySelector(".ongoingMovies");let c=[],v=[];const h=async()=>{await C()};document.addEventListener("DOMContentLoaded",()=>{h().then(e=>f())});let g=[{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Sune i fjällen"},{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Sune i Norge"},{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Sune i fjällen"},{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Sune i Norge"}];function f(){k(),D(),b();for(let e=0;e<g.length;e++){const t=g[e];L({src:t.src,movieLabel:t.movieLabel})}}function L(e){const t=document.createElement("div");t.classList.add("ongoingMovies__card"),u.appendChild(t);const n=document.createElement("img");n.src=e.src,n.classList.add("ongoingMovies__card__image"),t.appendChild(n);const i=document.createElement("h3");i.innerHTML=e.movieLabel,i.classList.add("ongoingMovies__card__label"),t.appendChild(i),_.observe(t)}function k(){for(let e=0;e<s.movies.length;e++){let t=!1;const n=s.movies[e];for(let i=0;i<c.length;i++)c[i]==n.genre&&(t=!0);t||c.push(n.genre)}}function D(){for(let e=0;e<s.movies.length;e++){let t=!1;const n=s.movies[e];for(let i=0;i<v.length;i++)v[i]==n.decade&&(t=!0);t||v.push(n.decade)}}function b(){const e=document.createElement("div");e.classList.add("ongoingMovies__filterDiv"),u.appendChild(e);const t=document.createElement("div");t.classList.add("ongoingMovies__filterDiv__selectDiv"),e.appendChild(t);const n=document.createElement("select");n.classList.add("ongoingMovies__filterDiv__selectDiv__select"),t.appendChild(n);const i=new Option("Välj genre (Ingen vald)");i.selected=!0,i.classList.add("ongoingMovies__filterDiv__selectDiv__select__option"),n.add(i);for(let o=0;o<c.length;o++){const a=c[o];let r=new Option(a,"genre_"+a);r.classList.add("ongoingMovies__filterDiv__selectDiv__select__option"),n.add(r)}let d=document.createElement("input");d.classList.add("ongoingMovies__filterDiv__searchfield"),d.placeholder="Sök",e.appendChild(d);let l=document.createElement("div");l.classList.add("ongoingMovies__filterDiv__genreChipDiv"),e.appendChild(l);for(let o=0;o<c.length;o++){const a=c[o];let r=document.createElement("button");r.classList.add("ongoingMovies__filterDiv__genreChipDiv__chip"),r.textContent=a,l.appendChild(r)}for(let o=0;o<v.length;o++){const a=v[o];let r=document.createElement("button");r.classList.add("ongoingMovies__filterDiv__genreChipDiv__chip"),r.textContent=a+"-tal",l.appendChild(r)}let m=document.createElement("button");m.classList.add("ongoingMovies__filterDiv__genreChipDiv__chip"),m.textContent="Svartvit",l.appendChild(m)}const I=document.querySelector(".upcomingMovies"),p=[{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Terminator"},{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Terminator 2 - Domedagen"},{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Robocop"},{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Terminator Salvation"}];for(let e=0;e<p.length;e++){const t=p[e];x({src:t.src,movieLabel:t.movieLabel})}function x(e){const t=document.createElement("div");t.classList.add("upcomingMovies__card"),I.appendChild(t);const n=document.createElement("img");n.src=e.src,n.classList.add("upcomingMovies__card-image"),t.appendChild(n);const i=document.createElement("h3");i.innerHTML=e.movieLabel,i.classList.add("upcomingMovies__card-label"),t.appendChild(i),_.observe(t)}let s=[];const y=async()=>{try{s=await(await fetch("/Group-d-assignment/database/movies.json")).json(),console.log(s)}catch(e){return console.error("Error fetching data:",e),null}},C=async()=>{await y(),console.log("Data loaded in main.js:",s)};
//# sourceMappingURL=main-J_2RVvMB.js.map
