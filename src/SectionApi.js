import { useEffect, useState } from "react";

export default function SectionApi() {

  const [bucketItems, setBucketItems] = useState([]);

  useEffect(() => {
    fetchBucketList();
  }, []);

  async function fetchBucketList() {
    try {
      const response1 = await fetch('https://api.api-ninjas.com/v1/bucketlist', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'Yw8QryU6jA6pQa7FevvHng==b2NeEsaTHejgdUFq',
          'Content-Type': 'application/json',
        },
      });

      const response2 = await fetch('https://api.api-ninjas.com/v1/bucketlist', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'Yw8QryU6jA6pQa7FevvHng==b2NeEsaTHejgdUFq',
          'Content-Type': 'application/json',
        },
      });

      const response3 = await fetch('https://api.api-ninjas.com/v1/bucketlist', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'Yw8QryU6jA6pQa7FevvHng==b2NeEsaTHejgdUFq',
          'Content-Type': 'application/json',
        },
      });

      if (!response1.ok || !response2.ok || !response3.ok) {
        throw new Error('Network response was not ok');
      }

      const result1 = await response1.json();
      const result2 = await response2.json();
      const result3 = await response3.json();

      setBucketItems([result1.item, result2.item, result3.item]);
      console.log(result1, result2, result3);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div id="section-api">
      <div id="bucket-strong">
        <img src="./images/bucketlist.png" id="bucketlist" alt="" />
        <strong>
          Three innovative bucket list ideas for every type of person!
        </strong>
      </div>
      <h6>
        <span>[1]</span>&nbsp;<i id="h6one">{bucketItems[0]}</i>
      </h6>
      <h6>
        <span>[2]</span>&nbsp;<i id="h6two">{bucketItems[1]}</i>
      </h6>
      <h6>
        <span>[3]</span>&nbsp;<i id="h6three">{bucketItems[2]}</i>
      </h6>
      <button onClick={fetchBucketList}>Click for fresh ideas</button>
      <b>Why I chose this specific API?</b>
      <small>
        One of my greatest life dreams is to get my feet firmly into Tech, make
        money, and then tick items off my bucket list.
      </small>
      <small>
        ...Hence I chose this API <a href="https://api-ninjas.com/api/bucketlist" target="_blank">
          <span>API Ninjas - Bucket List API</span>
        </a>
        , to motivate myself and visitors.
      </small>
      <small>Have fun with it!</small>
    </div>
  );
}

/*
<NavLink to={`/dogsdetails/${da.id}`}>View Details</NavLink>
*/
