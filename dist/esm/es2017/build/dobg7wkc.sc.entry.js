/*! Built with http://stenciljs.com */
import { h } from '../agc-corn-production-cost.core.js';

class AgcCornProductionCostResultsPlaceholder {
    render() {
        const placeholder = () => h("span", null,
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }));
        return (h("section", null,
            h("ul", { class: "agc-results-placeholder" },
                h("li", null,
                    h("h2", { "data-i18n": "results.total-income" }, "Income"),
                    placeholder()),
                h("li", null,
                    h("h2", { "data-i18n": "results.total-expenses" }, "Expenses"),
                    placeholder()),
                h("li", null,
                    h("h2", { "data-i18n": "results.net-income-per-acre" }, "Net Income per Acre"),
                    placeholder()),
                h("li", null,
                    h("h2", { "data-i18n": "results.net-income-total" }, "Net Income Total"),
                    placeholder()))));
    }
    static get is() { return "agc-corn-production-cost-results-placeholder"; }
}

export { AgcCornProductionCostResultsPlaceholder };
