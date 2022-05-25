import React, { Component } from 'react';
import axios from 'axios';
export default class DynamicVal extends Component {
  state = { iFrameLink: null };

  // componentDidMount() {
  //   console.log('mount');
  //   this.fetchIFrameLink();
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log('update1');

    if (prevProps.match.params.category !== this.props.match.params.category) {
      this.fetchIFrameLink();
    }
  }

  fetchIFrameLink = async () => {
    const category = this.props.match.params.category;

    try {
      const { data } = await axios.get(
        `https://www.tronalddump.io/tag/${category}`
      );
      const iFrameLink = data._links.self.href;
      console.log('fetching link');
      this.setState({ iFrameLink });
    } catch (err) {}
  };

  render() {
    return (
      <div>
        <h1>DynamicVal</h1>
        {this.state.iFrameLink && (
          <iframe src={this.state.iFrameLink} width='100%' height='500px' />
        )}
      </div>
    );
  }
}
