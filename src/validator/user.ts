import kvl from "kvl";



export const Login: kvl.Validation = {

    username: {
        name: '用户名'
    },

    password: {
        name: '密码'
    },

    done(err: kvl.ValidationError, res: kvl.Response){
        res.status(400).json({
            code: 0,
            msg: `${err.name}异常`
        })
    }

}