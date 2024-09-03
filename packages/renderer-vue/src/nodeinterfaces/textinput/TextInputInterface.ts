import { type ComponentOptions, markRaw } from "vue";
import { NodeInterface } from "@onegen-baklavajs/core";
import TextInputInterfaceComponent from "./TextInputInterface.vue";

export class TextInputInterface extends NodeInterface<string> {
    component = markRaw(TextInputInterfaceComponent) as ComponentOptions;
}

export { TextInputInterfaceComponent };
