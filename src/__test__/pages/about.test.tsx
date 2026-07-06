import Aboutpage from "@/pages/about";
import { render ,screen} from '@testing-library/react'

describe("About Page", () => {
    it("render about page", () => {
        const page = render(<Aboutpage />);
        expect(screen.getByTestId('title').textContent).toBe("About Page")
        expect(page).toMatchSnapshot()
    })
})