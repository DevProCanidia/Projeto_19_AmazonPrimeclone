var main = document.querySelectorAll('.main .center')[0];
fetch('https://api.themoviedb.org/3/movie/popular?api_key=b9a03f9848ced6fcc04fff023b9e225b&language=en-US&page=1')
.then(response=> response.json())
    .then(data=>{
    //console.log(data);// recuperando as informações do api the movie db
        data.results.map((i,j)=>{
            if(j > 19)
            // o j armazena objeto(pagina)
            return;
            if(j == 0){
                main.innerHTML+=`
                <div class="banner-principal" style="background-image:url('https:image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>                
                `;
            }else{
                if(j == 1){
                    main.innerHTML+=`
                    <h2>Lançamentos</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w400`+i.poster_path+`" /></div>                   
                    `;
                }else{
                    main.innerHTML+=`
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w400`+i.poster_path+`" /></div>                   
                    `;
                }
            }
        })
    })

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=b9a03f9848ced6fcc04fff023b9e225b&language=en-US&page=2')
.then(response=> response.json())
    .then(data=>{
    //console.log(data);// recuperando as informações do api the movie db
        data.results.map((i,j)=>{
            if(j > 19)
            // o j armazena objeto(pagina)
            return;
            if(j == 0){
                main.innerHTML+=`
                <div class="banner-principal" style="background-image:url('https:image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>                
                `;
            }else{
                if(j == 1){
                    main.innerHTML+=`
                    <h2>Ação</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w400`+i.poster_path+`" /></div>                   
                    `;
                }else{
                    main.innerHTML+=`
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w400`+i.poster_path+`" /></div>                   
                    `;
                }
            }
        })
    })


















/*resultado do console.log(data)
{page: 1, results: Array(20), total_pages: 34260, total_results: 685199}
page: 1
results: Array(20)
0: {adult: false, backdrop_path: '/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg', genre_ids: Array(3), id: 453395, original_language: 'en', …}
1: {adult: false, backdrop_path: '/qTkJ6kbTeSjqfHCFCmWnfWZJOtm.jpg', genre_ids: Array(4), id: 438148, original_language: 'en', …}
2: {adult: false, backdrop_path: '/p1F51Lvj3sMopG948F5HsBbl43C.jpg', genre_ids: Array(3), id: 616037, original_language: 'en', …}
3: {adult: false, backdrop_path: '/wo3l9p0S7pcvwlzlndtKgq0peRJ.jpg', genre_ids: Array(3), id: 507086, original_language: 'en', …}
4: {adult: false, backdrop_path: '/ta17TltHGdZ5PZz6oUD3N5BRurb.jpg', genre_ids: Array(1), id: 924482, original_language: 'en', …}
5: {adult: false, backdrop_path: '/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg', genre_ids: Array(3), id: 338953, original_language: 'en', …}
6: {adult: false, backdrop_path: '/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg', genre_ids: Array(4), id: 675353, original_language: 'en', …}
7: {adult: false, backdrop_path: '/t0mwKhUDa62hdhdKSsN4xMfhY5Z.jpg', genre_ids: Array(2), id: 626735, original_language: 'en', …}
8: {adult: false, backdrop_path: '/ocUp7DJBIc8VJgLEw1prcyK1dYv.jpg', genre_ids: Array(3), id: 634649, original_language: 'en', …}
9: {adult: false, backdrop_path: '/o31kGDH9GbAZjVLwPYno8XvQGV2.jpg', genre_ids: Array(2), id: 777831, original_language: 'en', …}
10: {adult: false, backdrop_path: '/3oTeRLZQ16HGmVXAvEnVh90PhS6.jpg', genre_ids: Array(3), id: 667739, original_language: 'en', …}
11: {adult: false, backdrop_path: '/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg', genre_ids: Array(3), id: 752623, original_language: 'en', …}
12: {adult: false, backdrop_path: '/gG9fTyDL03fiKnOpf2tr01sncnt.jpg', genre_ids: Array(3), id: 526896, original_language: 'en', …}
13: {adult: false, backdrop_path: '/v7hdWmLh6VLgZQgkbHDxAa17M47.jpg', genre_ids: Array(3), id: 852592, original_language: 'es', …}
14: {adult: false, backdrop_path: '/uzZAef6uVqvhY4nLWqVvaq3DQeJ.jpg', genre_ids: Array(3), id: 975714, original_language: 'en', …}
15: {adult: false, backdrop_path: '/vjnLXptqdxnpNJer5fWgj2OIGhL.jpg', genre_ids: Array(3), id: 818397, original_language: 'en', …}
16: {adult: false, backdrop_path: '/jVGHRpSgtE2MQLJhC5q4lXmPNQW.jpg', genre_ids: Array(3), id: 960258, original_language: 'en', …}
17: {adult: false, backdrop_path: '/fqw8nJLPRgKRyFSDC0xBsC06NGC.jpg', genre_ids: Array(3), id: 639933, original_language: 'en', …}
18: {adult: false, backdrop_path: '/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg', genre_ids: Array(4), id: 508947, original_language: 'en', …}
19: {adult: false, backdrop_path: '/ulkWS7Atv0vv33KVCSAmNizAmJd.jpg', genre_ids: Array(2), id: 615469, original_language: 'en', …}
length: 20
[[Prototype]]: Array(0)
total_pages: 34260
total_results: 685199
[[Prototype]]: Object


*/







    