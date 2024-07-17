import axios from 'axios';

export const getItens = async ({ link }) => {
    try {
        const response = await axios.get(link);
        return response.data;
    } catch (error) {
        console.error('Error fetching request', error);
        throw error;
    }
};


export const deleteItem = async ({ link, id }) => {
    try {
        const response = await axios.delete(`${link}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching request:', error);
        throw error;
    }
};

export const updateItem = async ({ link, id, item }) => {
    try {
        const response = await axios.put(`${link}/${id}`, item);
        return response.data;
    } catch (error) {
        console.error('Error fetching request:', error);
        throw error;
    }
};

export const insertItem = async ({ link, item }) => {
    try {
        const response = await axios.put(link, item);
        return response.data;
    } catch (error) {
        console.error('Error fetching request:', error);
        throw error;
    }
}; 