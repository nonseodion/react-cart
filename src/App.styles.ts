import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin: 40px
`;

export const StyledButton = styled(IconButton)`
  z-index: 100;
  position: fixed;
  top: 20px;
  right: 20px;
`;