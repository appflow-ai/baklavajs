import { AbstractNode } from "@onegen-baklavajs/core/dist/node";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NodeInterface } from "@onegen-baklavajs/core/dist/nodeInterface";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Connection } from "@onegen-baklavajs/core/dist/connection";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Graph } from "@onegen-baklavajs/core/dist/graph";

declare module "@onegen-baklavajs/core/dist/node" {
    interface AbstractNode {
        position: { x: number; y: number };
        width: number;
        disablePointerEvents: boolean;
        twoColumn: boolean;
        reverseY?: boolean;
    }
}

declare module "@onegen-baklavajs/core/dist/nodeInterface" {
    interface NodeInterface {
        displayInSidebar?: boolean;
    }
}

declare module "@onegen-baklavajs/core/dist/connection" {
    interface Connection {
        isInDanger?: boolean;
    }
}

declare module "@onegen-baklavajs/core/dist/graph" {
    interface Graph {
        panning: { x: number; y: number };
        scaling: number;
        sidebar: { visible: boolean; nodeId: string; optionName: string };
        selectedNodes: AbstractNode[];
    }

    interface IGraphState {
        panning: { x: number; y: number };
        scaling: number;
    }
}

declare module "@onegen-baklavajs/core/dist/graphTemplate" {
    interface GraphTemplate {
        panning?: { x: number; y: number };
        scaling?: number;
    }

    interface IGraphTemplateState {
        panning?: { x: number; y: number };
        scaling?: number;
    }
}
