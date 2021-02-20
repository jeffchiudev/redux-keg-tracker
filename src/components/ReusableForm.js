import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Keg Name'/>
        <input
          type='text'
          name='brand'
          placeholder='Keg Brand'/><br/>
        <input
          type='text'
          name='price'
          placeholder='Keg Price'/>
        <input
          type='text'
          name='flavor'
          placeholder='Keg Flavor'/>
        <input
          type='number'
          name='quantity'
          placeholder='# of pints left'/><br/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;