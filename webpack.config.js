module.exports = {
    devtool: 'source-map',
    debug: true,

    entry: {
        'main': './app/bootstrap.ts'
    },

    output: {
        path: './build',
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map'
    },

    resolve: {
        // ensure loader extensions match
        extensions: ['.ts','.js','.json','.css','.html'].reduce(function(memo, val) {
            return memo.concat('.async' + val, val); // ensure .async also works
        }, [''])
    },

    module: {
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader", exclude: [ /node_modules\/rxjs/ ] }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=40000&mimetype=image/png"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=40000&mimetype=image/jpg"
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=40000&mimetype=image/gif"
            },
            {
                test: /\.woff($|\?)/,
                loader: "url-loader?limit=40000&minetype=application/font-woff"
            },
            {
                test: /\.woff?2($|\?)/,
                loader: "url-loader?limit=40000&minetype=application/font-woff"
            },
            {
                test: /\.ttf$/,
                loader: "url-loader?limit=640000&minetype=application/octet-stream"
            },
            {
                test: /\.eot$/,
                loader: "url-loader?limit=640000&minetype=application/vnd.ms-fontobject"
            },
            {
                test: /\.svg$/,
                loader: "url-loader?limit=640000&minetype=image/svg+xml"
            }
        ]
    },

    devServer: {
        port: 8080,
        historyApiFallback: true,
        watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
        }
    },

    node: {
        global: 'window',
        progress: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};
