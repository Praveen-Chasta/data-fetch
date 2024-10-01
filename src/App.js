import React, { useEffect, useState } from "react";


function App() {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const res1 = await fetch("https://api.apis.guru/v2/list.json");
        const reqData1 = await res1.json();
        setData1(reqData1);

      
        const res2 = await fetch("https://api.apis.guru/v2/list.json");
        const reqData2 = await res2.json();
        setData2(reqData2);

    
        setMessage("Fetch Completed");
      } catch (error) {
        console.error("Error fetching data:", error);
        setMessage("Error occurred during fetching");
      }
    };


    fetchData();
  }, []); 

  return (
    <>
      {/* <p>JSON Data 1: {JSON.stringify(data1)}</p>
      <p>JSON Data 2: {JSON.stringify(data2)}</p> */}
      <p>JSON Data : {message}</p>
    </>
  );
}

export default App;







// aryan@aiplanet@.com