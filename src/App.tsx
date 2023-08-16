import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Alert>
        Hello <a href="www.google.com">World</a>
      </Alert>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        Click Me now nigga
      </Button>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        Click Me now nigga
      </Button>
      <Button color="info" onClick={() => console.log("Clicked")}>
        Click Me now nigga
      </Button>
      <Button onClick={() => console.log("Clicked")}>Default</Button>
    </div>
  );
};

export default App;
