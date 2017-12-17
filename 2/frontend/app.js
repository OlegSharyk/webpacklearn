'use strict';

let moduleName = location.pathname.slice(1);

let route = require('./routes/' + moduleName);
route();

document.getElementById('loginButton').onclick = function(){

    require.ensure([], function(reqiure){
        let login = require('./routes/login');

        login();
    });
};

document.getElementById('logoutButton').onclick = function(){

    require.ensure([], function(reqiure){
        let logout = require('./routes/logout');

        logout();
    });
};