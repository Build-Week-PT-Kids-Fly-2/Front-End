import React from "react";

const SubForm = props => {
  return (
    <div className="subform">
      {props.subform.map(form => (
        <div className="form" key={form.id}>
          <h2>{form.title}</h2>
          <p>{form.body}</p>
        </div>
      ))}
    </div>
  );
};

export default SubForm;