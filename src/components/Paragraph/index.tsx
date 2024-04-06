import { Paragraph as ParagraphStyle } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Paragraph = ({ children, tipo = 'principal' }: Props) => (
  <ParagraphStyle tipo={tipo}>{children}</ParagraphStyle>
)

export default Paragraph
