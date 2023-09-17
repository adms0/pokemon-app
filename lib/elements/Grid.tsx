import PropTypes from 'prop-types'
import {StyledGrid, StyledGridContent} from '../styles/StyledGrid'

interface GridProps {
  children: React.ReactNode
}

const Grid: React.FC<GridProps> = ({children}) => {
  return (
    <StyledGrid>
      <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
  )
}

export default Grid