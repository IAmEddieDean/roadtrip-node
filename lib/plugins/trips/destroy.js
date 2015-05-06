'use strict';

var Trip = require('../../models/trip');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/trips/{tripId}',
    config: {
      description: 'delete a trip',
      validate: {
        payload: {
          name: Joi.string().length(24),
        }
      },
      handler: function(request, reply){
        Trip.findOne({_id: request.params.tripId, userId: request.auth.credentials._id}, function(err, trip){
          if(!trip){return reply().code(451);}
          trip.remove(function(){
            return reply(trip);
          });
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'trips.remove'
};
