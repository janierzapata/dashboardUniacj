import React from "react";
import GraphicLine from "../machines/graphics/GraphicLine"

export const FirstMachine = () => {
  return (
    <div>
      <h1 className="text-center">title</h1>
      <div className="container">
        <div className="card text-white bg-success mb-3 space-right col-4">
          <div className="card-header">Header</div>
          <div className="card-body">
            <GraphicLine />
          </div>
        </div>
        <div className="card text-white bg-success mb-3 space-right">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h4 className="card-title">Success card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card text-white bg-success mb-3">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h4 className="card-title">Success card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="card text-white bg-success mb-3 space-right">
          <div className="card-header">Header</div>
          <div className="card-body">
            <h4 className="card-title">Success card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
    </div>
  );
};
