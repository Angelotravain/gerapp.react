import axios from 'axios';

export const getBairros = async ({ link }) => {
    try {
        const response = await axios.get(link);
        return response.data;
    } catch (error) {
        console.error('Error fetching bairros:', error);
        throw error;
    }
};


export const deleteItem = async ({ link, id }) => {
    try {
        const response = await axios.delete(`${link}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching bairros:', error);
        throw error;
    }
}; 