import "./Details.scss";
import { useState, useEffect } from "react";
import SizeForm from "../../components/SizeForm/SizeForm";
import { Button } from "react-bootstrap";

export default function Details() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [recommendedSize, setRecommendedSize] = useState("");
  const handleSizeSubmit = (userData) => {
    const { weight, height, bodyShape, fitPreference } = userData;

    let calculatedSize = "";

    if (
      (weight > 70 &&
        height > 170 &&
        bodyShape === "Hourglass" &&
        fitPreference === "Tight") ||
      (weight > 65 &&
        height > 165 &&
        bodyShape === "Rectangle" &&
        fitPreference === "Tight")
    ) {
      calculatedSize = "S";
    } else if (
      (weight > 80 &&
        height > 180 &&
        bodyShape === "Pear" &&
        fitPreference === "Loose") ||
      (weight > 85 &&
        height > 175 &&
        bodyShape === "Triangle" &&
        fitPreference === "Loose")
    ) {
      calculatedSize = "L";
    } else if (
      weight > 75 &&
      height > 175 &&
      bodyShape === "Hourglass" &&
      fitPreference === "Loose"
    ) {
      calculatedSize = "M";
    } else if (
      weight > 90 &&
      height > 185 &&
      bodyShape === "Rectangle" &&
      fitPreference === "Loose"
    ) {
      calculatedSize = "XL";
    } else {
      calculatedSize = "M";
    }

    setRecommendedSize(calculatedSize);
  };

  return (
    <div className="size">
      <div className="details" onClick={handleShow}></div>
      {recommendedSize ? (
        <p className="size__recommended">Recommended size: {recommendedSize}</p>
      ) : null}

      <SizeForm
        showModal={showModal}
        handleClose={handleClose}
        onSizeSubmit={handleSizeSubmit}
      />
    </div>
  );
}
