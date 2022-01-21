class Team {
  constructor() {
    this.members = new Set();
  }

  add(newMember) {
    if (this.members.has(newMember)) throw new Error('уже в комадне');
    this.members.add(newMember);
  }

  addAll(...newMembers) {
    newMembers.forEach((member) => this.members.add(member));
  }

  toArray() {
    return [...this.members];
  }
}

export default Team;
