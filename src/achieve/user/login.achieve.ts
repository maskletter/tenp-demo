
import * as Kvl from 'kvl';

export default function(req: Kvl.Request, res: Kvl.Response){

	if(req.query.username == 'admin' && req.query.password == '123456'){
		(req as any).session.userId = 113;
		res.json({
			code: 1,
			msg: '登录成功',
			param: req.query
		})
	}else{
		res.json({
			code: 0,
			msg: '用户名或密码不正确'
		})
	}

}