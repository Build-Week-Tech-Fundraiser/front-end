import { axiosWithAuth } from './axiosWithAuth';

export async function getUserProjects (username) {
    try {   
        const projects = await axiosWithAuth().get('/projects')
        console.log(projects)
        const userProjects = projects.data.filter(project => project.host.username === username)
        console.log(userProjects);
    } catch (err) {
        console.log(err.response)
    }
}