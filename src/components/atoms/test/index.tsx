import { Button } from '@mui/material';
import axios from 'axios';
export const  Test = ()=>{
// Create an Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your API endpoint
});

// Set the request configuration
const url = '/buckets'; // Replace with your desired URL
const data = {
  // Replace with your request data
  id: 1,
  name: 'ravi',
  songs: [
    {
      name: 'kushi',
      link: 'https://share.streak.com/zjYYDajXQBlWZ2d8IFwt4q',
    },
    {
      name: 'hey',
      link: 'https://share.streak.com/zjYYDajXQBlWZ2d8IFwt4q',
    },
    // Add more songs here
  ],
};
const Do = ()=>{
  api.put(url, data)
  .then(response => {
    // Handle successful response
    console.log('PUT request successful', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error performing PUT request', error);
  });
}
// Send the PUT request

return(
  <Button onClick={Do}>click</Button>
)
}