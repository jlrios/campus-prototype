/**
 * Classroom panel interactions:
 * - Accessible tab navigation (mouse and keyboard).
 * - Quick links to the corresponding tabs.
 * - Client-side filtering for the sample student table.
 * - Emits classroom:close so the host app can close its own window.
 */
(() => {
  document.querySelectorAll(".classroom-panel").forEach((root) => {
    console.log("Here!");
    const tabs = [...root.querySelectorAll(".classroom-tab")];
    const panels = [...root.querySelectorAll(".classroom-tab-panel")];

    const activateTab = (name, focus = false) => {
      tabs.forEach((tab) => {
        const active = tab.dataset.tab === name;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
        if (active && focus) tab.focus();
      });
      panels.forEach((panel) => {
        const active = panel.dataset.panel === name;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activateTab(tab.dataset.tab));
      tab.addEventListener("keydown", (event) => {
        let next = index;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        else if (event.key === "Home") next = 0;
        else if (event.key === "End") next = tabs.length - 1;
        else return;
        event.preventDefault();
        activateTab(tabs[next].dataset.tab, true);
      });
    });

    root.querySelectorAll("[data-open-tab]").forEach((button) => {
      button.addEventListener("click", () => activateTab(button.dataset.openTab));
    });

    const search = root.querySelector("#student-search");
    const rows = [...root.querySelectorAll("#student-table-body tr")];
    const count = root.querySelector("#student-count");
    if (search) {
      search.addEventListener("input", () => {
        const query = search.value.trim().toLocaleLowerCase("es");
        let visible = 0;
        rows.forEach((row) => {
          const match = row.textContent.toLocaleLowerCase("es").includes(query);
          row.hidden = !match;
          if (match) visible++;
        });
        if (count) count.textContent = `Mostrando ${visible} de ${rows.length} registros de ejemplo.`;
      });
    }

    root.querySelectorAll("[data-close-panel]").forEach((button) => {
      button.addEventListener("click", () => {
        root.dispatchEvent(new CustomEvent("classroom:close", { bubbles: true }));
      });
    });
  });
})();
