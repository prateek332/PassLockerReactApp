import React from "react";
import { Card, Container, Row, Nav } from "react-bootstrap";
import discordIcon from "../../icons/discord.svg";
import githubIcon from "../../icons/github.svg";
import instagramIcon from "../../icons/instagram.svg";

export default function MyFooter() {

  const instagramProfile = `https://www.instagram.com/prateekator/`
  const discordProfile = `https://discordapp.com/users/880807984807174255`
  const githubProfile = `https://github.com/prateek332`

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Card className="footer-card">
          <Card.Header>Hello👋, I'm Prateek and I created this website. Thanks for visiting.</Card.Header>

          <Nav className="justify-content-center" variant="pills">

            <Nav.Item>
              <Nav.Link href={instagramProfile} target="_blank">
                <img
                  alt="Instagram Icon"
                  src={instagramIcon}
                  width={23}
                  height={23}
                  className="d-inline-block align-top"
                />{' '}my-instagram
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href={discordProfile} target="_blank">
              <img
                alt="DiscordIcon"
                src={discordIcon}
                width={23}
                height={23}
                className="d-inline-block align-top"
              />{' '}my-discord
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href={githubProfile} target="_blank">
              <img
                alt="GithubIcon"
                src={githubIcon}
                width={25}
                height={25}
                className="d-inline-block align-top"
              />{' '}my-github
              </Nav.Link>
            </Nav.Item>

          </Nav>

          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                Want to know more about me? Just hit me up in one of the above mentioned social apps
                and we'll have a chat.
              </p>

              <footer className="blockquote-footer">
                Site created and maintained by <cite title="Source Title">Prateek Parashar</cite>
              </footer>

            </blockquote>

          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}