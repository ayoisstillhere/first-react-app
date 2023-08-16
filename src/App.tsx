import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const [alertVisibile, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibile && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Click Me now nigga
      </Button>
    </div>
  );
};

export default App;
