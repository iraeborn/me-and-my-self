import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'

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
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
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
