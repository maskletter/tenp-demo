
import * as Kvl from 'kvl';

export const UserInterceptor: Kvl.Interceptors = [
	function(req: Kvl.Request, res: Kvl.Response, next: Function){
		if(!(req as any).session.userId){
			res.json({
				code: 1001,
				msg: '请先登录'
			})
		}else{
			next();
		}
	}
]