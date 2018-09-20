function _handler(req, res) {
  /**
   * Create promise wrapper for the async code created
   * by the setTimeout function to delay the response for
   * 15 seconds. Its randomly choosen.
   */
  return new Promise( (resolve,reject) => {
    var obj = {};
    obj.time = new Date().toUTCString();
    obj.methods = req.method;
    obj.headers = req.headers;
    obj.path = req.path
    obj.query = req.query;
    obj.params = req.params;
    obj.body = req.body;
    obj.duration = 15;
    setTimeout(function() {
      resolve(obj);
    }, 1000*15);  
  });
};

module.exports._handler = _handler;
