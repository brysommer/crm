import axios from 'axios';
import fs from 'fs';

const apiUrl = 'http://ec2-34-228-161-50.compute-1.amazonaws.com:3001/api/lots';
const filePath = 'lotData.json';

axios.get(apiUrl)
  .then(response => {
    const jsonData = JSON.stringify(response.data, null, 2);

    fs.writeFile(filePath, jsonData, (err) => {
      if (err) {
        console.error('Error writing JSON to file:', err);
      } else {
        console.log(`Data written to ${filePath}`);
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error.message);
  });