export default {
    state:null,
    subscriptions:{
        syncLocalstorage({dispatch}){
            let loginId = localStorage.getItem("loginId");
            if (loginId){
                dispatch({type:"setLoginUser",payload:loginId})
            }
        }
    },
    reducers:{
        setLoginUser(state,action){
            return action.payload
        }
    },
    effects:{
        *login({payload},{put}){
            const { loginId, loginPwd } = payload;
            if(loginId == 'admin' && loginPwd == "123"){
                yield put({type:"setLoginUser",payload:loginId})
                localStorage.setItem("loginId", loginId);
                return true;
            }
            return false;
        }
    }
}