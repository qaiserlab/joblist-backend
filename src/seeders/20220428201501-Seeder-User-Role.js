const ConstRoles = require('@expresso/constants/ConstRoles')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserRoles', [
      {
        id: '7b2794ee-7313-4649-a732-2dbc3987079b',
        UserId: '7c6a43fe-5c88-481a-af30-399fe74afa8b',
        RoleId: ConstRoles.ID_ADMIN,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserRoles', null, {})
  },
}
