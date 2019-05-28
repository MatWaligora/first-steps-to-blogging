var express = require('express');
var router = express.Router();

var mock = [
  {
    "userId": 8,
    "id": 79,
    "title": "pariatur consequatur quia magnam autem omnis non amet",
    "body": "libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestiae ducimus est\nofficiis esse molestiae iste et quos"
  },
  {
    "userId": 8,
    "id": 80,
    "title": "labore in ex et explicabo corporis aut quas",
    "body": "ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident"
  },
  {
    "userId": 9,
    "id": 81,
    "title": "tempora rem veritatis voluptas quo dolores vero",
    "body": "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut"
  }
]

router.get('/', function(req, res, next) {
  res.send(mock);
});

router.post('/', function(req, res, next) {
  var post = req.body;
  if(post) {
    post.id = Math.ceil(Math.random() * 10 + 100000);
    mock.push(post);
    return res.send({status: 200, message: 'Successfully added your post'});
  }
    return res.send({status: 500, message: 'Something went terribly wrong'});
});

router.put('/:id', function(req, res, next) {
  var id = req.params.id.toString();
  var postInMockIndex = mock.findIndex(post => post.id.toString() === id);
  if(postInMockIndex === -1 ) {
    return res.send({status: 500, message: 'Something went terribly wrong'});
  }

  var post = req.body;
  if(post) {
    mock[postInMockIndex] = post;
    return res.send({status: 200, message: 'Successfully added your post'});
  }
    return res.send({status: 500, message: 'Something went terribly wrong'});
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id.toString();
  var post = mock.find(post => post.id.toString() === id);
  res.send(post || {});
});

module.exports = router;

