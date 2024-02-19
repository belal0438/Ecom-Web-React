import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const TouresTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("https://swapi.dev/api/films");
        if (!response.ok) {
          throw new Error("Somthin went wrong!");
        }
        const result = await response.json();
        if (result.results) {
          const movieData = result.results.map((ele) => ({
            id: ele.episode_id,
            title: ele.title,
            date: ele.release_date,
            director: ele.director,
          }));

          setData(movieData);
          setIsLoading(false);
        }
      } catch (error) {
        setError(error.message);
        console.error("Error fetching movie data:", error);
      }
      setIsLoading(false);
    };

    fetchMovieData();
  }, []);
  // console.log("data", data);
  const TrandTd = data.map((Ele) => (
    <tr key={Ele.id}>
      <td scope="row">{Ele.date}</td>
      <td>{Ele.title}</td>
      <td>{Ele.director}</td>
      <td>
        <Button variant="info" className="text-center text-light">
          BUY TICKETS
        </Button>{" "}
      </td>
    </tr>
  ));

  let content = <p>Found no movies</p>;

  if (data.length > 0) {
    content = <tbody>{TrandTd}</tbody>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading....</p>;
  }

  return (
    <div
      style={{
        fontFamily: "Times New Roman",
        marginRight: "4rem",
        marginLeft: "4rem",
      }}>
      <h3 className="text-center mt-4 mb-4">Toures</h3>
      <Table className="text-center ms-5 me-5">
        <thead></thead>
        {content}
      </Table>
    </div>
  );
};

export default TouresTable;
