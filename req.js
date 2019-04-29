const request = require('request');
// let = const const = java:final let<const 속도가 빠름
const cheerio = require('cheerio');
const iconv = require('iconv-lite');//인코딩 변환도구
const charset = require('charset'); //캐릭터셋 체크도구

const options = {
    url: 'http://y-y.hs.kr/lunch.view?date=20190429',
    headers: {
        'User-Agent':'Mozilla/5.0'
    },
    encoding:null //인코딩 값을 널로주어 별도의 인코딩을 하지 않게 한다.
}
request(options,function(err, res, body){ //첫번째는 주소 두번째는 받아올거
    //console.log(err); //null 이면 에러없는것 true면 에러가 있는것
    //console.log(res);
    if(err != null) {
        console.log(err);
        return;
    }

    const enc = charset(res.headers,body); //사이트의 인코딩을 알아냄 급식페이지는 euc-kr임
    console.log(enc);
    const result = iconv.decode(body,enc);

    $ = cheerio.load(result);
    let menu = $(".menuName > span");

    console.log(menu.text());
    //console.log(body);

});