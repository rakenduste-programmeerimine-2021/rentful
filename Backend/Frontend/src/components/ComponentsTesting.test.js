import React from "react"
import  Announcement  from "./Announcement.jsx"
import { render, screen } from "./test-utils"
import Categories from "./Categories.jsx"
import CategoryItem from "./CategoryItem.jsx"
import Footer from "./Footer.jsx"
import Navbar from "./Navbar.jsx"
import Newsletter from "./Newsletter.jsx"
import Product from "./Product.jsx"
import Products from "./Products.jsx"
import Slider from "./Slider.jsx"

test('Announcement', () => {
    render(<Announcement sender={{id:'2'}} receiver={{id:'2'}}/>)

    screen.debug();
})


test('Categories', () => {
    render(<Categories sender={{id:'2'}} receiver={{id:'2'}}/>)

    screen.debug();
})

test('CategoryItem', () => {
    render(<CategoryItem sender={{id:'2'}} receiver={{id:'2'}}/>)

    screen.debug();
})

test('Footer', () => {
    render(<Footer sender={{id:'2'}} receiver={{id:'2'}}/>)

    screen.debug();
})

test('Navbar', () => {
    render(<Navbar sender={{id:'2'}} receiver={{id:'2'}}/>)

    screen.debug();
})

test('Newsletter', () => {
    render(<Newsletter sender={{id:'2'}} receiver={{id:'2'}}/>)

    screen.debug();
})

test('Product', () => {
    render(<Product sender={{id:'2'}} receiver={{id:'2'}}/>)

    screen.debug();
})

test('Products', () => {
    render(<Products sender={{id:'2'}} receiver={{id:'2'}}/>)

    screen.debug();
})

test('Slider', () => {
    render(<Slider sender={{id:'2'}} receiver={{id:'2'}}/>)

    screen.debug();
})