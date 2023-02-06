import './App.css';
import {NavBar} from "./Components/NavBar";
import {Banner} from './Components/Banner';
import {About} from './Components/About';
import {Bio} from './Components/Bio';
import {Qualifications} from './Components/Qualifications';
import {Affiliations} from './Components/Affiliations';
import {Services} from './Components/Services';
import {Contact} from './Components/Contact';
import {Map} from './Components/Map';
import {Practice} from './Components/Practice';
import {Footer} from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <br/><br/>
      <Banner/>
      <br/><br/>
      <About/>
      <br/><br/>
      <Bio/>
      <br/><br/>
      <Qualifications/>
      <br/><br/>
      <Affiliations/>
      <br/><br/>
      <Services/>
      <br/><br/>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            <Practice/>
          </Col>
          <Col xs={12} sm={12} md={12} lg={8} xl={8}>
            <Map/>
          </Col>
        </Row>
      </Container>
      <br/>
      <Contact/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
