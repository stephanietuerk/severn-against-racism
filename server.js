const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/severn-anti-racism'));

const forceSSL = function() {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
            ['https://', req.get('Host'), req.url].join('')
        );
    }
        next();
    }
}

app.use(forceSSL());

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/sever-anti-racism/'});
});
console.log('starting');
app.listen(process.env.PORT || 8080);