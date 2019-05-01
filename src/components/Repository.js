import React from 'react';
import PropTypes from 'prop-types';
import InformationValidation from './InformationValidation';

const Repository = (props) => {
  const { repository } = props;
  return (
    <div className="repository">
      <h3 className="repository-name">
        Repository name: <span>{InformationValidation(repository.name)}</span>
      </h3>
      <p className="technology">
        Technology:
        {repository.primaryLanguage ? (
          <span style={{ color: repository.primaryLanguage.color }}>
            &#32;{InformationValidation(repository.primaryLanguage.name)}
          </span>
        ) : (
          'Information is absent'
        )}
      </p>
      <p className="repository-description">
        Description: <span>{InformationValidation(repository.description)}</span>
      </p>
    </div>
  );
};

Repository.propTypes = {
  repository: PropTypes.object.isRequired,
};

export default Repository;
