module.exports = {
    globDirectory: 'public',
    globPatterns: ['**/*.{js,css,svg}', '__app.html'],
    swSrc: `public/sw.generated.js`,
    swDest: `public/sw.generated.js`,
    maximumFileSizeToCacheInBytes: 10000000, // 10 MB,
}
