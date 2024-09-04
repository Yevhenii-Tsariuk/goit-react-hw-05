import axios from "axios";

export async function fetchMovie(url) {
    

     const options = {
       headers: {
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTE1MmY2NmFlMmFhODE0MDdhMjVkMGNmZTA5MmIzYiIsIm5iZiI6MTcyNTM2NjcwNi40NzgzNTMsInN1YiI6IjY2ZDZmY2Q0YWZkZWJiMmYzOTlkMzI4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HGy6txkD30rtWe4UJ2IyVfratrkviqIPyfhnwzl-ng8'
       }
     };
     
     const response = await axios.get(url, options);

     return response;
}
export const imageUrl = "https://image.tmdb.org/t/p/w500";