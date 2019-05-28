import React from "react";


const Meteors = (props) => (
  <div className="container">
    {/* <p>{`Viewing ${props.resultsFound ? props.offset+1 : 0}-${props.offset+props.numberOfResultsOnPage} of ${props.resultsFound} results found.`}</p> */}
    {props.resultsFound !== 0 ? <table className="table">
      <thead className="bg-warning">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Id</th>
          <th scope="col">Name Type</th>
          <th scope="col">Rec Class</th>
          <th scope="col">Mass (g)</th>
          <th scope="col">Fall</th>
          <th scope="col">Year</th>
          <th scope="col">Latitude</th>
          <th scope="col">Longtitude</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(meteor => {
              return (
                <tr key={meteor.id}>
                  <td>{meteor.name}</td>
                  <td>{meteor.id}</td>
                  <td>{meteor.nametype}</td>
                  <td>{meteor.recclass}</td>
                  <td>{meteor.mass}</td>
                  <td>{meteor.fall}</td>
                  <td>{meteor.year}</td>
                  <td>{meteor.reclat}</td>
                  <td>{meteor.reclong}</td>
                </tr>
              );
            })}
      </tbody>
    </table> : <h1 className="notFound">Not Found! Try again.</h1>}
    
    
  </div>
);

export default Meteors;
