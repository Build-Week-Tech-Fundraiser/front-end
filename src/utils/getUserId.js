import { axiosWithAuth } from './axiosWithAuth';

export async function getUserId(username) {
    try {
        const userRes = await axiosWithAuth().get(`/users/${username}`);
        return userRes.data.id
    } catch (err) {
        return err.response.data.message;
    }
}