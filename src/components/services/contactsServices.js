import axios from "axios";

export function getAllContactsService() {
  return axios.get("/contacts").then((res) => res.data);
}

export function createContactService(name, number) {
  return axios
    .post("/contacts", {
      name,
      number,
    })
    .then((res) => res.data);
}

export function removeContactService(id) {
  return axios.delete(`/contacts/${id}`).then((res) => res.data);
}
