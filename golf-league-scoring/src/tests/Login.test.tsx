import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for better assertions
import { MemoryRouter } from "react-router-dom";
import Login from "../components/Login.tsx";

const mockFetch = jest.fn();
(global as any).fetch = mockFetch;

describe("Login Component", () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("should render login form with inputs and button", () => {
    render(
      <MemoryRouter>
        <Login onLogin={() => {}} />
      </MemoryRouter>
    );

    expect(screen.getByLabelText("Username:")).toBeInTheDocument();
    expect(screen.getByLabelText("Password:")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("should display error message if username or password is missing", async () => {
    render(
      <MemoryRouter>
        <Login onLogin={() => {}} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() =>
      expect(screen.getByText("Username and password are required.")).toBeInTheDocument()
    );
  });

  it("should display error message if login fails", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
    });

    render(
      <MemoryRouter>
        <Login onLogin={() => {}} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText("Username:"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText("Password:"), {
      target: { value: "testpassword" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    await waitFor(() =>
      expect(screen.getByText("Invalid username or password. Please try again.")).toBeInTheDocument()
    );
  });

});
