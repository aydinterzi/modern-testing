import { render, screen } from "@testing-library/react";

function TestComponent({ suffix }) {
  return (
    <div>
      {suffix && suffix}
      {!suffix && "suffix yok"}
    </div>
  );
}

it("should render App component without crashing", () => {
  render(<TestComponent suffix="Test" />);
  const element = screen.getByText(/Test/i);
  const emptyElement = screen.queryByText("suffix yok");

  expect(emptyElement).not.toBeInTheDocument();
  expect(element).toBeInTheDocument();
});
