import styled from 'styled-components'
import { Props } from '.'

export const Paragraph = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: normal;
  line-height: 22px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  text-align: justify;
`
