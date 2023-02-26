import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AuthServiceProps {}

const StyledAuthService = styled.div`
  color: pink;
`;

export function AuthService(props: AuthServiceProps) {
  return (
    <StyledAuthService>
      <h1>Welcome to AuthService!</h1>
    </StyledAuthService>
  );
}

export default AuthService;
