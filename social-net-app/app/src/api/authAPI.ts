import {instance, APIResponseType, ResultCodeForCaptchaEnum, ResultCodesEnum} from "./api"


export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data)
    },
    loginMe(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logoutMe() {
        return instance.delete(`auth/login`)
    }
}

/*-------------------------Types-------------------------------*/

type LoginResponseDataType = {
    userId: number
}
type MeResponseDataType = {
    id: number
    email: string
    login: string
}