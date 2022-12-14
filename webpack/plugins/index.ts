import {join} from 'path';

import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import NodemonPlugin from 'nodemon-webpack-plugin';
import {ProgressPlugin} from 'webpack';

import {deploymentEnv, webpackDir} from '../utils/env';


export const nodemonPlugin = new NodemonPlugin();

export const progressPlugin = new ProgressPlugin();

let envFile;

switch(deploymentEnv) {
	case 'live':
		envFile = './.env.production';
		break;
	case 'staging':
		envFile = './.env.staging';
		break;
	default:
		envFile = './.env';
		break;
}
export const dotenvPlugin = new Dotenv({path: envFile});

export const htmlWebpackPlugin = new HtmlWebpackPlugin({
	filename: 'index.html',
	inject: 'body',
	template: join(webpackDir, 'template', 'index.ejs'),
});
