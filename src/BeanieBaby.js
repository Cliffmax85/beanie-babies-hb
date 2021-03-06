import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    <Link to={`/beanie-babies/${beanieBaby.id}`}>
      <div className='beanie-baby'>
        <p>{beanieBaby.title}</p>
        <img src={beanieBaby.image} />
      </div>
    </Link>
  );
}
