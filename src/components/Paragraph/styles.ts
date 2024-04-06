import styled from 'styled-components'
import { Props } from '.'

export const Paragraph = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: normal;
  line-height: 22px;
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  text-align: justify;

  @media (max-width: 768px) {
    text-align: center;
  }
`
