import { type FlyResponse } from 'flyio';

declare namespace IFlyio {
  type IFlyResponse = FlyResponse & {
    request: {
      slience?: boolean;
    };
  };
}

export = IFlyio;
export as namespace IFlyio;
