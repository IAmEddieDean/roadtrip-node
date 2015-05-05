'use strict';

var Trip = require('../../models/trip');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/trips',
    config: {
      description: 'Make a trip',
      validate: {
        payload: {
          name: Joi.string().min(3).required(),
          depart: Joi.date().iso().required(),
          dest: Joi.string()
        }
      },
      handler: function(request, reply){
        var trip = new Trip(request.payload);
        trip.userId = request.auth.credentials._id;
        trip.save(function(){
          reply();
          
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'trips.create'
};
