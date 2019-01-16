
import kvl from 'kvl'
import { Main, Router, config } from 'kvl'
import UserRouter from 'router/user/basis.router'
import SystemRouter from 'router/system/basis.router'
import DirectoryRouter from 'router/directory/basis.router'
import * as session from 'express-session'
import * as path from 'path'
import { Application } from 'express';
import * as compression from 'compression';

 
@Router({
	
}) 
class HelloWord{

	@config({ url: '', name: 'hello', type: 'get' })
	private home(req: kvl.Request, res: kvl.Response): void {
		res.end('<h1>Hello, Kvl</h1>')
	}

	@config({ url: '/art', type: 'get' })
	private art(req: kvl.Request, res: kvl.Response): void {
		res.render('hello-world.art', {
			name: 'hello,world'
		})
	}

}


const kvlInit = Main({
	port: 6578,
	express(app: Application){
		app.engine('art', require('express-art-template'));
		app.set('views', path.resolve(process.cwd(), 'views'))
		app.use(compression())
		app.use(session({
			secret: 'secret',
			resave: false,
			saveUninitialized: true,
			cookie : {
				maxAge : 1000 * 60 * 30, // 设置 session 的有效时间，单位毫秒
			}
		}))
	},
	router: [ HelloWord, UserRouter, SystemRouter, DirectoryRouter ],
	static: path.resolve(process.cwd(), 'assets')
})
console.log('服务启动完成: localhost:6578')
require('child_process').exec('start http://localhost:6578/login.html')
