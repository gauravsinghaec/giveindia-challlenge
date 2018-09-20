const Stats = require('../models/serverstats');

/**
 * This controller methods is invoked on each request
 * completion and inserts the request statistics in
 * the MongoDB database.
 * @param: 
 * 		statsObj (data type: object): stats model field
 * @returns:
 * 		callback (data type: function object)
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

/**
 * This controller methods is invoked from
 * stats API endpoint
 * @param: 
 * 		None
 * @returns:
 * 		callback (data type: function object)
 */
const getServerStats = (callback) => {    
  // return all the stats documents
  Stats.find({},{http_method:1,res_time:1},function (err,data) {
    if (err) callback(err); 
    callback(undefined, data);
  });
}

module.exports.saveRequestStatus = saveRequestStatus;
module.exports.getServerStats = getServerStats;
