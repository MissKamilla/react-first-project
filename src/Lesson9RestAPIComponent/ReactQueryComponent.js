import { useEffect, useState } from "react";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { addContacts, getContactsList } from "./api/api";

axios.defaults.baseURL = "http://localhost:3030/";

const ReactQueryComponent = () => {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["contactsList"],
    queryFn: getContactsList,
    // refetchInterval: 2000,
  });

  const { mutateAsync } = useMutation({
    mutationFn: (payload) => addContacts(payload),
  });

  const addNewContact = async () => {
    const payload = {
      name: "Mia",
      lastName: "Moore",
      about: "lorem ipsum dolor sit amet, consectetur adip",
    };

    try {
      await mutateAsync(payload);
      await refetch();
    } catch (error) {}
  };

  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {isFetching ? (
          <div>Loading...</div>
        ) : (
          data?.map((contact) => (
            <li key={contact.id}>
              <p>
                {contact.name} {contact.lastName}
              </p>
              <button>Delete</button>
              <button>Edit</button>
            </li>
          ))
        )}
      </ul>
      <button onClick={addNewContact}>{"Add"}</button>
    </div>
  );
};

export default ReactQueryComponent;
