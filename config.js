{

  "host": "farkas-eclipse.herokuapp.com",
  "port": 80,

  "keyLength": 10,

  "maxLength": 400000,

  "staticMaxAge": 86400,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 500,
        "every": 60000
      }
    }
  },

  "storage": {
    "type": "memcached",
    "host": "127.0.0.1",
    "port": 11211,
    "expire": 2592000
  },

  "documents": {
    "about": "./about.md"
  }

}
