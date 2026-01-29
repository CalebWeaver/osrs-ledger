"use client";

import { Method, PriceMap } from "@/lib/types";
import { calculateMethodCost } from "@/lib/evaluator";

interface ItemSourcePopupProps {
  itemId: number;
  itemName: string;
  methods: Method[];
  prices: PriceMap;
  onSelect: (method: Method) => void;
  onClose: () => void;
  x?: number;
  y?: number;
}

export function ItemSourcePopup({ itemId, itemName, methods, prices, onSelect, onClose, x, y }: ItemSourcePopupProps) {
  // Find methods that produce this item (where item is in outputs)
  const sourceMethods = methods.filter(m =>
    m.outputs.some(out => out.id === itemId)
  );

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-content context-menu"
        onClick={e => e.stopPropagation()}
        style={x !== undefined && y !== undefined ? { top: y, left: x, position: 'absolute' } : {}}
      >
        <div className="popup-header">
          <h3>Sources for {itemName}</h3>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="popup-body">
          {sourceMethods.length === 0 ? (
            <p className="text-secondary">No known methods produce this item.</p>
          ) : (
            sourceMethods.map(method => {
              const { costPerAction } = calculateMethodCost(method, prices);
              return (
                <div
                  key={method.id}
                  className="source-method-item"
                  onClick={() => onSelect(method)}
                >
                  <div className="source-info">
                    <div className="source-name">{method.name}</div>
                    <div className="source-details">
                      <span className="source-reqs text-gray-dim text-sm">
                        req: {method.requirements.map(r => `${r.skill} ${r.level}`).join(', ')}
                      </span>
                      <span className="source-cost text-warning text-sm ml-3">
                        Cost: {costPerAction.toLocaleString()} gp
                      </span>
                    </div>
                  </div>
                  <div className="source-action text-accent">
                    Select
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  );
}
