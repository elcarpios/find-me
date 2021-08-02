import styled from 'styled-components';

import { Pill } from 'styles/components';

const HEIGHT = '90px';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-height: ${HEIGHT};
`;

export { Header, Pill };