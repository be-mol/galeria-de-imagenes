import Header from './components/Header';
import Cards from './components/Card'
import Footer from './components/Footer'
import React from 'react';

function App() {
  return (
    <div className='container'>
    <div>
      <Header title = "Galería de Imágenes con React"/>
    </div>
    <div className='cartas'>
      <Cards image = "https://cdn.pixabay.com/photo/2018/03/26/20/49/tiger-3264048_960_720.jpg" cardTitle = "El Tigre" cardDescription = "Uno de los animales más fuertes y feroces de la selva." />
      <Cards image = "https://cdn.pixabay.com/photo/2018/07/31/11/14/lion-3574819_960_720.jpg" cardTitle = "El León" cardDescription = "El rey de la selva. Temido por el resto de animales en la sabana." />
      <Cards image = "https://cdn.pixabay.com/photo/2016/02/10/16/37/cat-1192026_960_720.jpg" cardTitle = "El Gato" cardDescription = "Un felino domesticado. Si tienes uno, debe ser la alegría de tu casa" />
    </div>
    <div className='footer'>
      <Footer />
    </div>

    </div>
  );
}

export default App;
