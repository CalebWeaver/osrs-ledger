"use client";

import { useState } from "react";

export function HelpButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="help-btn"
        onClick={() => setOpen(true)}
        aria-label="Help"
        title="About this app"
      >
        ?
      </button>
      {open && (
        <div className="popup-overlay" onClick={() => setOpen(false)}>
          <div className="popup-content help-modal" onClick={e => e.stopPropagation()}>
            <div className="popup-header">
              <h3>About OSRS Ledger</h3>
              <button className="close-btn" onClick={() => setOpen(false)}>&times;</button>
            </div>
            <div className="popup-body">
              <p>
                <strong>OSRS Ledger</strong> is a real-time money-making recommender for
                Old School RuneScape. It evaluates methods across many skills &mdash; including
                Crafting, Smithing, Magic, Herblore, Cooking, Fletching, Runecraft, Mining,
                Woodcutting, Fishing, Hunter, Thieving, and Sailing &mdash; using live Grand
                Exchange prices to show you the most profitable activities.
              </p>
              <h4>How to use</h4>
              <ul>
                <li>
                  <strong>Set your levels</strong> &mdash; Enter your skill levels in the
                  Levels tab to filter methods you can actually do. You can also look up a
                  player name to auto-fill stats.
                </li>
                <li>
                  <strong>Filter by skill</strong> &mdash; Use the skill toggles on the
                  Levels tab to show only methods for specific skills.
                </li>
                <li>
                  <strong>Browse methods</strong> &mdash; Methods are sorted by profit per
                  hour. Locked methods (shown dimmed) require higher levels or quest
                  completions.
                </li>
                <li>
                  <strong>Show unavailable</strong> &mdash; Toggle this to see methods you
                  don&apos;t yet meet the requirements for.
                </li>
                <li>
                  <strong>High Alchemy</strong> &mdash; Check the High Alchemy tab for a
                  sortable table of item alchemy profitability based on live prices.
                </li>
                <li>
                  <strong>Crafting chains</strong> &mdash; Click &quot;Start Chain&quot; on a
                  method to build a multi-step production chain and see combined profits.
                </li>
              </ul>
              <h4>Data</h4>
              <p>
                Prices are fetched live from the OSRS Wiki Real-Time Prices API. Profit
                calculations factor in input costs, output revenue, and actions per hour
                based on game tick rates.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
