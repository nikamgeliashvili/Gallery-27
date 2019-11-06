const mix = require('laravel-mix');

mix.js('js/main.js', 'dist')
   .sass('sass/main.scss', 'dist')
   .setPublicPath('dist');