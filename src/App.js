import logo from './logo.svg';
import data from "./data";
import Main from "./components/Main";
import Header from "./components/Header";
import './App.css';

export default function App() {
  const main = data.map(item => {
      return (
          <Main 
              key = {item.id}
              item = {item}
          />
      )
  })
      return (
          <div>
              <Header />
              {main}
          </div>
  )
}
