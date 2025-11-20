"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  ChevronRight,
  Trash2,
  Save,
  Lightbulb,
} from "lucide-react";

export default function Home() {
  const [instructionsOpen, setInstructionsOpen] = useState(true);
  const [paresOpen, setParesOpen] = useState(true);
  const [configOpen, setConfigOpen] = useState(true);
  const [instructions, setInstructions] = useState(
    "I. Une cada palabra con su descripción correcta."
  );
  const [pairs, setPairs] = useState([
    {
      id: 1,
      term: "City",
      description: "A large place with many buildings, cars, and people.",
    },
    {
      id: 2,
      term: "Country",
      description:
        "The land outside of cities, often with farms and many trees.",
    },
  ]);
  const [gridSize, setGridSize] = useState("15 × 15");

  return (
    <div className="page-layout-sidebar">
      {/* Main Content Area */}
      <div className="page-main-content">
        <div>hola</div>
      </div>

      {/* Sidebar */}
      <div className="page-sidebar">
        {/* Fixed Header - Always Visible */}
        <div className="sidebar-fixed-header">
          <div className="fixed-sidebar">
            <div className="left-fixed-sidebar">
              <button className="sidebar-icon-btn" aria-label="Back">
                <ChevronLeft size={20} />
              </button>
            </div>

            <div className="right-fixed-sidebar">
              <button className="sidebar-icon-btn" aria-label="Move up">
                <ChevronUp size={20} />
              </button>
              <button className="sidebar-icon-btn" aria-label="Move down">
                <ChevronDown size={20} />
              </button>
              <button
                className="sidebar-icon-btn sidebar-icon-btn-delete"
                aria-label="Delete"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>

          {/* Save Button */}
          <button className="sidebar-btn-save">
            <Save size={18} />
            Guardar cambios
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="sidebar-scrollable-content">
          {/* Instructions Accordion */}
          <div className="accordion">
            <div className="accordion-item">
              <button
                className="accordion-trigger"
                onClick={() => setInstructionsOpen(!instructionsOpen)}
                aria-expanded={instructionsOpen}
              >
                <span>Instrucciones</span>
                {instructionsOpen ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              {instructionsOpen && (
                <div className="accordion-content">
                  <textarea
                    className="textarea"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Pares Accordion */}
          <div className="accordion">
            <div className="accordion-item">
              <button
                className="accordion-trigger"
                onClick={() => setParesOpen(!paresOpen)}
                aria-expanded={paresOpen}
              >
                <span>Pares</span>
                {paresOpen ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              {paresOpen && (
                <div className="accordion-content">
                  <div className="flex-col-gap-md">
                    {pairs.map((pair) => (
                      <div key={pair.id} className="sidebar-pair-item">
                        {/* Term Input with Delete Button */}
                        <div className="sidebar-pair-header">
                          <div className="sidebar-pair-input-wrapper">
                            <div className="sidebar-section-label">
                              Término:
                            </div>
                            <input
                              type="text"
                              className="input"
                              value={pair.term}
                              onChange={(e) => {
                                const newPairs = pairs.map((p) =>
                                  p.id === pair.id
                                    ? { ...p, term: e.target.value }
                                    : p
                                );
                                setPairs(newPairs);
                              }}
                            />
                          </div>
                          <button
                            className="sidebar-pair-delete-btn"
                            aria-label="Delete pair"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>

                        {/* Description Textarea */}
                        <div>
                          <textarea
                            className="textarea"
                            value={pair.description}
                            onChange={(e) => {
                              const newPairs = pairs.map((p) =>
                                p.id === pair.id
                                  ? { ...p, description: e.target.value }
                                  : p
                              );
                              setPairs(newPairs);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Configuración Accordion */}
          <div className="accordion">
            <div className="accordion-item">
              <button
                className="accordion-trigger"
                onClick={() => setConfigOpen(!configOpen)}
                aria-expanded={configOpen}
              >
                <span>Configuración</span>
                {configOpen ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              {configOpen && (
                <div className="accordion-content">
                  <div className="input-group">
                    <label className="sidebar-section-label">
                      Tamaño del Grid:
                    </label>
                    <select
                      className="select"
                      value={gridSize}
                      onChange={(e) => setGridSize(e.target.value)}
                    >
                      <option>10 × 10</option>
                      <option>15 × 15</option>
                      <option>20 × 20</option>
                    </select>
                  </div>
                  {/* Show Words Button */}
                  <button className="sidebar-btn-show">
                    <Lightbulb size={18} />
                    Mostrar palabras
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Instructions Accordion */}
          <div className="accordion">
            <div className="accordion-item">
              <button
                className="accordion-trigger"
                onClick={() => setInstructionsOpen(!instructionsOpen)}
                aria-expanded={instructionsOpen}
              >
                <span>Instrucciones</span>
                {instructionsOpen ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              {instructionsOpen && (
                <div className="accordion-content">
                  <textarea
                    className="textarea"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Pares Accordion */}
          <div className="accordion">
            <div className="accordion-item">
              <button
                className="accordion-trigger"
                onClick={() => setParesOpen(!paresOpen)}
                aria-expanded={paresOpen}
              >
                <span>Pares</span>
                {paresOpen ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              {paresOpen && (
                <div className="accordion-content">
                  <div className="flex-col-gap-md">
                    {pairs.map((pair) => (
                      <div key={pair.id} className="sidebar-pair-item">
                        {/* Term Input with Delete Button */}
                        <div className="sidebar-pair-header">
                          <div className="sidebar-pair-input-wrapper">
                            <div className="sidebar-section-label">
                              Término:
                            </div>
                            <input
                              type="text"
                              className="input"
                              value={pair.term}
                              onChange={(e) => {
                                const newPairs = pairs.map((p) =>
                                  p.id === pair.id
                                    ? { ...p, term: e.target.value }
                                    : p
                                );
                                setPairs(newPairs);
                              }}
                            />
                          </div>
                          <button
                            className="sidebar-pair-delete-btn"
                            aria-label="Delete pair"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>

                        {/* Description Textarea */}
                        <div>
                          <textarea
                            className="textarea"
                            value={pair.description}
                            onChange={(e) => {
                              const newPairs = pairs.map((p) =>
                                p.id === pair.id
                                  ? { ...p, description: e.target.value }
                                  : p
                              );
                              setPairs(newPairs);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Configuración Accordion */}
          <div className="accordion">
            <div className="accordion-item">
              <button
                className="accordion-trigger"
                onClick={() => setConfigOpen(!configOpen)}
                aria-expanded={configOpen}
              >
                <span>Configuración</span>
                {configOpen ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>
              {configOpen && (
                <div className="accordion-content">
                  <div className="input-group">
                    <label className="sidebar-section-label">
                      Tamaño del Grid:
                    </label>
                    <select
                      className="select"
                      value={gridSize}
                      onChange={(e) => setGridSize(e.target.value)}
                    >
                      <option>10 × 10</option>
                      <option>15 × 15</option>
                      <option>20 × 20</option>
                    </select>
                  </div>
                  {/* Show Words Button */}
                  <button className="sidebar-btn-show">
                    <Lightbulb size={18} />
                    Mostrar palabras
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
