let env = require('dotenv').config({
    silent: true
});

module.exports = {
    "notify": true,
    "proxy": process.env.BS_PROXY || false,
    "files": [
        "httpdocs/**/*.+(html|php|css|js)"
    ]
};
