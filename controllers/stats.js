const Stats = require('../models/serverstats');

/**
 * This controller methods is invoked on each request
 * completion and inserts the request statistics in
 * the MongoDB database.
 */
const saveRequestStatus = (statsObj, callback) => {    
    // Create a stats document for the request
    const stats = new Stats(statsObj);
       // Save the verification token
    stats.save(function (err,data) {
      if (err) callback(err); 
      callback(undefined, data);
    });
}

module.exports.saveRequestStatus = saveRequestStatus;
