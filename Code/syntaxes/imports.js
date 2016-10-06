module.exports = (hljs) => ({
  case_insensitive: true,
  contains: [
    {
      className: 'keyword',
      begin: 'import|from| as ',
      relevance: 0
    },

    {
      className: 'string',
      begin: '\'', end: '\'',
      relevance: 0,
      contains: [
        {
          className: 'string', begin: '[A-Za-z0-9_]+', relevance: 0
        }
      ]
    }
  ]
})
