import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

function Layout(props) {
  return (
      <Container fluid>
        <Header>

        </Header>
        <div className="main">
            {props.children}
        </div>
        <Footer>

        </Footer>
      </Container>
  );
}

export default Layout;
