const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const api = {
  async get(path: string) {
    const response = await fetch(`${API_URL}${path}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  },

  async post(path: string, data: unknown) {
    const response = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  },
};
