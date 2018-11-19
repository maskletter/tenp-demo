
import * as Kvl from 'kvl';
import { MainKvl ,Router, config, ValidationDone } from 'kvl';
import UserRouter from './router/user.router'
import HomeClass from './router/main.router'
import * as session from 'express-session';
import * as path from 'path';


module Main {

	//自定义验证器错误返回
	ValidationDone((error: Kvl.ValidationError, response: Kvl.Response) => {
		response.json({
			status: 10025,
			value: error.value,
			msg: error.errorMsg
		})
	})

	 
	@Router({}) 
	class HelloWord extends HomeClass{

		private msg: string = 'Hello, world'

		@config({ url: '/hello', name: 'hello', type: 'get' })
		private hello(req: Kvl.Request, res: Kvl.Response): void {
			res.end(`<h1>${this.msg}</h1>`)
		}

	}


	const kvlInit = MainKvl({
		port: 8080,
		router: [ UserRouter, HelloWord ],
		useThis: true,
		static: process.cwd()+'/static',
		use: [
			session({
			  secret: 'keyboard cat',
			  resave: false,
			  saveUninitialized: true
			})
		],
		throw(request: Kvl.Request, response: Kvl.Response, status: number, error: Error){
			response.status(status).sendFile(path.resolve(__dirname,'../assets/error/error.html'));
		}
	})
	 
	// require('child_process').exec('start http://localhost:8080')
	console.log('服务启动完成')

}

	