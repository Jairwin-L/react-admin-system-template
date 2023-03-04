import { ReactNode } from "react";

declare namespace ILayoutRender {
  type ElementRoute = Array<ElementRouteItem>;
	type ElementRouteItem = {
    children?: ElementRouteItem[];
    element?: ReactNode;
    index?: boolean;
    path?: string;
    meta?: MetaInfo;
  }
	type MetaInfo = {
    title?: string;
    key?: string;
    selectedKeys?: string[];
  }
	type Header = {
		collapsed: boolean;
		onSetCollapsed: (visible: boolean) => void
	}
}

export = ILayoutRender
export as namespace ILayoutRender
