/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DataItem } from "./utils/data-item";
export { DataItem } from "./utils/data-item";
export namespace Components {
    interface CustomButton {
    }
    interface DashBoard {
    }
    interface DataViz {
    }
    interface My3dChart {
        "data": DataItem[];
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLCustomButtonElement extends Components.CustomButton, HTMLStencilElement {
    }
    var HTMLCustomButtonElement: {
        prototype: HTMLCustomButtonElement;
        new (): HTMLCustomButtonElement;
    };
    interface HTMLDashBoardElement extends Components.DashBoard, HTMLStencilElement {
    }
    var HTMLDashBoardElement: {
        prototype: HTMLDashBoardElement;
        new (): HTMLDashBoardElement;
    };
    interface HTMLDataVizElement extends Components.DataViz, HTMLStencilElement {
    }
    var HTMLDataVizElement: {
        prototype: HTMLDataVizElement;
        new (): HTMLDataVizElement;
    };
    interface HTMLMy3dChartElement extends Components.My3dChart, HTMLStencilElement {
    }
    var HTMLMy3dChartElement: {
        prototype: HTMLMy3dChartElement;
        new (): HTMLMy3dChartElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "custom-button": HTMLCustomButtonElement;
        "dash-board": HTMLDashBoardElement;
        "data-viz": HTMLDataVizElement;
        "my-3d-chart": HTMLMy3dChartElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CustomButton {
    }
    interface DashBoard {
    }
    interface DataViz {
    }
    interface My3dChart {
        "data"?: DataItem[];
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "custom-button": CustomButton;
        "dash-board": DashBoard;
        "data-viz": DataViz;
        "my-3d-chart": My3dChart;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "custom-button": LocalJSX.CustomButton & JSXBase.HTMLAttributes<HTMLCustomButtonElement>;
            "dash-board": LocalJSX.DashBoard & JSXBase.HTMLAttributes<HTMLDashBoardElement>;
            "data-viz": LocalJSX.DataViz & JSXBase.HTMLAttributes<HTMLDataVizElement>;
            "my-3d-chart": LocalJSX.My3dChart & JSXBase.HTMLAttributes<HTMLMy3dChartElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
