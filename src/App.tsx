import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Lagos", "Abuja", "Kano", "Ibadan", "Port Harcourt"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"/>
    </div>
  );
}

export default App;
