module.exports = {
    mount: {
        public: '/',
        src: '/dist',
        heropy: '/heropy'
    },
    plugins: [
        '@snowpack/plugin-svelte',
        '@snowpack/plugin-optimize',
        '@snowpack/plugin-babel',
        '@snowpack/plugin-sass'
    ],
    alias: {
        '~': './src'
    },
    devOptions: {
        // port: 8080
        open: 'none'
    }
}