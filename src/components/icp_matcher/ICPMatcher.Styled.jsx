import styled from 'styled-components'

const StyledICPMatcher = styled.div`
  width: 105px;
  height: 10px;
  background-color: rgb(${props => props.colorHex[0]},${props => props.colorHex[1]},${props => props.colorHex[2]});
  border-radius: 8px;

`

export default StyledICPMatcher