import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const ArrOfMusice = [
  {
    Date: "JUL16",
    City: "DETROIT, MI",
    Theater: "DTE ENERGY MUSIC THEATRE",
  },

  {
    Date: "JUL19",
    City: "TORONTO,ON",
    Theater: "BUDWEISER STAGE",
  },

  {
    Date: "JUL22",
    City: " BRISTOW, VA",
    Theater: "JIGGY LUBE LIVE",
  },
  {
    Date: "JUL 29",
    City: " PHOENIX, AZ",
    Theater: "AK-CHIN PAVILION",
  },
  {
    Date: "AUG 2",
    City: " LAS VEGAS, NV",
    Theater: "T-MOBILE ARENA",
  },
];

const TrandTd = ArrOfMusice.map((Ele, index) => (
  <tr key={index}>
    <td scope="row">{Ele.Date}</td>
    <td>{Ele.City}</td>
    <td>{Ele.Theater}</td>
    <td>
      <Button variant="info" className="text-center text-light">
        BUY TICKETS
      </Button>{" "}
    </td>
  </tr>
));

const TouresTable = () => {
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
