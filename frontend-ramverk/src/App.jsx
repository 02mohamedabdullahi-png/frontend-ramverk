import { createSignal, For, Show } from 'solid-js';

function Kort(props) {
  return (
    <div>
      <img 
        src={props.bild} 
        alt={props.titel} 
        style={{ width: '120px', height: '170px', "object-fit": 'cover' }} 
      />
      <h3>{props.titel}</h3>
      <p>Typ: {props.typ}</p>
    </div>
  );
}

export default function App() {
  const [sokord, setSokord] = createSignal('');

  const katalog = [
    { 
      titel: 'Naruto', 
      typ: 'Anime', 
      bild: 'https://m.media-amazon.com/images/M/MV5BZTNjOWI0ZTAtOGY1OS00ZGU0LWEyOWYtMjhkYjdlYmVjMDk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' 
    },
    { 
      titel: 'Dragon Ball', 
      typ: 'Manga', 
      bild: 'https://m.media-amazon.com/images/M/MV5BN2VlNTdlMzQtYzE5OC00YmYwLTgyZTItYjEzMWY0ZDNjMTJhXkEyXkFqcGc@._V1_.jpg' 
    },
    { titel: 'One Piece', typ: 'Anime' },
    { titel: 'Attack on Titan', typ: 'Manga' },
    { titel: 'Death Note', typ: 'Anime' },
    { titel: 'Demon Slayer', typ: 'Manga' }
  ];

  const filtreradKatalog = () =>
    katalog.filter((item) =>
      item.titel.toLowerCase().includes(sokord().toLowerCase())
    );

  return (
    <div>
      <h1>Crunchyroll</h1>

      <input
        type="text"
        placeholder="Sök..."
        value={sokord()}
        onInput={(e) => setSokord(e.target.value)}
      />

      <For each={filtreradKatalog()}>
        {(item) => <Kort titel={item.titel} typ={item.typ} bild={item.bild} />}
      </For>

      <Show when={filtreradKatalog().length === 0}>
        <p>Inget hittades.</p>
      </Show>
    </div>
  );
}