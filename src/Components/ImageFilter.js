import React from 'react';
import alimentacao from '../assets/images/alimentacao.svg'
import utilidades from '../assets/images/utilidades.svg'
import outros from '../assets/images/outros.svg'
import transporte from '../assets/images/transporte.svg'
import saude from '../assets/images/saude.svg'
import { Icone, IconeTema } from './UI';


export default (type) => {
  const Images = {
    Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
    Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
    Transporte: <IconeTema src={transporte} alt="Transportes" />,
    Saude: <IconeTema src={saude} alt="Saude" />,
    default: <IconeTema src={outros} alt="Outros" />
  };

  return (
    Images[type] || Images.default
  )
}
