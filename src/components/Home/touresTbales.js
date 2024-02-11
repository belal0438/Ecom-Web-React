import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const TouresTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films");
        const result = await response.json();

        if (result.results) {
          const movieData = result.results.map((ele) => ({
            id: ele.episode_id,
            title: ele.title,
            date: ele.release_date,
            director: ele.director,
          }));

          setData(movieData);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
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
        <tbody>{TrandTd}</tbody>
      </Table>
    </div>
  );
};

export default TouresTable;
