"use client";

import { useState } from "react";
import { MethodEvaluation } from "@/lib/types";

interface MethodCardProps {
  evaluation: MethodEvaluation;
  gpPerXp?: number;
  onStartChain?: () => void;
}

export function MethodCard({ evaluation, gpPerXp = 0, onStartChain }: MethodCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const formatGp = (num: number) => Math.floor(num).toLocaleString() + " gp";
  const iconUrl = (id: number) => `https://static.runelite.net/cache/item/icon/${id}.png`;
  const wikiUrl = (name: string) => `https://oldschool.runescape.wiki/w/${encodeURIComponent(name.replace(/ /g, '_'))}`;

  const effectiveProfitPerHour = evaluation.profitPerHour + evaluation.totalExpPerHour * gpPerXp;
  const isProfitable = effectiveProfitPerHour >= 0;
  // Use normal colors if unlocked, gray/dim if locked
  const profitColor = isProfitable ? 'text-green' : 'text-red';

  // Locked styling classes
  const lockedClass = evaluation.isLocked ? 'locked' : '';
  const textClass = evaluation.isLocked ? 'text-gray-dim' : profitColor;
  const opacityClass = evaluation.isLocked ? 'opacity-50' : '';

  return (
    <div
      className={`method-card interactive ${isExpanded ? 'expanded' : ''} ${lockedClass}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* COLLAPSED STATE: Single Row */}
      {!isExpanded && (
        <div className="card-row">
          {/* 1. Output Icon(s) */}
          <div className={`row-section outputs-preview ${opacityClass}`}>
            {evaluation.outputRevenues.map((item) => (
              <div key={`out-prev-${item.id}`} className="mini-icon-wrapper" title={item.name}>
                <img src={iconUrl(item.id)} alt={item.name} className="mini-icon" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>

          {/* 2. Method Name + Lock Icon */}
          <div className={`row-section name-section ${opacityClass}`}>
            <h3 className="method-name">
              {evaluation.methodName}
              {evaluation.isLocked && <span className="lock-icon" title="Method Locked">🔒</span>}
            </h3>
          </div>

          {/* 3. Per Action Earnings (ALWAYS VISIBLE) */}
          <div className={`row-section action-section ${opacityClass}`}>
            <span className="label-tiny">Action:</span>
            <span className={`value-small ${textClass}`}>
              {formatGp(evaluation.profitPerAction)}
            </span>
          </div>

          {/* 4. Profit / Hour Result (ALWAYS VISIBLE) */}
          <div className={`row-section profit-section ${opacityClass}`}>
            <span className={`profit-large ${textClass}`}>
              {formatGp(effectiveProfitPerHour)}
            </span>
            <small className="avg-label-tiny">/hr</small>
          </div>
        </div>
      )}

      {/* EXPANDED STATE: Detailed View */}
      {isExpanded && (
        <>
          <div className="card-row expanded-header">
            <div className="row-section name-section">
              <h3 className="method-name">
                {evaluation.methodName}
                {evaluation.isLocked && <span className="lock-icon">🔒</span>}
              </h3>
            </div>

            <div className="row-section actions-section flex gap-2 items-center">
              {onStartChain && (
                <button
                  className="start-chain-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onStartChain();
                  }}
                  title="Start a crafting chain with this method"
                >
                  Start Chain
                </button>
              )}
              <span className={`profit-large ${textClass}`}>
                {formatGp(effectiveProfitPerHour)} / hr
              </span>
            </div>
          </div>

          <div className="expanded-details" onClick={(e) => e.stopPropagation()}>
            {evaluation.isLocked && (
              <div className="locked-warning">
                Requires: {[
                  ...evaluation.missingRequirements.map(req => `${req.skill} ${req.level}`),
                  ...evaluation.missingQuests,
                ].join(", ")}
              </div>
            )}

            <div className={`divider ${opacityClass}`} />

            {/* Visual Formula */}
            <div className={`equation-row ${opacityClass}`}>
              <div className="items-group inputs">
                {evaluation.inputCosts.map((item, idx) => (
                  <div key={`in-${item.id}`} className="item-node">
                    {idx > 0 && <span className="operator">+</span>}
                    <a href={wikiUrl(item.name)} target="_blank" rel="noopener noreferrer" className="item-icon-wrapper" title={`${item.count}x ${item.name}`} onClick={(e) => e.stopPropagation()}>
                      <img src={iconUrl(item.id)} alt={item.name} className="item-icon" referrerPolicy="no-referrer" />
                      <span className="item-count">{item.count}</span>
                    </a>
                  </div>
                ))}
              </div>
              <div className="arrow-operator">➜</div>
              <div className="items-group outputs">
                {evaluation.outputRevenues.map((item, idx) => (
                  <div key={`out-${item.id}`} className="item-node">
                    {idx > 0 && <span className="operator">+</span>}
                    <a href={wikiUrl(item.name)} target="_blank" rel="noopener noreferrer" className="item-icon-wrapper" title={`${item.count}x ${item.name}`} onClick={(e) => e.stopPropagation()}>
                      <img src={iconUrl(item.id)} alt={item.name} className="item-icon" referrerPolicy="no-referrer" />
                      <span className="item-count">{item.count}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Breakdown Table */}
            <div className={`breakdown-grid ${opacityClass}`}>
              <div className="breakdown-col">
                <h4>Inputs (Cost)</h4>
                <ul>
                  {evaluation.inputCosts.map((item) => (
                    <li key={item.id}>
                      <span>{item.count}x {item.name}:</span>
                      <span className="text-red">-{formatGp(item.total)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="breakdown-col">
                <h4>Outputs (Revenue)</h4>
                <ul>
                  {evaluation.outputRevenues.map((item) => (
                    <li key={item.id}>
                      <span>{item.count}x {item.name}:</span>
                      <span className="text-green">+{formatGp(item.total)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {evaluation.successRate !== undefined && evaluation.successRate < 1 && (
              <div className={`success-rate-notice ${opacityClass}`}>
                Success: {Math.round(evaluation.successRate * 100)}%
              </div>
            )}

            <div className={`expanded-footer ${opacityClass}`}>
              <div className="footer-metric">
                <span className="label-tiny">Cost/Action: </span>
                <span className="value-small text-warning">{formatGp(evaluation.costPerAction)}</span>
              </div>
              <div className="footer-metric">
                <span className="label-tiny">Profit/Action: </span>
                <span className={`value-small ${textClass}`}>{formatGp(evaluation.profitPerAction)}</span>
              </div>
              {evaluation.expPerHour.map((exp) => (
                <div key={exp.skill} className="footer-metric">
                  <span className="label-tiny">{exp.skill} XP/hr: </span>
                  <span className="value-small text-blue">{exp.amount.toLocaleString()}</span>
                </div>
              ))}
              <div className="footer-metric">
                <span className="label-tiny">Actions/hr: </span>
                <span className="value-small">{Math.floor(evaluation.actionsPerHour).toLocaleString()}</span>
              </div>
              {gpPerXp > 0 && (
                <div className="footer-metric">
                  <span className="label-tiny">XP Value/hr: </span>
                  <span className="value-small text-blue">+{formatGp(evaluation.totalExpPerHour * gpPerXp)}</span>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
