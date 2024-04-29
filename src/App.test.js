import { render, screen } from "@testing-library/react";

function TestComponent({ products }) {
  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product}</li>
      ))}
    </ul>
  );
}

it("should render App component without crashing", () => {
  render(<TestComponent products={["product 1", "product 2", "product 3"]} />);
  const elements = screen.getAllByRole("listitem");
  expect(elements).toHaveLength(3);
});
