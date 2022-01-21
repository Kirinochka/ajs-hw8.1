import Team from '../Team';

describe('test Team', () => {

  let team;

  beforeEach(() => {
    team = new Team();
  })

  test('should add member', () => {
    team.add('name')
    expect(team.members.size).toBe(1);
  });

  test('should throw error', () => {
    team.add('name');
    expect(() => team.add('name')).toThrow();
  });

  test('should add members', () => {
    team.addAll('name', 'lastname');
    expect(team.members.size).toBe(2);
  });

  test('should return array', () => {
    team.addAll('name', 'lastname');
    expect(team.toArray()).toEqual(['name', 'lastname']);
  })
})
