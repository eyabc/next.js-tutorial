import React, { Component } from 'react';
import faker from 'faker';

class Index extends Component {
  state = {
    name: faker.name.findName(),
    avatar: faker.image.avatar(),
    email: faker.internet.email(),
  };

  generate = () => {
    this.setState({
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
    });
  };

  render () {
    const { name, avatar, email } = this.state;
    return (
      <div>
        <h1>Faker Demo</h1>

        <dl className="row">
          <dt className="col-sm-3">Avatar</dt>
          <dd className="col-sm-9">
            <img src={ avatar } alt=""/>
          </dd>
          <dt className="col-sm-3">Name</dt>
          <dd className="col-sm-9">{ name }</dd>
          <dt className="col-sm-3">Email</dt>
          <dd className="col-sm-9">{ email }</dd>
        </dl>

        <button onClick={ this.generate }>Generate</button>
      </div>
    );
  }
}

export default Index;