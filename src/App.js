import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function CatCard(props) {
  return (
    <div style={{ width: "18rem", border: "2px solid black" }}>
      <img src= {props.cat.image} width={150} height={150} />
      <div>
        <div>{props.cat.name}</div>
        <div>{props.cat.description}</div>
      </div>
    </div>
  );
}

const catData = [
  {
    name: "Abyssinian",
    image: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
    description:
      "The Abyssinian is easy to care for, and a joy to have in your home. They're affectionate cats and love both people and other animals.",
  },
  {
    name: "Aegean",
    image: "https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg",
    description:
      "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding.",
  },
];

function CatFeed() {
  return (
    <div>
      {
        catData.map((link)=> {
          return <CatCard cat = {link}/>;})
      }
    </div>
  );
}

function App() {
  return (
    <div>
      <CatFeed />
    </div>
  );
}

export default App;
