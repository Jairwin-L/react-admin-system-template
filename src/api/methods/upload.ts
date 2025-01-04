import { FILE } from '../const';
import alova from '../alova';

// upload
export async function upload(file: any) {
  const res = await alova.Post<IUpload.Resp, IUpload.FileStream>(FILE.UPLOAD, file);
  return res;
}
