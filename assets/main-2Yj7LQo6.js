import"./footer-BmwU8n-7.js";import"./aboutUs-DtnJN-Qj.js";const _=document.querySelector(".ongoingMovies");let r=[],v=[];const u=async()=>{await y()};setTimeout(()=>{u().then(e=>h())},5e3);let g=[{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Sune i fjällen"},{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Sune i Norge"},{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Sune i fjällen"},{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Sune i Norge"}];function h(){L(),k(),D();for(let e=0;e<g.length;e++){const t=g[e];f({src:t.src,movieLabel:t.movieLabel})}}function f(e){const t=document.createElement("div");t.classList.add("ongoingMovies__card"),_.appendChild(t);const n=document.createElement("img");n.src=e.src,n.classList.add("ongoingMovies__card__image"),t.appendChild(n);const i=document.createElement("h3");i.innerHTML=e.movieLabel,i.classList.add("ongoingMovies__card__label"),t.appendChild(i)}function L(){for(let e=0;e<s.movies.length;e++){let t=!1;const n=s.movies[e];for(let i=0;i<r.length;i++)r[i]==n.genre&&(t=!0);t||r.push(n.genre)}}function k(){for(let e=0;e<s.movies.length;e++){let t=!1;const n=s.movies[e];for(let i=0;i<v.length;i++)v[i]==n.decade&&(t=!0);t||v.push(n.decade)}}function D(){const e=document.createElement("div");e.classList.add("ongoingMovies__filterDiv"),_.appendChild(e);const t=document.createElement("div");t.classList.add("ongoingMovies__filterDiv__selectDiv"),e.appendChild(t);const n=document.createElement("select");n.classList.add("ongoingMovies__filterDiv__selectDiv__select"),t.appendChild(n);const i=new Option("Välj genre (Ingen vald)");i.selected=!0,i.classList.add("ongoingMovies__filterDiv__selectDiv__select__option"),n.add(i);for(let o=0;o<r.length;o++){const a=r[o];let c=new Option(a,"genre_"+a);c.classList.add("ongoingMovies__filterDiv__selectDiv__select__option"),n.add(c)}let d=document.createElement("input");d.classList.add("ongoingMovies__filterDiv__searchfield"),d.placeholder="Sök",e.appendChild(d);let l=document.createElement("div");l.classList.add("ongoingMovies__filterDiv__genreChipDiv"),e.appendChild(l);for(let o=0;o<r.length;o++){const a=r[o];let c=document.createElement("button");c.classList.add("ongoingMovies__filterDiv__genreChipDiv__chip"),c.textContent=a,l.appendChild(c)}for(let o=0;o<v.length;o++){const a=v[o];let c=document.createElement("button");c.classList.add("ongoingMovies__filterDiv__genreChipDiv__chip"),c.textContent=a+"-tal",l.appendChild(c)}let m=document.createElement("button");m.classList.add("ongoingMovies__filterDiv__genreChipDiv__chip"),m.textContent="Svartvit",l.appendChild(m)}const b=document.querySelector(".upcomingMovies"),p=[{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Terminator"},{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Terminator 2 - Domedagen"},{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Robocop"},{src:"https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=0&k=20&c=RWp5ECPYkIEO8J3zxyvsc4Lrf68NiLDybtPHix_QI1I=",movieLabel:"Terminator Salvation"}];for(let e=0;e<p.length;e++){const t=p[e];I({src:t.src,movieLabel:t.movieLabel})}function I(e){const t=document.createElement("div");t.classList.add("upcomingMovies__card"),b.appendChild(t);const n=document.createElement("img");n.src=e.src,n.classList.add("upcomingMovies__card-image"),t.appendChild(n);const i=document.createElement("h3");i.innerHTML=e.movieLabel,i.classList.add("upcomingMovies__card-label"),t.appendChild(i)}let s=[];const x=async()=>{try{s=await(await fetch("../../public/database/movies.json")).json(),console.log(s)}catch(e){return console.error("Error fetching data:",e),null}},y=async()=>{await x(),console.log("Data loaded in main.js:",s)};
//# sourceMappingURL=main-2Yj7LQo6.js.map