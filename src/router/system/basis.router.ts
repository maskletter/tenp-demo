import tenp, { Router, config } from "@tenp/core";


@Router({
    url: '/system'
})
export default class BasisRouter extends tenp {

    @config({ type: ['get','post'], url: '/hello', name: '系统设置' })
    private hello(req: tenp.Request, res: tenp.Response): void {
        res.send('<h1>System Hello</h1>')
    }

}