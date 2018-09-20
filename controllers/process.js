const _handler = (req, res) =>{
  var obj = {};
  obj.time = new Date().toUTCString();
  obj.methods = req.method;
  obj.headers = req.headers;
  obj.path = req.path
  obj.query = req.query;
  obj.params = req.params;
  obj.body = req.body;
  obj.duration = 15;
  return obj;    
};

module.exports._handler = _handler;
