const cookieController = require('../server/controllers/cookieController.js');

describe('cookieController.setSSIDCookie', () => {
    it('should set the SSID cookie with a future expiration date', () => {
        const mockRequest = {};
        const mockResponse = {
          cookie: jest.fn(),
        };
        const mockNext = jest.fn();
    
        cookieController.setSSIDCookie(mockRequest, mockResponse, mockNext);
    
        const expirationDate = mockResponse.cookie.mock.calls[0][2].expires;
    
        expect(expirationDate).toBeInstanceOf(Date);
        expect(expirationDate.getTime()).toBeGreaterThan(Date.now());
      });
  
});

