'use strict';

let find = require('lodash/collection/find');

let users = [
    {id: "abcd", name: "Vasya"},
    {id: "defa", name: "Petya"},
    {id: "1234", name: "Masha"}
];

console.log(find(users,'name'));