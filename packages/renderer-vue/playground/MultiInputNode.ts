import { NodeInterface, defineNode } from "@onegen-baklavajs/core";
import { allowMultipleConnections } from "@onegen-baklavajs/engine";
import { setTypeForMultipleConnections } from "@onegen-baklavajs/interface-types";
import { stringType } from "./interfaceTypes";

export default defineNode({
    type: "MultiInputNode",
    inputs: {
        data: () =>
            new NodeInterface<string[]>("Data", [])
                .use(allowMultipleConnections)
                .use(setTypeForMultipleConnections, stringType),
    },
    outputs: {
        output: () => new NodeInterface("Output", ""),
    },
    calculate({ data }) {
        return { output: data.join(", ") };
    },
});
