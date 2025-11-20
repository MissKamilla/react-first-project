import { useEffect, useState } from "react";
import { getContactsList } from "./api/api";
import { useFetch } from "./hooks/useFetch";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030/";

const MainComponent = () => {
  const [data, setData] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const { data: contacts, isLoading, error } = useFetch("contacts");

  useEffect(() => {
    setData(contacts);
  }, [contacts]);

  const addContact = async () => {
    setIsPostLoading(true);
    const payload = {
      name: "Kamilla",
      lastName: "Mishchenko",
      about: "lorem ipsum dolor sit amet, consectetur adip",
    };
    const response = await axios.post("contacts", payload);
    console.log(response);
    setData((prev) => [...prev, response.data]);
    setIsPostLoading(false);
  };

  if (error) {
    return <div>something went wrong: {error}</div>;
  }

  const deleteContact = async (id) => {
    await axios.delete(`contacts/${id}`);
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const editContact = async (id) => {
    const payload = {
      name: "Vova",
      lastName: "Mishchenko",
      about: "lorem ipsum dolor sit amet, consectetur adip",
    };
    const response = await axios.put(`contacts/${id}`, payload);
    setData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return response.data;
        }
        return item;
      })
    );
  };

  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          data?.map((contact) => (
            <li key={contact.id}>
              <p>
                {contact.name} {contact.lastName}
              </p>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
              <button onClick={() => editContact(contact.id)}>Edit</button>
            </li>
          ))
        )}
      </ul>
      <button disabled={isPostLoading} onClick={addContact}>
        {isPostLoading ? "Loading" : "Add"}
      </button>
    </div>
  );
};

export default MainComponent;
