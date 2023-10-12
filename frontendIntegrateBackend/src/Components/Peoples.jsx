import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Peoples = () => {
  // const peoplesData = useLoaderData();
  // console.log(peoplesData);
  const [peoplesData, setPeoplesData] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => setPeoplesData(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("inside data", data);
        const newUser = [...users, data];
        setUsers(newUser);
        e.target.reset();
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <h2>Peoples: {peoplesData.length} </h2>
      {peoplesData.map((people) => (
        <Link to={`/data/${people.id}`} key={people.id}>
          {people?.personalInformation?.name}{" "}
        </Link>
      ))}
      {users.map((user) => (
        <h2 key={user.id}>{user.name} </h2>
      ))}
    </div>
  );
};

export default Peoples;
