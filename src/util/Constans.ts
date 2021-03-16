export const StringREG = {
    phone: /^[1][3,5,7,8][0-9]\\d{8}$/,
    email: /^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$/,
    identification: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
    // password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9#?!@#$%^&*+-]).{12,}$/
    password: /^(.*?){6,12}$/
}

export const Alllayout = {
    layout : {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    },
    halfLayout: {
        labelCol: {span:12},
        wrapperCol: {span:12}
    }
}