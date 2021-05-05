import "./App.css";
import Profile from "./compo/Profile";
import Photo  from './compo/photo.jpg'



function App() {
  
  const fullName = "Sakka Ines";
  
  const bio = `25 Ans ! kairouan`;
  
  const profession = " Étudiante";

  const show = (nom) => {
    alert(nom)
  }
  return (
    <div className="App">
      <Profile className="profile"nom={fullName} bio={bio} profession={profession} show={show}>
      <img  src={Photo} alt='en cours de telèchargement ' width="350"/> 
      </Profile>
      
    </div>
  );
}

export default App;
