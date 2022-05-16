import styles from './styles.css';

const Card = ({ image, title, description, links }) => {
  return (
    <>
      <div className='card'>
        <img src={image} alt='' />
        <h1>{title}</h1>
        <p>{description}</p>
        <a href='{links[0]}'>SHARE</a>
        <a href='{links[1]}'>EXPLORE</a>
      </div>
    </>
  );
};
const Cards = () => {
  return (
    <>
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
};

export default Cards;
