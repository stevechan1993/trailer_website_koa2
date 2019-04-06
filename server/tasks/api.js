// http://api.douban.com/v2/movie/subject/1764796

const rp = require('request-promise-native');
async function fetchMovie (item) {
    const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`;
    const res = await rp(url);
    return res;
}

(async ()=> {
    let movies = [
       {
           doubanId: 25924056,
           title: '小飞象',
           rate: 6.8,
           poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2549234765.jpg'
       }, {
           doubanId: 30414802,
           title: '渗透',
           rate: 6.4,
           poster: 'https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2550911199.jpg'
       }
    ]

    movies.map(async movie => {
        let movieData = await fetchMovie(movie);

        try {
            movieData = JSON.parse(movieData);
            console.log(movieData.tags);
            console.log(movieData.summary);
        } catch (err) {
            console.log(err);
        }
    })
})()