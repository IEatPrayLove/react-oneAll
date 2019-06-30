import axios from "@/utils/axios";
import history from "@/utils/history"


export const getWriter = ({ url, params }) => {
    return axios.get(url, {
        params
    }).then(res => {
        // cb();
        return {
            type: "getWriter",
            writer: res.data.result
        }
    })
}

export const getNewWriter = ({ url, params }) => {
    return axios.get(url, {
        params
    }).then(res => {
        return {
            type: "getNewWriter",
            newWriter: res.data.result
        }
    })
}


export const searchWriter = ({ url, params }) => {
    return axios.get(url, {
        params
    }).then(res => {
        return {
            type: "searchWriter",
            searchResult: res.data.result
        }
    })
}


export const checkTel = ({ flag1 }) => {

    return {
        type: "checkTel",
        mobileDis: flag1
    }
}


export const getCode = ({ url, phoneNum, mobileDis, flag }) => {
    return axios.post(url, {
        phoneNum
    }).then(res => {
        console.log(res);
        return {
            type: "getCode",
            mobileDis,
            flag
        }
    })
}

export const changeTxt = ({ count, txt }) => {
    return {
        type: "changeTxt",
        count,
        txt
    }
}

export const changeTxt2 = ({ count, txt, flag, mobileDis }) => {
    return {
        type: "changeTxt2",
        count,
        txt
    }
}

export const changeToggle = ({ flag2 }) => {
    return {
        type: "changeToggle",
        flag2
    }
}

export const zhuCe = ({ url, phoneNum, myCode, registerData }) => {
    return axios.post(url, {
        phoneNum,
        myCode
    }).then(res => {
        console.log(res)
        if (!!res.data.type) {
            console.log(res.data.mobile)
            var userInfo = {
                token: res.data.token,
                mobile:res.data.mobile
            }
            sessionStorage.userInfo = JSON.stringify(userInfo);
            history.push("/myhome")
           
        } else {
            delete sessionStorage['userInfo']
        }
        return {
            type: "zhuCe",
            registerData: sessionStorage.userInfo
        }
    })

}


// export const setPwd = ({ url, phoneNum, passWord, userinfo }) => {
//     return axios.post(url, {
//         phoneNum,
//         passWord
//     }).then(res => {
//         console.log(res)
//         return {
//             type: 'setPwd',
//             userinfo: res.result.data
//         }
//     })
// }