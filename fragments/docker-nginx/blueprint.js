module.exports = {
    type: 'feature',
    configs: () => ({
        packagejson: {
            scripts: {
                'buildimage:docker':
                    'run-s build:* && docker build -t routify-app:latest .',
                'run:docker':
                    'docker run --name routify-frontend -d -p 8080:80 routify-app:latest',
            },
        },
    }),
}
