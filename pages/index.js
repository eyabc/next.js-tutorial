import React, { Component } from 'react';
import faker from 'faker';
import { decorate, observable } from 'mobx';
import { observer } from 'mobx-react';

// observable 관찰 대상
class Data {
  avatar = faker.image.avatar();
  email = faker.internet.email();
  name = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  };
}

// mobx선언, 변수들을 observable으로 사용하겠다
decorate(Data, {
  avatar: observable,
  email: observable,
  name: observable,
});

// observer 관찰자
class Index extends Component {
  data = new Data();

  generate = () => {
    console.log('gen');
    const _this = this.data;
    _this.email = faker.internet.email();
    _this.name.firstName = faker.name.firstName();
    _this.avatar = faker.image.avatar();
  };

  render () {
    const { name, avatar, email } = this.data;
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

Index = observer(Index);

export default Index;