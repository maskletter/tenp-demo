import kvl, { Router, config } from "kvl";
import Login from 'api/user/login'


@Router({
    url: '/system'
})
export default class BasisRouter extends kvl {

    @config({ type: ['get','post'], url: '/hello', name: '系统设置' })
    private hello(req: kvl.Request, res: kvl.Response): void {
        res.send('<h1>System Hello</h1>')
    }

}