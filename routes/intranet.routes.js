module.exports = (app, persistence, activeDirectory) => {
	let express = require('express');
	let router = express.Router();
	let messages = require('../utilities/messages.json');
	let utilities = require('../utilities/utilities.js');
	let midelwares = require('./middlewares/middlewares.js');
	let sessionChecker = midelwares.sessionChecker;
	//let permissonChecker = midelwares.doesHehavePermission(process.env.AD_GROUP_EMPLOYEE_MANAGMENT);

	router.post('/login', function(require, response) {
		let username = require.body.username;
		let password = require.body.password;

		if(utilities.areNotTheParameters([username, password])) {
			require.session.destroy();
			return response.status(400).send({ errors: messages.errors.badRequest, 'login': false });
		}

		activeDirectory.authenticate(`${username}@infinivirt.local`, password, function(err, auth) {
			if(err) {
				console.log(err);
				return response.status(200).send({ errors: messages.errors.incorrectCredentials, 'login': false });
			}

			if(auth) {
				console.log("autorizado");
				activeDirectory.findUser(username, function(err, user) {
					if(err) {
						console.log('Error encontrando usuario:' +  JSON.stringify(err));
						return;
					}

					if(!user) {
						console.log('User: ' + username + ' not found.');
					}
					else
					{
						require.session.user = username;
						console.log(JSON.stringify(user));
						return response.status(200).send({ 'messages': 'login success!', 'login': true, 'userInfo' : user.userPrincipalName })
					}
				});

				//return response.status(200).send({ 'messages': 'login existoso!', 'login':true });
			}
		});
	});

	router.get('/logout', function (require, response) {
		if(!require.session || !require.session.user) {
			require.session.destroy();
			return response.status(401).send({ errors: messages.errors.notAuthorized, login: false });
		}
		else
		{
			require.session.destroy();
    	    return response.status(200).send({ "messages": "logout success!" });
		}
     	
  	});

  	router.get('/isLogged', function(require, response) {
  		if(!require.session || !require.session.user) {
			require.session.destroy();
  			return response.status(401).send({ errors: messages.errors.notAuthorized, login: false });
  		}
  		else
  		{
  		return response.status(200).send({ messages: 'Estás logueado', login: true, username: require.session.user });
  	    }
  	});

	app.use('/api/session', router);
}