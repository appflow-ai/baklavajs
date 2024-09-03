// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NodeInterface } from "@onegen-baklavajs/core/dist/nodeInterface";

declare module "@onegen-baklavajs/core/dist/nodeInterface" {
    interface NodeInterface {
        allowMultipleConnections?: boolean;
    }
}
