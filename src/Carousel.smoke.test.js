import { render } from "@testing-library/react";
import TEST_IMAGES from "./_testCommon";
import Carousel from "./Carousel";

it("renders without crashing", () => { render(
    <Carousel 
        photos={TEST_IMAGES}
        title="images for testing"
    />
    );
});

it("matches snapshot", () => {
    const { asFragment } = render(
        <Carousel 
            photos={TEST_IMAGES}
            title="images for testing"
        />
    );
    expect(asFragment()).toMatchSnapshot();
});
