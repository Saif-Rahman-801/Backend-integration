import { Link, useLoaderData } from "react-router-dom";

const Peoples = () => {
  const peoplesData = useLoaderData();
  console.log(peoplesData);
  return (
    <div>
      <h2>Peoples: {peoplesData.length} </h2>
      {peoplesData.map((people) => (
        <Link to={`/data/${people.id}`} key={people.id}>
          {people?.personalInformation?.name}{" "}
        </Link>
      ))}
    </div>
  );
};

export default Peoples;
