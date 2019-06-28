import axios from "axios"


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


export const checkTel = (flag2) => {
    
    return {
        type: "checkTel",
        mobileDis:flag2
    }
}

