import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';
import { ROUTES } from 'constants/routes';


const PageNotFound = () => {
  return (
    <S.Container>
      <h1>Sorry bro, parece que te has perdido</h1>
      <Link to={ROUTES.home}>Clica aquí para volver a un lugar seguro</Link>
      <br /><br />
      <div style={{ width: '100%', height: 0, paddingBottom: '80%', position: 'relative' }}>
        <iframe src="https://giphy.com/embed/3oz8xI5c0K0hFPwmGI" width="100%" height="100%" style={{ position: 'absolute', left: 0 }} frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/computer-windows-blue-screen-KlrMS4vyq5KSY">via GIPHY</a>
      </p>
    </S.Container>
  );
};

export default PageNotFound;