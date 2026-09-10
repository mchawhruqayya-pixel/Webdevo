async function getUser() {
  const requestURL = 'https://reqres.in/api/users/1';

  try {
    const response = await fetch(requestURL, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Something went wrong:', error);
  }
}
getUser();

async function createUser() {
  const requestURL = 'https://reqres.in/api/users';

  const newUser = {
    name: 'Rukaya',
    job: 'ICT student',
  };

  try {
    const response = await fetch(requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Something went wrong:', error);
  }
}
createUser();

async function getNonExistentUser() {
  const requestURL = 'https://reqres.in/api/unknown/23';

  try {
    const response = await fetch(requestURL, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching user:', error.message);
  }
}

getNonExistentUser();
