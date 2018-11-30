
import Kvl from 'kvl';
import { Router, config } from 'kvl';
import { Login_Validation, UserInfo_Validation } from '../validation/user.validation'
import { UserInterceptor } from '../interceptor/user.interceptor'
import LoginAchieve from '../achieve/user/login.achieve'
import UserinfoAchieve from '../achieve/user/userinfo.achieve'


@Router({
	url: '/user',
	interceptor: UserInterceptor
}) 
export default class UserRouter{

	@config({ url: '/login', name: '用户登录', type: 'get', validation: Login_Validation, interceptorLevel: 3 })
	private login(req: Kvl.Request, res: Kvl.Response): void {
		LoginAchieve(req, res);
	}

	@config({ url: '/userinfo', name: '获取用户信息', type: ['get','post'] })
	private userInfo(req: Kvl.Request, res: Kvl.Response): void {
		UserinfoAchieve(req, res);
	}

}