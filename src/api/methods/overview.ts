import alova from '../alova';
import { OVERVIEW } from '../const';

export async function overview(): Promise<IBaseResp<IQueryBiz.Data>> {
  const res = await alova.Get<IBaseResp<IQueryBiz.Data>>(OVERVIEW.CHART, {
    headers: { 'Content-Type': 'application/json' },
  });
  return res;
}
export async function getLineSlider(): Promise<IBaseResp<IQueryBiz.Data>> {
  const res = await alova.Get<IBaseResp<IQueryBiz.Data>>(OVERVIEW.lineSlider, {
    headers: { 'Content-Type': 'application/json' },
  });
  return res;
}
export async function getLineAnnotation(): Promise<IBaseResp<IQueryBiz.Data>> {
  const res = await alova.Get<IBaseResp<IQueryBiz.Data>>(OVERVIEW.lineAnnotation, {
    headers: { 'Content-Type': 'application/json' },
  });
  return res;
}

export async function getMultiStepLine(): Promise<IBaseResp<IQueryBiz.Data>> {
  const res = await alova.Get<IBaseResp<IQueryBiz.Data>>(OVERVIEW.multiStepLine, {
    headers: { 'Content-Type': 'application/json' },
  });
  return res;
}
export async function getBarGroup(): Promise<IBaseResp<IQueryBiz.Data>> {
  const res = await alova.Get<IBaseResp<IQueryBiz.Data>>(OVERVIEW.barGroup, {
    headers: { 'Content-Type': 'application/json' },
  });
  return res;
}
