import { axiosWithAuth } from './axiosWithAuth';

export async function getUserProjects (username) {
    try {   
        const projects = await axiosWithAuth().get('/projects');
        const userProjects = projects.data.filter(project => project.host.username === username);
        return userProjects;
    } catch (err) {
        console.log(err.response);
        return 'No projects found';
    }
}