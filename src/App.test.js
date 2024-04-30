import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

function TestComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

it("should render the element correctly", async () => {
  const user = userEvent.setup();
  render(<TestComponent />);

  await user.pointer({
    keys: "[MouseLeft]",
    target: screen.getByText("Increment"),
  });

  const h1Element = await screen.findByRole("heading");

  expect(h1Element).toHaveTextContent("1");
});
