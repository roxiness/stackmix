module.exports = {
  configs: () => ({
    packagejson: {
      "@comments scripts": {
        "build:docker": [
          "Builds a docker image. To disable this from the",
          "build step, you can rename it to 'build-docker'"]
      },
      scripts: {
        'build:docker': 'docker build -t routify-app:latest .',
        'run:docker': 'docker run --name routify -d -p 80:5005 routify-app:latest'
      }
    }
  })
}