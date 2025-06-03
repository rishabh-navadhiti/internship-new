import './app.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App() {
  console.log(crypto.randomUUID());
  
  const places = ['India', 'USA', 'Canada', 'Australia'];
  const contentStyle = {
    color: '#2a9d8f', 
    fontSize: '20px',
    textAlign: 'center',
  };
  const btnStyle = {
		color: 'white',
		backgroundColor: 'red'
	}

  const myName = "Rishabh";
  return (
    <div>
      <Header name = {myName} />
      <Content styles={contentStyle} places={places} />
      <Button btnStyle={btnStyle} text="Submit" />
      <Footer />
    </div>
  );
}

const Button = (props) => {
	return (
		<button style={props.btnStyle}>{props.text}</button>
	)
}
   