declare namespace IUpload {
  interface FileStreamUpload {
    onSearchRefetch: () => void;
  }
  type FileStream = any;
  type Resp = null;
}

export = IUpload;
export as namespace IUpload;
