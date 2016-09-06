module.exports = (hljs) => ({
  case_insensitive: true,
  contains: [
    {
      className: 'component',
      begin: '</?', end: '/?>',
      contains: [
        {
          className: 'component', begin: /[^\/><\s]+/, relevance: 0
        },
        {
          endsWithParent: true,
          illegal: /</,
          relevance: 0,
          contains: [
            {
              className: 'prop',
              begin: '[A-Za-z0-9_]+',
              relevance: 0
            },
            {
              begin: /=/,
              relevance: 0,
              contains: [
                {
                  className: 'string',
                  endsParent: true,
                  variants: [
                    {begin: /{{/, end: /}}/},
                    {begin: /{\[/, end: /]}/},
                    {begin: /{function/, end: /}}/},
                    {begin: /"/, end: /"/}
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
