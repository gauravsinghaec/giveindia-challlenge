const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServerStats = new Schema({
    http_method: {
        type: String,
        required: true
    },
    res_time: {
        type: Number
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const Stats = mongoose.model('stats', ServerStats);

module.exports = Stats;