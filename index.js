
/**
 * Module dependencies.
 */

var Batch = require('batch')
  , inherit = require('inherit');

/**
 * Expose `Preloader`.
 */

module.exports = Preloader;

/**
 * Initialize a new `Preloader`.
 *
 * @return {Type}
 * @api public
 */

function Preloader(urls) {
  Batch.call(this);
  this.urls = [];
}

/**
 * Inherits from `Batch.prototype`.
 */

inherit(Preloader, Batch);

Preloader.prototype.add = function(url){
  this.urls.push(url);
  this.push(function(done){
    var img = new Image;
    img.onload = function(){ done(); };
    img.src = url;
  });
};