module.exports = {
  configs: () => ({
    packagejson: {
      scripts: {
        'build:docker': 'docker build -t routify-app:latest .',
        'run:docker': 'docker run --name routify -d -p 80:5005 routify-app:latest'
      }
    }
  })
}