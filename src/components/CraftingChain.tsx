"use client";

import { useState } from "react";
import { Method, MethodEvaluation, PriceMap } from "@/lib/types";
import { AbbreviatedMethodCard } from "./AbbreviatedMethodCard";
import { ItemSourcePopup } from "./ItemSourcePopup";

interface CraftingChainProps {
  chain: MethodEvaluation[];
  allMethods: Method[];
  prices: PriceMap;
  onAddStep: (method: Method, index: number) => void;
  onRemoveStep: (index: number) => void;
  onClearChain: () => void;
}

export function CraftingChain({ chain, allMethods, prices, onAddStep, onRemoveStep, onClearChain }: CraftingChainProps) {
  const [popupState, setPopupState] = useState<{
    isOpen: boolean;
    itemId: number;
    itemName: string;
    targetIndex: number;
    x: number;
    y: number;
  } | null>(null);

  if (chain.length === 0) return null;

  const handleInputClick = (e: React.MouseEvent, itemId: number, cardIndex: number) => {
    // Find item name for display (optional, but nice)
    // We can look nicely in the evaluation inputs
    const item = chain[cardIndex].inputCosts.find(i => i.id === itemId);
    const name = item ? item.name : "Item";

    setPopupState({
      isOpen: true,
      itemId,
      itemName: name,
      targetIndex: cardIndex,
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleSourceSelect = (method: Method) => {
    if (popupState) {
      onAddStep(method, popupState.targetIndex);
      setPopupState(null);
    }
  };

  const totalProfit = chain.reduce((sum, step) => sum + step.profitPerHour, 0);
  const totalActions = chain.length;

  return (
    <div className="chain-container">
      {/* Chain Header */}
      <div className="chain-header">
        <div className="chain-title-group">
          <h3>Production Chain</h3>
          <div className="chain-stats">
          </div>
        </div>
        <button
          onClick={onClearChain}
          className="btn-clear"
        >
          Clear Chain
        </button>
      </div>

      {/* Horizontal Scrollable Chain */}
      <div className="chain-scroll-area">
        <div className="chain-list">
          {chain.map((evaluation, idx) => (
            <div key={`${evaluation.methodId}-${idx}`} className="chain-step">
              <AbbreviatedMethodCard
                evaluation={evaluation}
                onInputClick={(e, itemId) => handleInputClick(e, itemId, idx)}
                onRemove={() => onRemoveStep(idx)}
              />

              {/* Arrow Connector (if not last) */}
              {idx < chain.length - 1 && (
                <div className="chain-connector">
                  ➜
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {popupState && popupState.isOpen && (
        <ItemSourcePopup
          itemId={popupState.itemId}
          itemName={popupState.itemName}
          methods={allMethods}
          prices={prices}
          onSelect={handleSourceSelect}
          onClose={() => setPopupState(null)}
        />
      )}
    </div>
  );
}
