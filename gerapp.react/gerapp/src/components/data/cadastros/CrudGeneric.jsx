import axios from 'axios';


const api = axios.create({
    baseURL: 'https://localhost:4441/api/v1/gerapp/'
});

export const getItens = async (link) => {
    try {
        console.log(link || 'caiu qui carai');
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
    const response = api
        .put(`${link}/${id}`, item)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });

};

export const insertItem = async ({ link, item }) => {
    try {
        const response = await api.post(link, item);
        return response.data;
    } catch (error) {
        console.error('Error fetching request:', error);
        throw error;
    }
}; 