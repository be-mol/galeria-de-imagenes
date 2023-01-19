import Alert from 'react-bootstrap/Alert';

const Footer = () => {
    return (
        <Alert variant="info">
      <Alert.Heading>Hola! un gusto que hayas pasado por aquí.</Alert.Heading>
      <p>
        Esta es una galería de imágenes donde mostramos a los felinos más famosos del mundo.
      </p>
      <p className="mb-0">
        Además, queremos recordarte lo importante que es que cuides a los animales. Son necesarios y una buena compañia.
      </p>
    </Alert>
    )
}

export default Footer;