import React, { Component } from 'react';
import Link from 'next/link';

import ProfileImage from '../components/ProfileImage';


class Index extends Component {
  render () {
    return (
      <div>
        <h1>Index</h1>
        <button className="btn btn-primary">Button</button>
        <div>
          <ProfileImage />
          <ProfileImage size={ 40 }/>
          <ProfileImage url="https://placeimg.com/300/300/any"/>
        </div>
      </div>
    );
  }
}

export default Index;