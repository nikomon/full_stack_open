import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

export const getAll = async () => await axios.get(baseUrl).then(({ data }) => data);

export const create = async newObject => await axios.post(baseUrl, newObject).then(({ data }) => data);

export const update = async (id, newObject) => await axios.put(`${baseUrl}/${id}`, newObject).then(({ data }) => data);

export const remove = async (id) => await axios.delete(`${baseUrl}/${id}`).then(({ data }) => data);