import React from 'react';
import themeOn from '../../assets/images/themeOn.svg'
import themeOff from '../../assets/images/themeOff.svg'
import { Icone } from '../UI';

const claro = <Icone src={themeOn} alt="tema claro" />
const escuro = <Icone src={themeOff} alt="tema escuro" />


export default ({tema}) => (tema ? escuro : claro)
