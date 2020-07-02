import React, { Component } from 'react';
import faker from 'faker';
import { action, decorate, observable } from 'mobx';
import { observer } from 'mobx-react';

// observer 관찰
@observer
class Index extends Component {
  @observable avatar = faker.image.avatar();
  @observable email = faker.internet.email();
  @observable name = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  };

  @action.bound
  generate = () => {
    this.email = faker.internet.email();
    this.name.firstName = faker.name.firstName();
    this.avatar = faker.image.avatar();
  };

  render () {
    const { name, avatar, email } = this;
    return (
      <div>
        <h1>Faker Demo</h1>

        <dl className="row">
          <dt className="col-sm-3">Avatar</dt>
          <dd className="col-sm-9">
            <img src={ avatar } alt="avatar"/>
          </dd>
          <dt className="col-sm-3">Name</dt>
          <dd className="col-sm-9">{ name.firstName } { name.lastName }</dd>
          <dt className="col-sm-3">Email</dt>
          <dd className="col-sm-9">{ email }</dd>
        </dl>

        <button className="btn btn-primary" onClick={ this.generate }>Generate</button>
      </div>
    );
  }
}

export default Index;