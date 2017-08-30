const RepLogApp = require('./components/RepLogApp');
const $ = require('jquery');

$(document).ready(function() {
  const $wrapper = $('.js-rep-log-table');
  const repLogApp = new RepLogApp($wrapper);
});
