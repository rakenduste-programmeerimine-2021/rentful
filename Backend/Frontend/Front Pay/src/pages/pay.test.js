import { render, screen } from "../components/test-utils.js"
import { fireEvent } from "@testing-library/react"
import {Provider} from "react-redux";
import {store} from "../../../src/redux/store";
import Pay from "./Pay.jsx"
import Success from "./Success.jsx"

test('Pay', () => {
    render(<Provider store={store}>
        <Pay/>
        </Provider>);
    const linkElement = screen.findByRole('Button', { name: /Pay Now/i });

    expect(Success).toBeInTheDocument()
    expect(screen.getByText('Success')).toBeInTheDocument()


});