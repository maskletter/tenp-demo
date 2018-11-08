import * as Kvl from 'kvl';

export const Login_Validation: Kvl.Validation = {

	username: {
		type: 'string',
		required: true
	},

	password: {
		type: 'string',
		required: true
	},

	phone: {
		type: 'phone',
		required: false,	//允许为空
		name: '手机号'
		// regular: new RegExp(''),
		// done: function(err: Kvl.ValidationError, response: Kvl.Response){
		// 	response.json({
		// 		error: err.errorMsg,
		// 		value: err.value,
		// 		status: 10021
		// 	})
		// }
	},


}


export const UserInfo_Validation: Kvl.Validation = {

	userId: {
		type: 'number',
		name: '用户标识'
	}

}