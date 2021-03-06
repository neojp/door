var debug     = require("./debug")('table'),
    attr      = require("attr"),
    readJSON  = require('read-json'),
    watchFile = require('fs').watchFile,
    exists    = require('fs').exists,
    map       = require('./map'),

    table     = attr(),
    filename  = attr();

module.exports = table;
module.exports.filename = filename;

filename.subscribe(function(filename, old){
  debug('Filename changed to %s%s', filename, old ? 'from ' + old : '');
  reload();

  exists(filename, function (exists) {

    if(!exists) {
      debug('Error: %s does not exist.', filename);
      return;
    }

    watchFile(filename, reload);

  });

});

function reload(){
  debug('Reading %s', filename());

  readJSON(filename(), function(error, newTable){

    if(error) {
      debug('Failed to read %s.', filename());
      return;
    }

    debug('Loaded proxy table from %s', filename());

    table(map(newTable));
  });
}
