import { FILE } from '../const';
import alova from '../alova';

// upload
export async function upload(file: any): Promise<IBaseResp<IUpload.Resp>> {
  const res = await alova.Post<IBaseResp<IUpload.Resp>, IUpload.FileStream>(FILE.UPLOAD, file);
  return res;
}
