import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/NavBar";
export default function NavBar() {
    return (
        <>
            <NavBar bg='light' variant='dark'>
                <Container>
                    <Navbar.Brand>
                        <Link className="link" to={'/'}>I</Link>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link>
                            <Link className="link" to={'/project'}>Проекты</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="link" to={'/about'}>Обо мне</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="link" to={'/reg'}>Регистрация</Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </NavBar>
        </>
    )
}