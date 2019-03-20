import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.farms array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="farm">farm Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="farm"
          list="Farmers"
          type="text"
          className="form-control"
          placeholder="Type a Farmer in to begin"
          id="Farm"
        />
        <datalist id="farmers">
          {props.farms.map(farm => (
            <option value={farm} key={farm} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
