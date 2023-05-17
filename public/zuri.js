(function() {
  const h6one = document.querySelector("#h6one");
  const h6two = document.querySelector("#h6two");
  const h6three = document.querySelector("#h6three");
  const button = document.querySelector("button");

  console.log("result");
  fetchBucketList();

  button.addEventListener('click', function() {
    console.log("result");
    fetchBucketList();
  });

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

      h6one.textContent = result1.item;
      h6two.textContent = result2.item;
      h6three.textContent = result3.item;

      console.log(result1, result2, result3);
    } catch (error) {
      console.error('Error:', error);
    }
  }
})();


/*
const filteredArr = arr.filter((word) => {
  // Convert the word to an array of words
  const words = word.split(" ");
*/