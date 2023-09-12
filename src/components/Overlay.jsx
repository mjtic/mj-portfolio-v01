import styled from 'styled-components';
const StyledOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  background-image: url('noise-tv.gif');
  z-index: -1;
  
`;

const StyledOverlay2 = styled.div`
  background-color: #ECBD53;
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 1;
  z-index: -1;
  
`;

function Overlay() {
  return <><StyledOverlay2/><StyledOverlay /></>
}
export default Overlay;