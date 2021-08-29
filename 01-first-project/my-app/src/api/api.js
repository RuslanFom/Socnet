import * as axios from "axios";



/*----------Data Access Layer-----------*/



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "bc4d616d-dafe-4c6a-9a51-039bdd71eb40"
    }

});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then (response => {
                return response.data;
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId);
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    loginMe(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logoutMe() {
        return instance.delete(`auth/login`);
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status});
    }

}