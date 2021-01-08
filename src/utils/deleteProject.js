import axios from 'axios';
import { axiosWithAuth } from './axiosWithAuth';

export async function deleteProject(projectId) {
    try {
        await axiosWithAuth().delete(`/projects/${projectId}`);
    } catch (err) {
        console.log(err.response);
    }
}