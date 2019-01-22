import tenp, { Router, config } from "@tenp/core";
import Info from 'api/user/userinfo'


@Router({})
export default class InfoRouter extends tenp {

    @config({ type: ['get','post'], url: '/userinfo/:username', name: '获取用户信息' })
    private userinfo(req: tenp.Request, res: tenp.Response): void {
        Info(req, res);
    }

}