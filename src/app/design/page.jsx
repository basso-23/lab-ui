"use client";

import { useState, useEffect } from "react";
import { UsersRound, Sun, Moon } from "lucide-react";

export default function DesignSystemPage() {
  const [accordionOpen, setAccordionOpen] = useState({});
  const [theme, setTheme] = useState("dark");

  const toggleAccordion = (id) => {
    setAccordionOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="design-navbar">
        <div className="design-navbar-content">
          <h1 className="design-navbar-title">Design System</h1>
          <button
            className="design-navbar-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>

      {/* Typography Section */}
      <section className="section-alternate">
        <div className="section-content-split">
          <div className="section-text">
            <h3>Typography Scale</h3>
            <p>
              Our typography system uses a carefully crafted scale with six
              heading levels and multiple body text sizes. All measurements use
              rem units for better accessibility and consistency.
            </p>
            <p>
              The Inter font family provides excellent legibility across all
              sizes, with proper letter spacing and line heights for optimal
              readability.
            </p>
          </div>
          <div className="section-preview">
            <h1 className="text-h1">Heading 1</h1>
            <h2 className="text-h2">Heading 2</h2>
            <h3 className="text-h3">Heading 3</h3>
            <h4 className="text-h4">Heading 4</h4>
            <h5 className="text-h5">Heading 5</h5>
            <h6 className="text-h6">Heading 6</h6>
            <div className="mt-lg">
              <p className="text-body-lg">Large body text</p>
              <p className="text-body">Regular body text</p>
              <p className="text-body-sm">Small body text</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-lg"></div>

      {/* Colors Section */}
      <section className="section-alternate">
        <div className="section-content-split reverse">
          <div className="section-text">
            <h3>Color Palette</h3>
            <p>
              The primary color #057af0 (blue) is complemented by a full
              spectrum of semantic colors for success, warning, error, and info
              states.
            </p>
            <p>
              All colors include light and dark variants and are available as
              CSS variables for easy customization throughout your application.
            </p>
          </div>
          <div className="section-preview">
            <div className="grid-3">
              <div>
                <div className="color-swatch-color bg-primary"></div>
                <div className="showcase-label mt-sm">Primary</div>
                <span className="text-caption">#057AF0</span>
              </div>
              <div>
                <div className="color-swatch-color bg-success"></div>
                <div className="showcase-label mt-sm">Success</div>
                <span className="text-caption">#22C55E</span>
              </div>
              <div>
                <div className="color-swatch-color bg-error"></div>
                <div className="showcase-label mt-sm">Error</div>
                <span className="text-caption">#EF4444</span>
              </div>
              <div>
                <div className="color-swatch-color bg-warning"></div>
                <div className="showcase-label mt-sm">Warning</div>
                <span className="text-caption">#F59E0B</span>
              </div>
              <div>
                <div className="color-swatch-color bg-info"></div>
                <div className="showcase-label mt-sm">Info</div>
                <span className="text-caption">#3B82F6</span>
              </div>
              <div>
                <div className="color-swatch-color bg-secondary"></div>
                <div className="showcase-label mt-sm">Secondary</div>
                <span className="text-caption">#8B5CF6</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-lg"></div>

      {/* Button Variants Section */}
      <section className="section-alternate">
        <div className="section-content-split reverse">
          <div className="section-text">
            <h3>Button Variants</h3>
            <p>
              Our icon buttons come in multiple variants using the primary color
              palette. Each variant maintains consistent sizing and spacing
              while offering different visual weights.
            </p>
            <p>
              Available in both solid and outline styles, these circular buttons
              are perfect for actions, user avatars, or navigation elements.
            </p>
          </div>
          <div className="section-preview">
            <div className="button-variants-grid">
              {/* Solid Variants */}
              <div className="button-variants-row">
                <button className="btn-icon btn-icon-primary-solid">V</button>
                <button className="btn-icon btn-icon-primary-solid">BG</button>
                <button className="btn-icon btn-icon-primary-solid">
                  <UsersRound size={20} />
                </button>
                <button className="btn-icon btn-icon-primary-alpha-solid">
                  <UsersRound size={20} />
                </button>
              </div>

              {/* Outline Variants */}
              <div className="button-variants-row">
                <button className="btn-icon btn-icon-primary-light">V</button>
                <button className="btn-icon btn-icon-primary-light">BG</button>
                <button className="btn-icon btn-icon-primary-light">
                  <UsersRound size={20} />
                </button>
                <button className="btn-icon btn-icon-primary-alpha-solid-light">
                  <UsersRound size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-lg"></div>

      {/* Buttons Section */}
      <section className="design-system-container">
        <div className="showcase-grid">
          <div className="showcase-item">
            <div className="showcase-label">Primary</div>
            <button className="btn btn-primary">Primary Button</button>
          </div>
          <div className="showcase-item">
            <div className="showcase-label">Secondary</div>
            <button className="btn btn-secondary">Secondary Button</button>
          </div>
          <div className="showcase-item">
            <div className="showcase-label">Outline</div>
            <button className="btn btn-outline">Outline Button</button>
          </div>
          <div className="showcase-item">
            <div className="showcase-label">Ghost</div>
            <button className="btn btn-ghost">Ghost Button</button>
          </div>
          <div className="showcase-item">
            <div className="showcase-label">Link</div>
            <button className="btn btn-link">Link Button</button>
          </div>
          <div className="showcase-item">
            <div className="showcase-label">Disabled</div>
            <button className="btn btn-primary" disabled>
              Disabled Button
            </button>
          </div>
        </div>
      </section>

      <div className="divider-lg"></div>

      {/* Cards Section */}
      <section className="section-alternate">
        <div className="section-content-split">
          <div className="section-text">
            <h3>Card Component</h3>
            <p>
              Cards are versatile containers for grouping related content and
              actions. They support headers, content areas, and footers.
            </p>
            <p>
              With hover effects and optional elevation, cards help create clear
              visual hierarchy in your interface.
            </p>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Card Title</h3>
              <p className="card-description">
                Card description provides additional context
              </p>
            </div>
            <div className="card-content">
              <p className="text-body">
                This is the card content area where you can place any
                information, forms, or other components.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Action</button>
              <button className="btn btn-ghost">Cancel</button>
            </div>
          </div>
        </div>
      </section>

      {/* Form Components */}
      <section className="design-system-container">
        <div className="grid-2">
          <div className="section-preview">
            <div className="flex-col-gap-lg">
              <div className="input-group">
                <label className="input-label">Email Address</label>
                <input
                  type="email"
                  className="input"
                  placeholder="your@email.com"
                />
                <span className="input-helper">
                  We'll never share your email
                </span>
              </div>

              <div className="input-group">
                <label className="input-label">Password</label>
                <input
                  type="password"
                  className="input input-error"
                  placeholder="Enter password"
                />
                <span className="input-error-message">
                  Password is required
                </span>
              </div>

              <div className="input-group">
                <label className="input-label">Country</label>
                <select className="select">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </div>
          </div>

          <div className="section-preview">
            <div className="input-group">
              <label className="input-label">Message</label>
              <textarea
                className="textarea"
                placeholder="Type your message..."
              ></textarea>
              <span className="input-helper">Maximum 500 characters</span>
            </div>

            <div className="mt-lg">
              <div className="checkbox-group mb-md">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="check1"
                  defaultChecked
                />
                <label htmlFor="check1" className="checkbox-label">
                  Accept terms
                </label>
              </div>

              <div className="flex-col-gap-sm mt-md">
                <div className="radio-group">
                  <input
                    type="radio"
                    className="radio"
                    id="radio1"
                    name="plan"
                    defaultChecked
                  />
                  <label htmlFor="radio1" className="radio-label">
                    Free Plan
                  </label>
                </div>
                <div className="radio-group">
                  <input
                    type="radio"
                    className="radio"
                    id="radio2"
                    name="plan"
                  />
                  <label htmlFor="radio2" className="radio-label">
                    Pro Plan
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-lg"></div>

      {/* Accordion Section */}
      <section className="section-alternate">
        <div className="section-content-split reverse">
          <div className="section-text">
            <h3>Accordion</h3>
            <p>
              Accordions are useful for organizing content into collapsible
              sections, allowing users to focus on what's relevant.
            </p>
            <p>
              With smooth transitions and clear visual indicators, they enhance
              the user experience without overwhelming the interface.
            </p>
          </div>
          <div className="section-preview">
            <div className="accordion">
              <div className="accordion-item">
                <button
                  className="accordion-trigger"
                  onClick={() => toggleAccordion("item1")}
                  aria-expanded={accordionOpen.item1}
                >
                  <span>What is Claude UI?</span>
                  <span className="accordion-icon">▼</span>
                </button>
                {accordionOpen.item1 && (
                  <div className="accordion-content">
                    A professional design system with semantic CSS classes and
                    modern components.
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <button
                  className="accordion-trigger"
                  onClick={() => toggleAccordion("item2")}
                  aria-expanded={accordionOpen.item2}
                >
                  <span>How do I use it?</span>
                  <span className="accordion-icon">▼</span>
                </button>
                {accordionOpen.item2 && (
                  <div className="accordion-content">
                    Simply apply the CSS classes to your components. All styles
                    are in globals.css.
                  </div>
                )}
              </div>

              <div className="accordion-item">
                <button
                  className="accordion-trigger"
                  onClick={() => toggleAccordion("item3")}
                  aria-expanded={accordionOpen.item3}
                >
                  <span>Is it responsive?</span>
                  <span className="accordion-icon">▼</span>
                </button>
                {accordionOpen.item3 && (
                  <div className="accordion-content">
                    Yes! All components work seamlessly across different screen
                    sizes.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badges & Alerts */}
      <section className="design-system-container">
        <h2 className="design-system-section-title text-center">
          Badges & Alerts
        </h2>

        <div className="grid-2 mt-xl">
          <div>
            <h4 className="text-h6 mb-md">Badge Variants</h4>
            <div className="flex-gap-sm">
              <span className="badge badge-primary">Primary</span>
              <span className="badge badge-secondary">Secondary</span>
              <span className="badge badge-success">Success</span>
              <span className="badge badge-warning">Warning</span>
              <span className="badge badge-error">Error</span>
            </div>
          </div>

          <div>
            <h4 className="text-h6 mb-md">Alert Types</h4>
            <div className="flex-col-gap-md">
              <div className="alert alert-success">
                <div className="alert-title">Success</div>
                <div className="alert-description">
                  Operation completed successfully
                </div>
              </div>

              <div className="alert alert-error">
                <div className="alert-title">Error</div>
                <div className="alert-description">An error occurred</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ds-footer">
        <p className="text-body-sm text-muted">
          Claude UI Design System - Built with Next.js, Inter font, and semantic
          CSS
        </p>
      </footer>
    </div>
  );
}
