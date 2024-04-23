const apiUrl = 'http://localhost:3000/user/';

const loginFetch = async (username, password) => {
  const url = `${apiUrl}login?username=${username}&password=${password}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseData = await response.json();
  console.log(responseData);
  return responseData;
};

const registerFetch = async (username, password) => {
  const url = `${apiUrl}createUser?username=${username}&password=${password}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseData = await response.json();
  console.log(responseData);
  return responseData;
};

export { loginFetch, registerFetch };
