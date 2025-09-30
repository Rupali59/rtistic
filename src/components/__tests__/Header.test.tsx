import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/Header";

// Mock Next.js Link component
jest.mock("next/link", () => {
  return ({ children, href, ...props }) => {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
});

describe("Header Component", () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, "scrollY", {
      writable: true,
      value: 0,
    });
  });

  it("renders the logo and company name", () => {
    render(<Header />);

    expect(screen.getByText("RTistic")).toBeInTheDocument();
    expect(
      screen.getByLabelText("RTistic - Go to homepage")
    ).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Header />);

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders the Get Quote button", () => {
    render(<Header />);

    expect(screen.getByText("Get Quote")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Get a quote for your project")
    ).toBeInTheDocument();
  });

  it("toggles mobile menu when hamburger button is clicked", () => {
    render(<Header />);

    const mobileMenuButton = screen.getByLabelText("Open mobile menu");
    expect(mobileMenuButton).toBeInTheDocument();

    // Mobile menu should not be visible initially
    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" })
    ).not.toBeInTheDocument();

    // Click the mobile menu button
    fireEvent.click(mobileMenuButton);

    // Mobile menu should now be visible
    expect(
      screen.getByRole("navigation", { name: "Mobile navigation" })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Close mobile menu")).toBeInTheDocument();
  });

  it("closes mobile menu when a navigation link is clicked", () => {
    render(<Header />);

    const mobileMenuButton = screen.getByLabelText("Open mobile menu");
    fireEvent.click(mobileMenuButton);

    // Mobile menu should be visible
    expect(
      screen.getByRole("navigation", { name: "Mobile navigation" })
    ).toBeInTheDocument();

    // Click on a navigation link
    const homeLink = screen.getByLabelText("Navigate to Home section");
    fireEvent.click(homeLink);

    // Mobile menu should be closed
    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" })
    ).not.toBeInTheDocument();
  });

  it("has proper accessibility attributes", () => {
    render(<Header />);

    // Check for proper ARIA labels
    expect(
      screen.getByLabelText("RTistic - Go to homepage")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Navigate to Home section")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Get a quote for your project")
    ).toBeInTheDocument();

    // Check for proper roles
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: "Main navigation" })
    ).toBeInTheDocument();
  });

  it("handles keyboard navigation", () => {
    render(<Header />);

    const mobileMenuButton = screen.getByLabelText("Open mobile menu");

    // Test Enter key
    fireEvent.keyDown(mobileMenuButton, { key: "Enter" });
    expect(
      screen.getByRole("navigation", { name: "Mobile navigation" })
    ).toBeInTheDocument();

    // Test Space key
    fireEvent.keyDown(mobileMenuButton, { key: " " });
    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" })
    ).not.toBeInTheDocument();
  });
});
