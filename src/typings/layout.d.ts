import { ReactNode } from 'react';

declare namespace ILayoutRender {
  type ElementRoute = ElementRouteItem[];
  interface ElementRouteItem {
    children?: ElementRouteItem[];
    element?: ReactNode;
    index?: boolean;
    path?: string;
    meta?: MetaInfo;
  }
  interface MetaInfo {
    title?: string;
    key?: string;
    selectedKeys?: string[];
  }
  interface Header extends Logo {
    onSetCollapsed: (visible: boolean) => void;
  }
  interface Logo {
    collapsed: boolean;
  }
}

export = ILayoutRender;
export as namespace ILayoutRender;
