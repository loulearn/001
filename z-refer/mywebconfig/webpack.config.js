/* makes absolute path for bundled stuff (see ln 18 below) */
const path = require('path')

/* add postCSSPlugins here (see ln 37 below) */
/* postcss is like a record player (doesnt do anything by itself - needs the "records" ie the plugins below) */
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

/* in package.json file need to create "dev": "webpack", npm script to get below to run */
module.exports = {
/* the "App.js" javascript file to watch and bundle - import other files into this "App.js" file */
    entry: './app/assets/scripts/App.js',
/* the js file that has the bundled stuff in it - auto generated by webpack - dont have to do with... */
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    /* below ---- contentBase > static ---- code changed from video */
    /* https://gist.github.com/johnrichardrinehart/c8ec6ab1e60f39fc3b8dc738db649ec0 - scroll to comments */
    devServer: { 
        before: function(app, server) {
            server._watch('./app/**/*.html')
        },
        static: path.join(__dirname, 'app'),
        hot: true,
        port: 3000
    },
/* other modes to come but for now use "development" */
    mode: 'development',
/* remember to add script tags to bottom of html page */
/* allows changes to be automatically enacted... */
    /* watch: true, ---- no longer needed after addition of devServer above */
/* vid 15 below - CSS in Webpack ~ 08:00 */
/* set up to handle non javascript files - like .css files... */
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ 
/* adds basic css support to webpack set up - (style-loader and css-loader below) */
                'style-loader',
                'css-loader',
                 {
/* adds postcss support to webpack setup (see various plugins that are being used in ln 5 above) */
/* the following code differs from the tut. see: https://webpack.js.org/loaders/postcss-loader/ -scroll down. */
                     loader: 'postcss-loader',
                     options: {
                           postcssOptions: {
                               plugins: postCSSPlugins
                           }
                       }
                   }  
               ]
            }
        ]
    }
}