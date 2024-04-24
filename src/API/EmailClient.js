import { getUserByEmailFetch } from './UserClient';

const apiUrl = 'http://localhost:3000/email/';

const loadActiveEmailsFetch = async (id) => {
  try {
    const url = `${apiUrl}/loadactive/${id}`;

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

const loadDeletedEmailsFetch = async (id) => {
  try {
    const url = `${apiUrl}/loaddeleted/${id}`;
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

const loadSentEmailsFetch = async (id) => {
  try {
    const url = `${apiUrl}/loadsent/${id}`;
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

const sendEmailFetch = async (fromId, email, title, content) => {
  try {
    const user = await getUserByEmailFetch(email);
    if (user.code !== 200) return user;

    const url = `${apiUrl}send?fromId=${fromId}&toId=${user.obj.id}&title=${title}&content=${content}`;
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

const markDeletedFetch = async (id) => {
  try {
    const url = `${apiUrl}markdeleted/${id}`;
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

const deleteFetch = async (id) => {
  try {
    const url = `${apiUrl}delete/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
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

export {
  loadActiveEmailsFetch,
  loadDeletedEmailsFetch,
  loadSentEmailsFetch,
  sendEmailFetch,
  markDeletedFetch,
  deleteFetch,
};
