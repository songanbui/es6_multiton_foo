'use strict';
const Multiton = require('es6_multiton');
const instance = new Multiton({
  foo: 'foo',
  bar: 1,
});

instance.hello();
