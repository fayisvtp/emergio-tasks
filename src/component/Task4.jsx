import axios from 'axios';
import React, { useEffect, useState } from 'react';

function FetchsApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function ApiFeching() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    ApiFeching();
  }, []);

  return (
    <div>
      <ul>
        {data.map((value) => (
          <li key={value.id}>
            {value.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchsApi;
