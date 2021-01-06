import { FormedGoal } from './formed-goal';

describe('FormedGoal', () => {
  it('should create an instance', () => {
    expect(new FormedGoal('Name1', new Date(), new Date(), -1, 10,'ALL_YEAR', 'Description', undefined)).toBeTruthy();
  });
});
