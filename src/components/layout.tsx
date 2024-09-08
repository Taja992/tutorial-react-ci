import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <Navbar />
      {children}
    </div>
  );
}

export function Navbar() {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          Blog
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#home">Home</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function WelcomeHero() {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold prose">Welcome</h1>
          <p className="py-6 prose">
            This blog site contains interesting articles from various authors.
            Feel free to read and share your thoughts.
          </p>
        </div>
      </div>
    </div>
  );
}
