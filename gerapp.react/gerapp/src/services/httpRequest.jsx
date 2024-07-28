import axios from 'axios';


const api = axios.create({
    baseURL: 'https://localhost:4441/api/v1/gerapp/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getItens = async (link) => {
    try {
        const response = await api.get(link);
        return response.data;
    } catch (error) {
        console.error('Error fetching request', error);
        throw error;
    }
};

export const getItensById = async (link, id) => {
    try {
        const response = await api.get(`${link}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching request:', error);
        throw error;
    }
};

export const deleteItem = async ({ link, id }) => {
    try {
        console.log(link, id);
        const response = await api.delete(`${link}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching request:', error);
        throw error;
    }
};

export const updateItem = async ({ link, id, item }) => {
    console.log(`${link}/${id}`, item);
    try {
        const response = await api.put(`${link}/${id}`, item);
        return response.data;
    } catch (err) {
        console.error('Error updating item:', err);
        throw err;
    }
};

export const insertItem = async ({ link, item }) => {
    console.log('no insert', link, item);
    try {
        const response = await api.post(link, item);
        return response.data;
    } catch (error) {
        console.error('Error inserting item:', error);
        throw error;
    }
};


export const getAdressById = async (link, cep) => {
    try {
        const response = await api.get(`${link}/${cep}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching request', error);
        throw error;
    }
};
