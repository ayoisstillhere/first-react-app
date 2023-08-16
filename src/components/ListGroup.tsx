function ListGroup() {
  const items = ["Lagos", "Abuja", "Kano", "Ibadan", "Port Harcourt"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
