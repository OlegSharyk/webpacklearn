'use strict';

document.getElementById('loginButton').onclick = function(){

    require.ensure([], function(reqiure){
        let login = require('./login');

        login();
    });
};

document.getElementById('logoutButton').onclick = function(){

    require.ensure([], function(reqiure){
        let logout = require('./logout');

        logout();
    });
};