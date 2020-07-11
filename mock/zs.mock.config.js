module.exports = {
  requests: [
    {
      type: 'post',
      url: '/login',
      handle(req, res) {
        console.log(req.body, 'req.body');
        res.json({
          code: 200,
          message: 'ok',
          reqBody: req.body,
        });
      },
    },
  ],
};
