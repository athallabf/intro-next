import LikeButton from './like-button';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = [
    'Ada Lovelace',
    'Grace Hopper',
    'Margaret Hamilton',
    'Athalla Fadhil',
  ];

  return (
    <div>
      <Header title='NGOPS' />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}
