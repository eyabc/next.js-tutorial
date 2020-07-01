import React, { Component } from 'react';

const size = 200;

class ProfileImage extends Component {
  state = {};
  constructor (props) {
    super(props);
    const state = this.state;
    state.width = state.height = props.size || size;
    state.url = props.url || `https://placeimg.com/${state.width}/${state.height}/any`;
  }
  render() {
    const {url, width, height} = this.state;
    const style = {
      display: 'inline-block',
      width, height,
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      borderRadius: '50%'
    };
    return (
      <span style={style}/>
    )
  }
}

export default ProfileImage;