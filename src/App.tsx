import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Alert>Hello <a href="www.google.com">World</a></Alert>
      <Button className="btn btn-primary">
        Click Me now nigga
      </Button>
      <Button className="btn btn-danger">
        Click Me now nigga
      </Button>
      <Button className="btn btn-info">
        Click Me now nigga
      </Button>
    </div>
  );
};

export default App;
