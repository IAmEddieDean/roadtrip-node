'use strict';

var Trip = require('../../models/trip');
var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'DELETE',
    path: '/trips/{tripId}/stops/{stopId}',
    config: {
      description: 'delete a stop on a trip',
      validate: {
        payload: {
          name: Joi.string().length(24),
        }
      },
      handler: function(request, reply){
        Trip.update({_id: request.params.tripId}, {$pull: {stops : {_id: request.params.stopId}}}, function(){
            return reply({stopId: request.params.stopId});
        });
      }
    }
  });
  
  return next();
};

exports.register.attributes = {
  name: 'trips.remove-stop'
};
