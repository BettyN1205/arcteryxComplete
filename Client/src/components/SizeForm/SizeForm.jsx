import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "./SizeForm.scss"

function SizeForm({ onSizeSubmit, showModal, handleClose }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bodyShape, setBodyShape] = useState("");
  const [fitPreference, setFitPreference] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!weight || !height || !bodyShape || !fitPreference) {
      setError("Please fill out all fields");
    } else {
      let errorMessage = "";
      if (weight < 40 || weight > 150) {
        errorMessage =
        "We appreciate your interest! However, our size range for this product may not cover your weight. We encourage you to explore other products in our collection.";
    } else if (height < 120 || height > 220) {
        errorMessage =
          "We appreciate your interest! However, our size range for this product may not cover your height. We encourage you to explore other products in our collection.";
      }

      if (errorMessage) {
        setError(errorMessage);
      } else {
        onSizeSubmit({ weight, height, bodyShape, fitPreference });
        handleClose();
        setError("");
      }
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Size Calculator</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="weight">
            <Form.Label>Weight (in kg):</Form.Label>
            <Form.Control
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
            />
          </Form.Group>
          <Form.Group controlId="height">
            <Form.Label>Height (in cm):</Form.Label>
            <Form.Control
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter height"
            />
          </Form.Group>
          <Form.Group controlId="bodyShape">
            <Form.Label>Body Shape:</Form.Label>
            <Form.Control
              as="select"
              value={bodyShape}
              onChange={(e) => setBodyShape(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Rectangle">Rectangle/Straight</option>
              <option value="Hourglass">Hourglass</option>
              <option value="Pear">Pear/Triangle</option>
              <option value="Apple">Apple/Round</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Fit Preference:</Form.Label>
            <Form.Check
              type="radio"
              label="Tight"
              name="fitPreference"
              value="Tight"
              checked={fitPreference === "Tight"}
              onChange={(e) => setFitPreference(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="Loose"
              name="fitPreference"
              value="Loose"
              checked={fitPreference === "Loose"}
              onChange={(e) => setFitPreference(e.target.value)}
            />
          </Form.Group>
          <button variant="primary" type="submit">
            Find My Size
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SizeForm;
