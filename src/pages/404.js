import React from "react";

import Button from "elements/Button";

export default function NotFound() {
  return (
    <div className="container">
      <div
        className="row aling-items-center justify-content-center text-center"
        style={{ height: "100vh" }}
      >
        <div className="col-4">
          Are you Lost?
          <p className="pt-4">
            Some page are still in development, maybe you can go back if you
            want
          </p>
          <div>
            <Button
              className="btn mt-5"
              type="button"
              onClick={() => window.history.back()}
              isLight
            >
              Yes, Bring me to safe place pelase
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
