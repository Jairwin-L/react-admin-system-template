import { FILE } from '../const';
import apiRequest from '../index';

// upload
export async function upload(file: any): Promise<IBaseResp<IUpload.Resp>> {
  try {
    const res = await apiRequest.post<IUpload.Resp, IUpload.FileStream>(FILE.UPLOAD, file);
    return res;
  } catch (error) {
    console.log('error----->：', error);
    return {};
  }
}
