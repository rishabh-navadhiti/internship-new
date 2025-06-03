import './App.css'
import Profile from './components/Profile.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



const App = () => {
  const profiles = [
    {
      name: "Henry Cavill",
      age: "42",
      profession: "Superman (actor)",
      imgSrc: "https://t0.gstatic.com/images?q=tbn:ANd9GcTzEMn9FI59qysZbAAnImz7GVhhx2Z2rd7xdyB5FXSnDh3YtbIa"
    },
    {
      name: "Virat Kohli",
      imgSrc: "https://i.pinimg.com/736x/1b/28/2c/1b282ce29d313ab6f03b311fb3d5033f.jpg",
      age: "38",
      profession: "Cricketer"
    },
    {
      name: "Christian Bale",
      age: "49",
      profession: "Actor",
      imgSrc: "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/67068/66879/ss3447522_-_photograph_of_christian_bale_available_in_4_sizes_framed_or_unframed_buy_now_at_starstills__22180__43985.1394500559.jpg?c=2&imbypass=on"
    },
    {
      name: "Kylian Mbappé",
      age: "24",
      profession: "Footballer",
      imgSrc: "https://imageio.forbes.com/specials-images/imageserve/626c7cf3616c1112ae834a2b/0x0.jpg?format=jpg&crop=1603,1603,x1533,y577,safe&height=416&width=416&fit=bounds"
    }, 
    {
      name: "AB de Villiers",
      age: "39",
      profession: "Cricketer",
      imgSrc: "https://7cricinr.com/blog/wp-content/uploads/2024/03/AB-de-Villiers.jpg"
    }
  ];

  return (
    <div className="content">
      <Header />

      <div className="container">
        {profiles.map((profile, i) => {
          return (
            <Profile
              key = {i}
              name = {profile.name}
              age = {profile.age}
              profession = {profile.profession}
              imgSrc = {profile.imgSrc}
              />
          )
        })}
        
      </div>


      <Footer />
    </div>
  );
}

export default App;