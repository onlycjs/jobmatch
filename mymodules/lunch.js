const iconv = require('iconv-lite');//인코딩 변환도구
const charset = require('charset'); //캐릭터셋 체크도구
const request = require('request');
const cheerio = require('cheerio');

module.exports = function(date, callback) {
    date = date.split("-").join("");

    const options = {
        url: 'http://y-y.hs.kr/lunch.view?date=' + date,
        headers: {
            'User-Agent': 'Mozilla/5.0'
        },
        encoding: null //인코딩 값을 널로주어 별도의 인코딩을 하지 않게 한다.
    }
    request(options, function (err, response, body) { //첫번째는 주소 두번째는 받아올거
        //console.log(err); //null 이면 에러없는것 true면 에러가 있는것
        //console.log(res);
        if (err != null) {
            console.log(err);
            return;
        }

        const enc = charset(response.headers, body); //사이트의 인코딩을 알아냄 급식페이지는 euc-kr임
        const result = iconv.decode(body, enc);

        $ = cheerio.load(result);
        let menu = $(".menuName > span");

        callback(menu.text());

});
}