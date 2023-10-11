import { useLoaderData } from "react-router-dom";

const People = () => {
  const peopleData = useLoaderData();
  console.log(peopleData);
  return (
    <div>
      <h2>{peopleData.personalInformation.email} </h2>
    </div>
  );
};

export default People;
