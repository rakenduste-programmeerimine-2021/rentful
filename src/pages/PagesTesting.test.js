import React from "react"
import Cart from "./Cart.jsx"
import { render, screen } from "../components/test-utils.js"
import { fireEvent } from "@testing-library/react"
import Home from "./Home.jsx"
import Login from "./Login.jsx"
import Product from "./Product.jsx"
import ProductList from "./ProductList.jsx"
import Register from "./Register.jsx"
import userEvent from "@testing-library/user-event"
import {Provider} from "react-redux";
import {store} from "../redux/store";



test('Cart', () => {
    render(<Cart sender={{id:'2'}} receiver={{id:'2'}}/>)

    screen.debug();
})

test('HomeLogin', () => {

    render(<Home question="Password?" answer="password"/>);
    const button = screen.getByRole('LOG IN')
    fireEvent.click(button)
    expect(username).toBeInTheDocument()
    expect(screen.getByText('password')).toBeInTheDocument()
})
test ('HomeRegister', () => {
    render(<Home question="Register?" answer="email"/>);
    const button = screen.getByRole('REGISTER')
    fireEvent.click(button)
    expect(email).toBeInTheDocument()
    expect(screen.getByText('email')).toBeInTheDocument()
})
test('HomeCart', () => {
    render(<Home />);
    const button = screen.getByRole('Button', {name:/CART/i});
    fireEvent.click(button)
    expect(Checkout).toBeInTheDocument()
    expect(screen.getByText('Checkout')).toBeInTheDocument()
})


test('Login', () => {
    render(<Provider store={store}>
        <Login/>
        </Provider>);
    const linkElement = screen.findByRole('Button', { name: /LOGIN/i });

    userEvent.type(screen.getByPlaceholderText(/username/i), "Touring");
    userEvent.type(screen.getByPlaceholderText(/password/i), "Pass");
    expect(screen.findByRole('Button', { name: /LOGIN/i }));

});

test('Product', () => {
    render(<Product sender={{id:'2'}} receiver={{id:'2'}}/>)

    screen.debug();
})

test('ProductList', () => {
    render(<ProductList sender={{id:'2'}} receiver={{id:'2'}}/>)

    screen.debug();
})


test('Register', async () => {
    render(<Provider store={store}>
        <Register/>
        </Provider>);
    const linkElement = screen.findByRole('Button', { name: /REGISTER/i });


    userEvent.type(screen.getByPlaceholderText(/username/i), "Touring");

    userEvent.type(screen.getByPlaceholderText(/email/i), "touring@normal.com");
    userEvent.type(screen.getByPlaceholderText(/password/i), "Pass");  
    userEvent.type(screen.getByPlaceholderText(/confirm password/i), "Pass");  
    expect(screen.findByRole('Button', { name: /CREATE/i }));
});