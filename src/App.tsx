import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const [alertVisibile, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibile && <Alert>My Alert</Alert>}
      <Button
        color="primary"
        onClick={() => setAlertVisibility(!alertVisibile)}
      >
        Click Me now nigga
      </Button>
    </div>
  );
};

export default App;
