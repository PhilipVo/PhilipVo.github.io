app.factory('usersFactory', function($http, $cookies) {
	return {
		// index: function(callback) {
		// 	$http.get('/api/users').then(function(res) {
		// 		callback(res.data);
		// 	});
		// },
		show: function(username, callback) {
			$http.get(`/api/users/${username}`, {
				headers: {'authorization': `Bearer ${$cookies.get('token')}`}
			}).then(function(res) {
				callback(res.data);
			});
		},
		create: function(data, callback) {
			$http.post('/users', data).then(function(res) {
				callback(res.data);
			});
		},
		toggleFavorite: function(id, callback) {
			$http.put(`/users/favorites/${id}`, {
					headers: {'authorization': `Bearer ${$cookies.get('token')}`}
			}).then(function(res) {
				console.log('data is', res.data)
				callback(res.data);
			});
		},
		update: function(data, callback) {
			$http.put(`/api/users/${data.username}`, data, {
				headers: {'authorization': `Bearer ${$cookies.get('token')}`}
			}).then(function(res) {
				callback(res.data);
			});
		},
		delete: function(username, callback) {
			$http.delete(`/api/users/${username}`, {
				headers: {'authorization': `Bearer ${$cookies.get('token')}`}
			}).then(function(res) {
				callback(res.data);
			});
		},
		login: function(data, callback) {
			$http.post('/login', data).then(function(res) {
				callback(res.data);
			});
		}
	}
})
