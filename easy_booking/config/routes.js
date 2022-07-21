module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


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
