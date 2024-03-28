// next.config.js

const isGithubActions = process.env.GITHUB_ACTIONS || false

console.log(isGithubActions);

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  console.log(`${repo} ${process.env.GITHUB_REPOSITORY}`)
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: 'export',
}