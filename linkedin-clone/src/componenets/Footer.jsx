import React from 'react';
import { Col, Container, Row, Image, Dropdown, Button, InputGroup } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import "./style/NavFooter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBriefcase, faCommentDots, faHome, faPlay, faQuestionCircle, faTh, faUserFriends } from '@fortawesome/free-solid-svg-icons'
class Footer extends React.Component {

    render() {
        return <div id="footer">
            <footer>

                <Container>
                    <hr />
                    <Image src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg" height="60" />
                    <Row md={5} sm={2}>
                        <Col>
                            <ul>
                                <Link to="/">
                                    <div>About</div>
                                </Link>
                            </ul>
                            <ul>
                                <Link to="/">
                                    <div>Community Guidelines</div>
                                </Link>
                            </ul>
                            <ul>
                                <Link to="/">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="link" className="m-0 p-0 text- text-black-50">Privacy & Terms</Dropdown.Toggle>
                                        <Dropdown.Menu className="super-colors">
                                            <Dropdown.Item eventKey="1">Privacy Policy</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">User Agreement</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Cookie Policy</Dropdown.Item>
                                            <Dropdown.Item eventKey="4">Copyright Policy</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </Link>
                            </ul>
                            <ul>
                                <Link to="/">
                                    <div>Sales Solutions</div>
                                </Link>
                            </ul>
                            <ul>
                                <Link to="/">
                                    <div>Safety Center</div>
                                </Link>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <Link to="/">
                                    <div>Accessibility</div>
                                </Link>
                            </ul>
                            <ul>
                                <Link to="/">
                                    <div>Careers</div>
                                </Link>
                            </ul>
                            <ul>
                                <Link to="/">
                                    <div>Ad Choices</div>
                                </Link>
                            </ul>
                            <ul>
                                <Link to="/">
                                    <div>Mobile</div>
                                </Link>
                            </ul>

                        </Col>
                        <Col>
                            <ul>
                                <Link to="/">
                                    <div>Talent Solutions</div>
                                </Link>
                            </ul>
                            <ul>
                                <Link to="/">
                                    <div>Marketing Solutions</div>
                                </Link>
                            </ul>
                            <ul>
                                <Link to="/">
                                    <div>Advertising</div>
                                </Link>
                            </ul>
                            <ul>
                                <Link to="/">
                                    <div>Small Business</div>
                                </Link>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
                                <Link to="/">
                                    <div> Questions?</div>
                                </Link>
                                <small>Visit our Help Center</small>
                            </ul>
                            <ul>
                                <Link to="/">
                                    <div>Manage your account and privacy</div>
                                </Link>
                                <small>Go to your Settings</small>
                            </ul>
                        </Col>
                        <Col>
                            <ul>

                                <small>Select Language</small>
                                <select class="custom-select">
                                    <option selected>English (English)</option>
                                    <option value="1">Italian</option>
                                    <option value="2">French</option>
                                    <option value="3">German</option>
                                </select>
                            </ul>
                        </Col>
                        <Col></Col>
                    </Row>
                    <p className="text-muted">LinkedIn Corporation © 2020</p>
                </Container>

            </footer>
        </div>;
    }
}

export default withRouter(Footer);