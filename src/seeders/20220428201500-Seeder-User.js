module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        id: '7c6a43fe-5c88-481a-af30-399fe74afa8b',
        fullName: 'Admin Joblist',
        email: 'admin@joblist.com',
        password: '$2b$10$wA/AbX4UaGxesPVbua40Z.jQtOM81NQmQpWVdsIqHhUE6cwfNzo26',
        phone: '082167028705',
        isActive: true,
        tokenVerify: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoiVlVFcHdaNmhMekxMU3c5UlZjN2ViWTZGWThFQ2M1N3UiLCJpYXQiOjE2NTExNTI0ODYsImV4cCI6MTY1MTIzODg4Nn0.S61OoMnb3PYpONUvVvaMMZsBmnIP403UsTktfr2bVJ4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  },
}
