import * as Core from "@onegen-baklavajs/core";
import * as Engine from "@onegen-baklavajs/engine";
import * as InterfaceTypes from "@onegen-baklavajs/interface-types";
import * as RendererVue from "@onegen-baklavajs/renderer-vue";

import { createApp, h } from "vue";
function createBaklava(element: Element): RendererVue.IBaklavaViewModel {
    let exportViewModel: RendererVue.IBaklavaViewModel;

    createApp({
        setup() {
            const viewModel = RendererVue.useBaklava();
            exportViewModel = viewModel;
            return { viewModel };
        },
        render() {
            return h(RendererVue.BaklavaEditor, { viewModel: this.viewModel });
        },
    }).mount(element);

    return exportViewModel!;
}

export { Core, Engine, InterfaceTypes, RendererVue, createBaklava };
