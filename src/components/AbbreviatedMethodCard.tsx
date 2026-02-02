"use client";

import { MethodEvaluation } from "@/lib/types";

interface AbbreviatedMethodCardProps {
  evaluation: MethodEvaluation;
  onInputClick: (e: React.MouseEvent, itemId: number) => void;
  onRemove: () => void;
}

export function AbbreviatedMethodCard({ evaluation, onInputClick, onRemove }: AbbreviatedMethodCardProps) {
  const formatGp = (num: number) => Math.floor(num).toLocaleString() + " gp";
  const iconUrl = (id: number) => `https://static.runelite.net/cache/item/icon/${id}.png`;

  const profitClass = evaluation.profitPerHour >= 0 ? 'text-green' : 'text-red';

  return (
    <div className="chain-card">
      {/* Remove Button */}
      <button
        onClick={onRemove}
        className="btn-remove-step"
        title="Remove step"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Header */}
      <div className="card-header">
        <h4 className="card-title" title={evaluation.methodName}>{evaluation.methodName}</h4>
        <span className={`card-profit ${profitClass}`}>
          {formatGp(evaluation.profitPerHour)}/hr
        </span>
      </div>

      {/* Flow Body */}
      <div className="card-body">

        {/* Inputs */}
        <div className="item-column">
          {evaluation.inputCosts.map((item) => (
            <div
              key={`in-${item.id}`}
              className="item-slot"
              onClick={(e) => onInputClick(e, item.id)}
              title={`Add source for: ${item.name}`}
            >
              <img src={iconUrl(item.id)} alt={item.name} referrerPolicy="no-referrer" />

              {/* Plus overlay on hover */}
              <div className="add-overlay">
                <span>+</span>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div className="flow-arrow">➔</div>

        {/* Outputs */}
        <div className="item-column">
          {evaluation.outputRevenues.map((item) => (
            <div key={`out-${item.id}`} className="item-slot" title={`${item.count}x ${item.name}`}>
              <img src={iconUrl(item.id)} alt={item.name} referrerPolicy="no-referrer" />
              <div className="count-badge">
                {item.count}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
