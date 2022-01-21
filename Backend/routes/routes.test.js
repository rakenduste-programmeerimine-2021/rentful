import React from 'react';
import { shallow, mount } from 'enzyme';
import Routes, { auth, cart, order, product, stripe, user, verifyToken, NoMatch } from './routes';
import { Route } from 'react-router-dom';

let pathMap = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<Routes/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap)
  })
  it(() => {

    expect(pathMap['/auth']).toBe(auth);
  })
  it(() => {
    expect(pathMap['/cart']).toBe(cart);
  })
  it(() => {
    expect(pathMap['/order']).toBe(order);
  })
  it(() => {
    expect(pathMap['/product']).toBe(product);
  })
  it(() => {
    expect(pathMap['/stripe']).toBe(stripe);
  })
  it(() => {
    expect(pathMap['/user']).toBe(user);
  })
  it(() => {
    expect(pathMap['/verifyToken']).toBe(verifyToken);
  })
  it(()=>{
      expect(pathMap['undefined']).toBe(NoMatch);
  })
})