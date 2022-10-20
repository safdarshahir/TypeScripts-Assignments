import { Movie } from "./Movie.js";
import { User } from "./User.js";
import { Post } from "./Post.js";

const userApi = 'http://jsonplaceholder.typicode.com/users';
const movieApi = 'https://jsonmock.hackerrank.com/api/movies';
const userPost = 'https://jsonplaceholder.typicode.com/posts';

const fetchUsersById = async (url:string,id:number):Promise<User[]> =>{

    let searchUrl = url + `?id=${id}`;
    const response = await fetch(searchUrl);
    const data:any =response.json();
    console.log(data);
    return data;
}



function getData(object:any,url:string){

    const fetchData = async (url:string):Promise<object[]> =>{

        const response = await fetch(url);
        const data:any =response.json();
        console.log(data);
        return data;
    }

    return fetchData(url);

}

getData(User,userApi);
getData(Movie,movieApi);
getData(Post,userPost);

