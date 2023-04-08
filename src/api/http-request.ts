export const API_BASE_URL = 'https://pos-api.utilityhelpful.com/api/v1/app';

export const getHeadersData = (): Auth.HeaderInfo => {
  return {
    Accept: 'application/json',
    Authorization: sessionStorage.getItem('token') ? `Bearer ${sessionStorage.getItem('token')}` : '',
    'Content-Type': 'application/json',
  };
};

export const httpRequest = {
  async get<T>(url: string): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${url}`, {
        method: 'GET',
        headers: getHeadersData(),
      });
      const data = await response.json();
      if (response.ok) {
        return data.data;
      } else {
        console.log(data.error);
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async post<T, R>(url: string, bodyData: T): Promise<R> {
    try {
      const response = await fetch(`${API_BASE_URL}${url}`, {
        method: 'POST',
        headers: getHeadersData(),
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();
      if (response.ok) {
        return data.data;
      } else if (response.status == 401) {
        sessionStorage.setItem('error', 'Incorrect email or password.');
      } else {
        console.log(data.error);
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  async delete<T>(url: string): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${url}`, {
        method: 'DELETE',
        headers: getHeadersData(),
      });

      const data = await response.json();
      if (response.ok) {
        return data.data;
      } else {
        console.log(data.error);
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
