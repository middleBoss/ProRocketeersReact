import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';

const Header = (props) => {
  const { handleChange, handleSubmit } = props;
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row className="d-flex flex-sm-row flex-md-row m-2" form>
          <Col>
            <FormGroup className="m-0">
              <Input
                type="search"
                className="search-field"
                name="searchData"
                id="exampleSearch"
                placeholder="Enter username:"
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className="d-flex justify-content-center mb-0">
              <Button className="search-btn" color="secondary">
                Search
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

Header.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Header;
