import { axiosWithAuth } from './axiosWithAuth';

export async function getUserCredentials(username) {
    try {
        const credentialRes = await axiosWithAuth().get(`/users/${username}`);
        return credentialRes.data;
    } catch (err) {
        return (err.response);
    }
}