module.exports.routes = {
  // User
  'POST /api/login': 'UserController.auth',
  'GET /api/users': 'UserController.get',
  'GET /api/users/:id': 'UserController.detail',
  'POST /api/users': 'UserController.create',
  'PUT /api/users/:id': 'UserController.update',
  'DELETE /api/users/:id': 'UserController.delete',
  // Event
  'GET /api/events': 'EventController.get',
  'GET /api/events/:id': 'EventController.detail',
  'POST /api/events': 'EventController.create',
  'PUT /api/events/:id': 'EventController.update',
  'DELETE /api/events/:id': 'EventController.delete',
  // Spectator
  'GET /api/spectators': 'SpectatorController.get',
  'GET /api/spectators/:id': 'SpectatorController.detail',
  'POST /api/spectators': 'SpectatorController.create',
  'PUT /api/spectators/:id': 'SpectatorController.update',
  'DELETE /api/spectators/:id': 'SpectatorController.delete',
  // Spectator Function
  'GET /api/spectatorFunctions': 'SpectatorFunctionController.get',
  'GET /api/spectatorFunctions/:id': 'SpectatorFunctionController.detail',
  'POST /api/spectatorFunctions': 'SpectatorFunctionController.create',
  'PUT /api/spectatorFunctions/:id': 'SpectatorFunctionController.update',
  'DELETE /api/spectatorFunctions/:id': 'SpectatorFunctionController.delete',
  // Theater Hall
  'GET /api/theaterHalls': 'TheaterHallController.get',
  'GET /api/theaterHalls/:id': 'TheaterHallController.detail',
  'POST /api/theaterHalls': 'TheaterHallController.create',
  'PUT /api/theaterHalls/:id': 'TheaterHallController.update',
  'DELETE /api/theaterHalls/:id': 'TheaterHallController.delete',
  // Function
  'GET /api/functions': 'TheFunctionController.get',
  'GET /api/functions/:id': 'TheFunctionController.detail',
  'POST /api/functions': 'TheFunctionController.create',
  'PUT /api/functions/:id': 'TheFunctionController.update',
  'DELETE /api/functions/:id': 'TheFunctionController.delete',
};
