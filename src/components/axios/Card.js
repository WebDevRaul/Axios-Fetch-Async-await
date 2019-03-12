import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


const Card = ({
  title,
  subtitle,
  type,
  name,
  value,
  onChange,
  buttonOne,
  buttonTwo,
  result,
  onClickBtnOne,
  onClickBtnTwo,
  error,
}) => {

  const input = (
    <div className='form-group'>
      <h5>Enter an ID number from 1 - 100</h5>
      <div className='row'>
        <div className='col-3'>
          <input
            type = {type}
            className={classnames('form-control form-control-xsm', {'is-invalid' : error})}
            name = {name}
            value = {value}
            onChange = {onChange}
          />
        </div>
      </div>
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )

  const btnOne = (
    <button 
      className='btn btn-primary'
      onClick={onClickBtnOne}
    >{buttonOne}</button>
  );
  const btnTwo = (
    <button 
      className='btn btn-secondary'
      onClick={onClickBtnTwo}
    >{buttonTwo}</button>
  );

  return (
    <div className="card">
      <div className="card-header">
        <h5>{title}</h5>
        <p className="card-text">{subtitle}</p>
      </div>
      <div className="card-body">
        <div>
          {name ? input : null}
        </div>
        <div>
          {btnOne}
          {btnTwo}
        </div>
      </div>
      <div className='card-footer'>
        <div>
          {result}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonOne: PropTypes.string.isRequired,
  onClickBtnOne: PropTypes.func.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  buttonTwo: PropTypes.string,
  onClickBtnTwo: PropTypes.func,
  result: PropTypes.object.isRequired,
  error: PropTypes.string
};

Card.defaultProps = {
  type: 'text'
};

export default Card;