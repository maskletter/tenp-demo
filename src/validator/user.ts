

export const Login: tenp.Validation = {

    username: {
        name: '用户名'
    },

    password: {
        name: '密码'
    },

    done(err: tenp.ValidationError, res: tenp.Response){
        res.status(400).json({
            code: 0,
            msg: `${err.name}异常`
        })
    }

}