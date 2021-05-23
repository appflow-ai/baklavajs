import { Graph, GraphTemplate, IGraphInterface, IGraphState } from "./graph";
import { AbstractNode, CalculateFunction, INodeState } from "./node";
import { NodeInterface } from "./nodeInterface";

export interface IGraphNodeState extends INodeState<any, any> {
    graphState: IGraphState;
}

export function createGraphNodeType(template: GraphTemplate): new () => AbstractNode {
    return class GraphNode extends AbstractNode {
        public type = `GraphNode-${template.id}`;
        public title = "GraphNode";

        public inputs: Record<string, NodeInterface<any>> = {};
        public outputs: Record<string, NodeInterface<any>> = {};

        private template = template;
        private graph!: Graph;

        constructor() {
            super();
            this.template.events.updated.addListener(this, () => this.initialize());
            this.initialize();
        }

        public calculate?: CalculateFunction<any, any> | undefined;

        public load(state: IGraphNodeState) {
            if (!this.template) {
                throw new Error("Unable to load graph node without graph template");
            }
            const graph = new Graph(this.template.editor);
            graph.load(state.graphState);
            super.load(state);
        }

        public save(): IGraphNodeState {
            const state = super.save();
            return {
                ...state,
                graphState: this.graph.save(),
            };
        }

        public destroy() {
            this.template.events.updated.removeListener(this);
        }

        private initialize() {
            this.graph = this.template.createGraph();
            this.updateInterfaces();
        }

        private updateInterfaces() {
            this.inputs = Object.fromEntries(this.getInterfaceEntries(this.graph.inputs));
            this.outputs = Object.fromEntries(this.getInterfaceEntries(this.graph.outputs));
        }

        private getInterfaceEntries(graphInterfaceList: IGraphInterface[]) {
            return graphInterfaceList.map((gi) => {
                const intf = this.graph.findNodeInterface(gi.nodeInterfaceId);
                if (!intf) {
                    throw new Error(
                        `Error while updating interfaces on GraphNode: Unable to find interface with id ${gi.nodeInterfaceId}`
                    );
                }
                intf.name = gi.name;
                return [gi.nodeInterfaceId, intf];
            });
        }
    };
}