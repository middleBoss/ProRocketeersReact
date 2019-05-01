import React, { PureComponent, Fragment } from 'react';
import Header from '../components/Header';

class HeaderContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Fragment>
        <Header isOpen={this.state.isOpen} toggle={this.toggle} />
      </Fragment>
    );
  }
}

export default HeaderContainer;
