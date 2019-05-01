import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SearchForm from '../components/SerchForm';

class SearchFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchData: '',
    };
  }

  handleChange = (event) => {
    const { name } = event.target;
    const searchData = event.target.value;
    this.setState({
      [name]: searchData,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const { searchData } = this.state;
    history.push(`/${searchData}`);
  };

  render() {
    return <SearchForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />;
  }
}

SearchFormContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(SearchFormContainer);
