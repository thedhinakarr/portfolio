// webpack.config.js
import nodeExternals from 'webpack-node-externals';

export const target = 'node';
export const externals = [nodeExternals()];