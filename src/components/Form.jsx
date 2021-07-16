import React from "react";

function Form(props) {
  return (
    <>
      <form onSubmit={props.formSubmitted}>
        <label htmlFor="searchTerm">Search Term</label>
        <input
          onChange={(event) => props.searchTermChanged(event.target.value)}
          value={props.searchTerm}
          className="u-full-width"
          type="text"
          id="searchTerm"
          name="searchTerm"
        />
        <button type="submit">Search</button>
      </form>
      <label>sort by name: </label>
      <button type="click" onClick={(event) => props.onSorted("asc", "name")}>
        asc
      </button>
      <button type="click" onClick={(event) => props.onSorted("desc", "name")}>
        dec
      </button>
      <br></br>
      <label>sort by numeric Code: </label>
      <button type="click" onClick={(event) => props.onSorted("asc", "code")}>
        asc
      </button>
      <button type="click" onClick={(event) => props.onSorted("desc", "code")}>
        dec
      </button>
    </>
  );
}
export default Form;
