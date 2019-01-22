

/**
 * 用户信息
 */

export default (req: tenp.Request, res: tenp.Response): void =>  {
    res.send(`<h1>获取用户信息:${req.params.username}</h1>`)
}