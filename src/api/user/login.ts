

/**
 * 登录
 */

export default (req: tenp.Request, res: tenp.Response): void =>  {
    const session: any = req.session;
    session.userinfo = {
        username: req.body.username,
        password: req.body.password
    }

    res.send('<h1>User Success Login</h1>')
}