import React, { useState } from "react";
import ContactUs from "./contactUs";
import PostContactUserFormError from "../ErrorHandlingFiles/postContactUserForm";
import axios from "axios";

const ContactUsFetch = (props) => {
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const GetSubmitDataFromContactUsForm = async (data) => {
    console.log("getDataFromForm", data);
    try {
      const firebaseApiUrl =
        "https://ecom-web-35eba-default-rtdb.firebaseio.com/contactUserData.json";

      const response = await axios.post(firebaseApiUrl, data);
      if (response.status >= 200 && response.status < 300) {
        const result = await response.data;
        setResult(result);
      } else {
        throw new Error("Something went wrong while sending data!");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {result && (
        <PostContactUserFormError
          variant="success"
          message="Data sent successfully"
        />
      )}
      {error && <PostContactUserFormError variant="danger" message={error} />}
      <ContactUs GetDataFromForm={GetSubmitDataFromContactUsForm} />
    </>
  );
};

export default ContactUsFetch;
