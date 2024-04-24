const log = {
  info: function (info) {
    console.log('info' + info);
  },
  warning: function (warning) {
    console.log('Warning' + warning);
  },
  error: function (error) {
    console.log('Error' + error);
  },
};

module.exports = log;
