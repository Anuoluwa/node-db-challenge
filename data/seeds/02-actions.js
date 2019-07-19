
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: 1,
          description: 'Fork and Clone Repository',
          notes:
            'Repo URL: https://github.com/LambdaSchool/Sprint-Challenge-Node-Express',
        },
        {
          project_id: 1,
          description: 'Install Dependencies',
          notes: 'Remember to cd into the folder where the Project was cloned',
        },
        {
          project_id: 1,
          description: 'Design and Build API Endpoints',
          notes: 'This is where the magic happens!',
        },
        {
          project_id: 2,
          description: 'Host project on AWS using the URL in the notes',
          notes:
            'Repo URL: https://github.com/LambdaSchool/Sprint-Challenge-Node-Express',
        },
        {
          project_id: 2,
          description: 'Remove development Dependencies',
          notes: 'Remember to cd into the folder where the Project was cloned',
        },
        {
          project_id: 2,
          description: 'Complete stretch goals with Design and Build API Endpoints',
          notes: 'This is not where the magic happens!',
        },
      ]);
    });
};