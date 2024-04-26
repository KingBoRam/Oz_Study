const path = require('path');

function getPosts(req, res) {
  res.render('posts', {
    templateName: 'post',
  });
  // res.send('<div><h1>Post Title<p>This is a post</p></h1></div>');
  // res.sendFile(path.join(__dirname, '..', 'public', 'images', '123.jpg'));
}

module.exports = {
  getPosts,
};
