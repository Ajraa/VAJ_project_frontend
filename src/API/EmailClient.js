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

export { loadActiveEmailsFetch, loadDeletedEmailsFetch, loadSentEmailsFetch };
