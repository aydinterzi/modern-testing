import { render, screen } from "@testing-library/react";

function TestComponent() {
  return <div>Modern Testing</div>;
}

it("should render App component without crashing", () => {
  render(<TestComponent />);
  const element = screen.getByText(/ern/i);
  // const element = screen.getByText("ern",{exact:false});
  expect(element).toBeInTheDocument();
});
