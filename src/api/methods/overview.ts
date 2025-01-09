import alova from '../alova';
import { OVERVIEW } from '../const';

export async function overview(): Promise<IBaseResp<IQueryBiz.Resp>> {
  const res = await alova.Get<IBaseResp<IQueryBiz.Resp>>(OVERVIEW.CHART, {
    headers: { 'Content-Type': 'application/json' },
  });
  return res;
}
export async function getLineSlider(): Promise<IBaseResp<IQueryBiz.Resp>> {
  const res = await alova.Get<IBaseResp<IQueryBiz.Resp>>(OVERVIEW.lineSlider, {
    headers: { 'Content-Type': 'application/json' },
  });
  return res;
}
export async function getLineAnnotation(): Promise<IBaseResp<IQueryBiz.Resp>> {
  const res = await alova.Get<IBaseResp<IQueryBiz.Resp>>(OVERVIEW.lineAnnotation, {
    headers: { 'Content-Type': 'application/json' },
  });
  return res;
}

export async function getMultiStepLine(): Promise<IBaseResp<IQueryBiz.Resp>> {
  const res = await alova.Get<IBaseResp<IQueryBiz.Resp>>(OVERVIEW.multiStepLine, {
    headers: { 'Content-Type': 'application/json' },
  });
  return res;
}
export async function getBarGroup(): Promise<IBaseResp<IQueryBiz.Resp>> {
  const res = await alova.Get<IBaseResp<IQueryBiz.Resp>>(OVERVIEW.barGroup, {
    headers: { 'Content-Type': 'application/json' },
  });
  return res;
}
