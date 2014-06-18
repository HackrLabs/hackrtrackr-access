'use strict';

var config =
{ database:
  { client: 'postgres'
    , connection:
    { user: 'hackertracker'
      , password: 'hackertracker'
      , host: 'localhost'
      , database: 'hackertracker'
    }
  }
, device: "/dev/ttyACM0"
};

module.exports = config;

