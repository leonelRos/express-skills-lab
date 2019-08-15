const skills = [
    {skill: 'css', learn: true},
    {skill: 'node', learn: false},
    {skill: 'javascript', learn: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  function update(id, skill) {
    skills[id] = skill;
  }
  function deleteOne(id) {
    skills.splice(id, 1);
  }
  function create (tal) {
    skills.push(tal);
  }

  function getOne(id) {
    return skills[id];
  }
  
  function getAll() {
    return skills;
  }