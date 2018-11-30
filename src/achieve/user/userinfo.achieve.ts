
import Kvl from 'kvl';

export default function(req: Kvl.Request, res: Kvl.Response){

	res.json({
		code: 1,
		msg: '获取用户信息成功',
		user: {
			nickname: 'maskletter',
			gender: '男',
			email: 'maskletter@outlook.com',
			age: 21
		}
	})

}