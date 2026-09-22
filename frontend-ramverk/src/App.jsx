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
    { 
      titel: 'One Piece', 
      typ: 'Anime', 
      bild: 'https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg' 
    },
    { 
      titel: 'Attack on Titan', 
      typ: 'Manga', 
      bild: 'https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' 
    },
    { 
      titel: 'Death Note', 
      typ: 'Anime', 
      bild: 'https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' 
    },
    { 
      titel: 'Demon Slayer', 
      typ: 'Manga', 
      bild: 'https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' 
    }
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