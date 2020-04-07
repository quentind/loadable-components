import React from 'react';
import loadable from '@loadable/component';

const Content = loadable(() => import('./content.js'));

const Test1 = () => <div><Content /></div>;


export default Test1;
