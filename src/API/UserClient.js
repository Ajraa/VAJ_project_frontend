const apiUrl = 'http://localhost:3000/user/';

const loginFetch = async (username, password) => {
  try {
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
  } catch {
    return { code: 500, message: 'Unexpected error' };
  }
};

const registerFetch = async (username, password) => {
  try {
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
  } catch {
    return { code: 500, message: 'Unexpected error' };
  }
};

const changePasswordFetch = async (username, password) => {
  try {
    const url = `${apiUrl}changePassword?username=${username}&password=${password}`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch {
    return { code: 500, message: 'Unexpected error' };
  }
};

const getUserByIdFetch = async (id) => {
  try {
    const url = `${apiUrl}/getUserById/${id}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch {
    return { code: 500, message: 'Unexpected error' };
  }
};

const getUserByEmailFetch = async (email) => {
  try {
    const url = `${apiUrl}/getUserByEmail/${email}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch {
    return { code: 500, message: 'Unexpected error' };
  }
};

export { loginFetch, registerFetch, changePasswordFetch, getUserByIdFetch, getUserByEmailFetch };
