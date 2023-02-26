import { render } from '@testing-library/react';

import AuthService from './auth-service';

describe('AuthService', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthService />);
    expect(baseElement).toBeTruthy();
  });
});
