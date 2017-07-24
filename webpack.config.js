module.exports = [

    {
        entry: {
            "widget-lastusers": "./app/components/widget-lastusers.vue"
        },
        output: {
            filename: "./app/bundle/[name].js"
        },
        module: {
            loaders: [
                {test: /\.vue$/, loader: "vue-loader"},
                {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
            ]

        }
    }

];
