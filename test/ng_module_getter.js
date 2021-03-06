//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require('../node_modules/eslint/lib/eslint'),
    ESLintTester = require('eslint-tester');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest('rules/ng_module_getter', {
    valid: [
        'angular.module("module").controller("TestCtrl", function () {});',
        'angular.module("module").factory("TestService", function () {});',
        'angular.module("module").service("TestService", function () {});',
        'angular.module("module").directive("testDirective", function () {});',
        'angular.module("module").controller("TestCtrl", [function () {}]);',
        'angular.module("module").factory("TestService", [function () {}]);',
        'angular.module("module").service("TestService", [function () {}]);',
        'angular.module("module").directive("testDirective", [function () {}]);',
        'angular.module("module").controller("TestCtrl", ["$scope", function ($scope) {}]);',
        'angular.module("module").factory("TestService", ["$scope", function ($scope) {}]);',
        'angular.module("module").service("TestService", ["$scope", function ($scope) {}]);',
        'angular.module("module").directive("testDirective", ["$scope", function ($scope) {}]);',
        'angular.module("module").config(function() {});',
        'angular.module("module").run(function() {});',
        'angular.module("module").config(["$scope", function($scope) {}]);',
        'angular.module("module").run(["$scope", function($scope) {}]);',
        '"use strict";angular.module("module").run(["$scope", function($scope) {}]);',
        'angular.module("argo", ["ngMaterial", "ui.router", "ngSocket", "LocalStorageModule"]);',
        'angular.module("mwl.calendar").controller("MwlElementDimensionsCtrl", function($element, $scope, $parse, $attrs) {}).directive("mwlElementDimensions", function() {});',
        'describe("suite test", function(){})',
        'it("test", function(){})',
        '$provide.value("accountsService", accountsService)'
    ],
    invalid: [{
            code: 'var app = angular.module("test", []);app.controller("TestCtrl", [function () {}]);',
            errors: [{ message: 'Avoid using a variable and instead use chaining with the getter syntax.'}]
        },{
            code: 'var app = angular.module("test", []);app.factory("TestService", [function () {}]);',
            errors: [{ message: 'Avoid using a variable and instead use chaining with the getter syntax.'}]
        },{
            code: 'var app = angular.module("test", []);app.service("TestService", [function () {}]);',
            errors: [{ message: 'Avoid using a variable and instead use chaining with the getter syntax.'}]
        },{
            code: 'var app = angular.module("test", []);app.controller("TestCtrl", ["$scope", function ($scope) {}]);',
            errors: [{ message: 'Avoid using a variable and instead use chaining with the getter syntax.'}]
        },{
            code: 'var app = angular.module("test", []);app.factory("TestService", ["$scope", function ($scope) {}]);',
            errors: [{ message: 'Avoid using a variable and instead use chaining with the getter syntax.'}]
        },{
            code: 'var app = angular.module("test", []);app.service("TestService", ["$scope", function ($scope) {}]);',
            errors: [{ message: 'Avoid using a variable and instead use chaining with the getter syntax.'}]
        },{
            code: 'var app = angular.module("test", []);app.config(function() {});',
            errors: [{ message: 'Avoid using a variable and instead use chaining with the getter syntax.'}]
        },{
            code: 'var app = angular.module("test", []);app.run(function() {});',
            errors: [{ message: 'Avoid using a variable and instead use chaining with the getter syntax.'}]
        },{
            code: 'var app = angular.module("test", []);app.config(["$scope", function($scope) {}]);',
            errors: [{ message: 'Avoid using a variable and instead use chaining with the getter syntax.'}]
        },{
            code: 'var app = angular.module("test", []);app.run(["$scope", function($scope) {}]);',
            errors: [{ message: 'Avoid using a variable and instead use chaining with the getter syntax.'}]
        }
    ]
});
