
import * as Kvl from 'kvl';
import { config } from 'kvl';


/**
 * 首页
 */

export default class HomeRouter {

	@config({ url: '', name: '首页', type: 'get' })
	private main(req: Kvl.Request, res: Kvl.Response): void {
		res.sendFile(process.cwd()+'/static/index.html')
	}
	
}