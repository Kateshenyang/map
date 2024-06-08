import { ErrorRepository } from '../error.js';

describe('ErrorRepository', () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
    errorRepo.add(404, 'Not Found');
    errorRepo.add(500, 'Internal Server Error');
  });

  test('should return the correct error description for a known error code', () => {
    expect(errorRepo.translate(404)).toBe('Not Found');
    expect(errorRepo.translate(500)).toBe('Internal Server Error');
  });

  test('should return "Unknown error" for an unknown error code', () => {
    expect(errorRepo.translate(401)).toBe('Unknown error');
  });
});