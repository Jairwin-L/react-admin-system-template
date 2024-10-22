declare namespace IUpload {
  interface FileStreamUpload {
    onSearchRefetch: () => void;
  }
  type FileStream = any;
  type Resp = string;
}

export = IUpload;
export as namespace IUpload;
