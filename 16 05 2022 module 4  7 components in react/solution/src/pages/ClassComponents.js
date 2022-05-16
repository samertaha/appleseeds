import React from 'react';

class Button extends React.Component {
  render() {
    return <button style={this.props.style}> {this.props.text}</button>;
  }
}
class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        <img src={this.props.image} alt='' />
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <a href={this.props.links[0]}>SHARE</a>
        <a href={this.props.links[1]}>EXPLORE</a>
      </div>
    );
  }
}

class ClassComponents extends React.Component {
  constructor(props) {
    super(props);

    // We declare the state as shown below

    this.state = {
      x: 'This is x from state',
      y: 'This is y from state',
    };
  }

  render() {
    const style = { fontWeight: 'bold' };
    return (
      <>
        <h1>Buttons</h1>
        <Button style={style} text={'Important'} />
        <Button text={'Not Important'} />
        <Card
          image='https://picsum.photos/300/200?random=1'
          title='title1'
          description='description1'
          links={['#', '#']}
        />
        <Card
          image='https://picsum.photos/300/200?random=2'
          title='title2'
          description='description2'
          links={['#', '#']}
        />
        <Card
          image='https://picsum.photos/300/200?random=3'
          title='title3'
          description='description3'
          links={['#', '#']}
        />
      </>
    );
  }
}

export default ClassComponents;
