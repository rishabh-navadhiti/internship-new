import './app.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';

export default function App() {
  const contentStyle = {
    color: '#2a9d8f', // teal shade for better appearance
    fontSize: '20px',
    textAlign: 'center',
  };

  const myName = "Rishabh";
  return (
    <div>
      <Header name = {myName} />
      <Content styles={contentStyle} />
      <Footer />
    </div>
  );
}
   