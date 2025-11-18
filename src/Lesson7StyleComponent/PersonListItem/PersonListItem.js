import OnlineIcon from "../OnlineIcon/OnlineIcon";

const PersonListItem = ({ person }) => {
  const { personImage, personName, personLastName, isOnline } = person;

  return (
    <div>
      <img src={personImage} alt={personName} width="400" height="400" />
      <h3>
        Full Name: {personName} {personLastName}
      </h3>
      <div>
        isOnline: <OnlineIcon />
      </div>
    </div>
  );
};

export default PersonListItem;
