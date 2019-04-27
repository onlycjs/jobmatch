const request = require('request');
// let = const const = java:final let<const 속도가 빠름
const cheerio = require('cheerio');

const options = {
    url: 'http://y-y.hs.kr/lunch.view?date=20190429',
    headers: {
        'User-Agent':'Mozilla/5.0'
    }
}
request(options,function(err, res, body){ //첫번째는 주소 두번째는 받아올거
    //console.log(err); //null 이면 에러없는것 true면 에러가 있는것
    //console.log(res);
    if(err != null) {
        console.log(err);
        return;
    }

    $ = cheerio.load(body);
    let menu = $(".menuName > span");

    console.log(menu);
    console.log(menu.text());
    //console.log(body);

});