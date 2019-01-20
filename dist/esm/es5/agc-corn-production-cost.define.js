
// AgcCornProductionCost: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './agc-corn-production-cost.core.js';
import {
  AgcCornProductionCost,
  AgcCornProductionCostInputs,
  AgcCornProductionCostProgress,
  AgcCornProductionCostResults,
  AgcCornProductionCostResultsPlaceholder
} from './agc-corn-production-cost.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcCornProductionCost,
    AgcCornProductionCostInputs,
    AgcCornProductionCostProgress,
    AgcCornProductionCostResults,
    AgcCornProductionCostResultsPlaceholder
  ], opts);
}
