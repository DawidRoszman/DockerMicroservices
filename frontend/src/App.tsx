import { useEffect, useState } from "react";
import "./App.css";

interface Database {
  Database: string;
}

function App() {
  const [data, setData] = useState<Database[] | null>(null);

  useEffect(() => {
    fetch("/api").then((res) => {
      res.json().then((data) => {
        console.log(data);
        setData(data);
      });
    });
  }, []);

  return (
    <>
      <h1>Welcome to the app </h1>
      <h2>Database info: </h2>
      <ul>
        {data &&
          data.map((item: Database, idx: number) => {
            return <li key={idx}>{item.Database}</li>;
          })}
      </ul>
    </>
  );
}

export default App;
