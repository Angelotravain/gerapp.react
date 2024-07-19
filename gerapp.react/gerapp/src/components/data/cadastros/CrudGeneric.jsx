import axios from 'axios';


const api = axios.create({
    baseURL: 'https://localhost:4441/api/v1/gerapp/'
});

export const getItens = async ({ link }) => {
    try {
        const response = await api.get('Bairro');
        return response.data;
    } catch (error) {
        console.error('Error fetching request', error);
        throw error;
    }
};

export const getItensById = async () => {
    try {
        console.log(link, id);
        const response = await api.get(`Cidade/5595`);
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
    try {
        const response = await api.put(`${link}/${id}`, item);
        return response.data;
    } catch (error) {
        console.error('Error fetching request:', error);
        throw error;
    }
};

export const insertItem = async ({ link, item }) => {
    try {
        const response = await api.put(link, item);
        return response.data;
    } catch (error) {
        console.error('Error fetching request:', error);
        throw error;
    }
}; 