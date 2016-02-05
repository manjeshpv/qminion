'use strict';

angular.module('qminionApp.auth', [
  'qminionApp.constants',
  'qminionApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
