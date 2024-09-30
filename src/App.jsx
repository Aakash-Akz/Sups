import { useState, useEffect } from "react";
import supabase from "../config/needClient.js";
import "./App.css";

function App() {
  const [fetchError, setError] = useState(null);
  const [needs, setneeds] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("Needs").select();

      if (error) {
        setError("Could not fetch data");
        setneeds(null);
        console.log(error);
      }
      if (data) {
        setneeds(data);
        setError(null);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        {fetchError && <p>{fetchError}</p>}
        {needs && (
          <div className="needs">
            {needs.map((need) => (
              <p>{need.Applainces}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
