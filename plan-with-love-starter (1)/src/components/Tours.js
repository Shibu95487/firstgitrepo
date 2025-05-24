import Card from "./Card";// Make sure the import is correct
import React from "react";

function Tours({ tours }) {
  return (
    <div>
      <div>
        <h2>Plan With Love</h2>
      </div>
      <div>
        {
          tours.map((tour) => {
            return <Card key={tour.id} {...tour} />;  // Ensure you pass a unique key for each element
          })
        }
      </div>
    </div>
  );
}

export default Tours;
