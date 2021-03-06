const express = require('express');
const http = require('http');
const path = require('path');

const bodyparser = require('body-parser');


let app = express();

app.set('port', 12000);
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyparser.json()); //미들웨어로 바디파서를 사용함. jsp에서 포스트로 넘어오는걸 자동으로 리퀘스트바디에 json형식으로 넣어주는것
app.use(bodyparser.urlencoded({ extended: true }));

const router = require('./router');
app.use(router);

let server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log(`Express 엔진이 ${app.get('port')}에서 실행중`);
});