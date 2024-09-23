import { render } from "@testing-library/react";
import Button from "./Button";
import React from "react";

describe("Ui", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<Button />);
		expect(baseElement).toBeTruthy();
	});
});
