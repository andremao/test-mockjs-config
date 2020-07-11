module.exports = {
  requests: [
    {
      type: 'get',
      url: '/users',
      tpl: {
        'users|1-10': [
          {
            name: '@CNAME()',
            'age|18-60': 1,
            mobile: /1[3578]\d{9}/,
            email: '@EMAIL()',
          },
        ],
      },
    },
  ],
};
