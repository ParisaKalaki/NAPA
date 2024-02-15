// AddShip.test.js
import { fireEvent, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import AddShip from "../features/ships/AddShip";

describe(AddShip, () => {
  it("should open a form if the Add button is clicked", () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <AddShip />
      </QueryClientProvider>
    );
    const AddButton = screen.getByRole("button", { name: "Add new Ship" });
    fireEvent.click(AddButton);
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });
});
