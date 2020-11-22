import Vue from 'vue'

import UpperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const requireComponent = require.context(
  '',
  true,
  /_base-[\w]+\.vue$/
);


requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const fn =fileName.split('/').pop().replace(/\.\w+$/, '');

 const componentName = UpperFirst(camelCase(fn));

 Vue.component(componentName, componentConfig.default || componentConfig);

});
