var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

var webpackConfig ={
    
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'    
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, "dist")  
        
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
                
            }
        ]
    },
    
    plugins: [new HtmlWebpackPlugin({
        
        title: "Midterm",
        template: "src/index.ejs"
        
    })]
    
};

module.exports = webpackConfig;