/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
export async function api(
  path: string,
  method: string,
  body: string,
): Promise<any> {
  try {
    const myHeaders = new Headers();

    const myInit = {
      method,
      headers: myHeaders,
      body,
    };
    const url = process.env.REACT_APP_SERVER_URL;
    return fetch(`${url}${path}`, myInit)
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        return response.text().then((text) => {
          try {
            return JSON.parse(text);
          } catch (e) {
            throw new Error(text);
          }
        });
      })
      .then((response) => {
        try {
          return JSON.parse(response);
        } catch (e) {
          return { success: false, error: response };
        }
      })
      .catch((e) => {
        return { success: false, error: e };
      });
  } catch (e) {
    throw new Error('could not make request');
  }
}

export async function setStudent(
  name: string,
  mail: string,
  password: string,
): Promise<{
  success: boolean;
  id?: number;
  error?: string;
  token?: string;
}> {
  const body = {
    nome: name,
    email: mail,
    senha: password,
  };
  return api('/student/create/', 'POST', JSON.stringify(body));
}

export async function activateStudent(token: string): Promise<{
  success: boolean;
  id?: number;
  error?: string;
  token?: string;
}> {
  const body = {
    token,
  };
  return api('/student/activate/', 'POST', JSON.stringify(body));
}
