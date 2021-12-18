import Head from 'next/head'
import { Container, Row, Card, Button, Carousel } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17dce2169fc%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17dce2169fc%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22289.71875%22%20y%3D%22221.36000137329103%22%3E%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
      alt=""
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17dce2169fc%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17dce2169fc%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22289.71875%22%20y%3D%22221.36000137329103%22%3E%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17dce2169fc%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17dce2169fc%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22289.71875%22%20y%3D%22221.36000137329103%22%3E%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <h1>
          Bem vindo!
        </h1>
        <p>
          Meu nome é <code>Iraê Bornholdt</code>
        </p>
        <Container>
          <Row className="justify-content-md-between">
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Sobre</Card.Title>
                <Card.Text>
                <ul>
                  <li>37 anos</li>
                  <li>Natural de Ilhabela, São Paulo</li>
                  <li>Atualmente em Sorriso, MT</li>
                </ul>
                </Card.Text>
                <Button variant="primary" href="https://nextjs.org/docs">
                  Leia mais &rarr;
                </Button>
              </Card.Body>
            </Card>
            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Skills</Card.Title>
                <Card.Text>
                <ul>
                  <li>Gestão de Marketing digital</li>
                  <li>Design Gráfico</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Direção de Fotografia</li>
                  <li>React Native</li>
                </ul>
                </Card.Text>
                <Button variant="primary" href="https://nextjs.org/learn">
                  Veja todas &rarr;
                </Button>
              </Card.Body>
            </Card>

            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Portifólio</Card.Title>
                <Card.Text>
                  Alguns trabalhos e experimentos
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://github.com/iraeborn"
                >
                  Acesse meu github público &rarr;
                </Button>
              </Card.Body>
            </Card>

            <Card className="sml-card">
              <Card.Body>
                <Card.Title>Contato</Card.Title>
                <Card.Text>
                <ul>
                  <li>12 99222-6543 whatsapp</li>
                  <li>iraeborn@gmail.com</li>
                  <li>linked.in/in/iraebornholdt</li>
                </ul>
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://vercel.com/new?utm_source=github&utm_medium=example&utm_campaign=next-example"
                >
                  Bóra conversar &rarr;
                </Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Container>

      <footer className="cntr-footer">
        <a
          href="https://www.instagram.com/iraeborn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          @iraeborn
        </a>
      </footer>
    </Container>
  )
}
