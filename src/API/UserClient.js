const apiUrl = 'http://localhost:3000/user/';

const loginFetch = async (username, password) => {
  const url = `${apiUrl}login?username=${username}&password=${password}`;
  console.log(url);
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  //if (!response.ok) throw new Error("Response wasn't okay");

  const responseData = await response.json();
  console.log(responseData);
  return responseData;
};

export { loginFetch };
