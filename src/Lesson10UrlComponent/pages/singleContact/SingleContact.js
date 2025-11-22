import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
const contacts = [
  {
    name: "Vova",
    lastName: "Ziabkin",
    id: "1",
  },
  {
    id: "2",
    name: "Kamilla",
    lastName: "Mishchenko",
  },
  {
    id: "3",
    name: "Mia",
    lastName: "Moore",
  },
];
const getSingleContact = (id) => contacts.find((contact) => contact.id === id);

const SingleContact = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["singleContact", id],
    queryFn: () => getSingleContact(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>Contact not found</div>;

  return (
    <div>
      <p>
        name: <b>{data.name}</b>
      </p>
      <p>
        last name: <b>{data.lastName}</b>
      </p>
    </div>
  );
};

export default SingleContact;
