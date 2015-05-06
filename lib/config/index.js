'use strict';//Need to comment on this later.

var Secrets;
try{
 Secrets = require('./secrets');
 }catch(exception){}
 
 
var env = process.env.NODE_ENV || 'development';

var common = {
  FIREBASE_SECRET: Secrets.FIREBASE_SECRET,
  FIREBASE_EXPIRE: 24
};

var environments = {
  development: {
    PORT: 8000,
    MONGO_URL: 'mongodb://localhost/roadtrip-dev'
  },
  test: {
    PORT: 0,
    MONGO_URL: 'mongodb://localhost/roadtrip-test'
  },
  production: {
    PORT: process.env.PORT || 0,
    MONGO_URL: 'mongodb://heroku_app36605637:lv1r44gbo323bgik7eoludji86@ds031922.mongolab.com:31922/heroku_app36605637'
  }
};

var environment = environments[env];

Object.keys(common).forEach(function(key){
  environment[key] = common[key];
});
console.log(environment);
exports.environment = environment;
