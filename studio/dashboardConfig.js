export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61086b728de07f89b1dda29e',
                  title: 'Sanity Studio',
                  name: 'new-gatsby-portfolio-studio',
                  apiId: '9bca8fab-ac0f-47d9-95f0-b0a715c72508'
                },
                {
                  buildHookId: '61086b7216b09855346f792e',
                  title: 'Portfolio Website',
                  name: 'new-gatsby-portfolio',
                  apiId: '2e14bdda-14c2-4ac2-b82d-a2f0be2e5286'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mplumer/new-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://new-gatsby-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
