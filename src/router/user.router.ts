
import * as Kvl from 'kvl';
import { Router, config } from 'kvl';
import { Login_Validation, UserInfo_Validation } from '../validation/user.validation'
import { UserInterceptor } from '../interceptor/user.interceptor'


@Router({
	url: '/user',
	interceptor: UserInterceptor
}) 
export default class UserRouter{

	@config({ url: '/login', name: '用户登录', type: 'get', validation: Login_Validation, interceptorLevel: 3 })
	private login(req: Kvl.Request, res: Kvl.Response): void {

		(req as any).session.userId = 113;
		res.json({
			code: 1,
			msg: '登录成功',
			param: req.query
		})
	}

	@config({ url: '/userinfo', name: '获取用户信息', type: ['get','post'] })
	private userInfo(req: Kvl.Request, res: Kvl.Response): void {

		res.json({
			code: 1,
			msg: '获取用户信息成功',
			user: {
				nickname: 'maskletter',
				gender: 'male',
				email: 'maskletter@outlook.com',
				age: 21
			}
		})
		
	}

}