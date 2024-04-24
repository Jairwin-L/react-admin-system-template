import { UploadOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import { ChangeEvent } from 'react';
import { beforeUploadFile } from '@/utils/upload-file';
import css from './index.module.less';

export default function SelectFile(props: ISelectFile) {
  const { uploadDisabled = false, onUploadFileChange } = props;
  const uploadFileRef = useRef<any>({});
  const [disabled, setDisabled] = useState<boolean>(uploadDisabled);
  const [fileData, setFileData] = useState<any>({
    status: 'none',
  });
  const onUploadFile = (event: Event | ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const file = (target.files as FileList)[0];
    if (!beforeUploadFile(file)) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const data = {
        ...fileData,
        file,
        status: 'done',
      };
      setFileData(data);
      setDisabled(false);
      onUploadFileChange(data);
    };
    fileReader.onerror = () => {
      // @ts-ignore TODO:
      message.error('文件失败，请重新上传：', fileReader.error);
      onUploadFileChange({
        status: 'none',
      });
      setDisabled(false);
    };
    fileReader.onprogress = () => {
      setFileData({
        status: 'progress',
      });
      onUploadFileChange({
        status: 'progress',
      });
      setDisabled(true);
    };
    fileReader.readAsArrayBuffer(file);
  };
  const onUploadClick = () => {
    uploadFileRef.current.click();
  };
  // 重置input的value为空
  /**
   * faq：使用input[type=file] 实现文件上传功能，通过onchange事件触发js代码，这个时候第一次上传是完全没问题的，当你第二次上传文件时，如果是不同于上一次上传文件的话是可以正常上传的，不过如果你选择的还是上一个文件，也就是两次上传的文件重复了，那么就会上传失败。
   * input是通过onchange事件来触发js代码的，由于两次文件是重复的，所以这个时候onchange事件是没有触发到的。
   * how：读取文件后，记得把input的value重新设置为空即.target.value=''
   */
  const onResetInputValue = (event: Event | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    (event.target as HTMLInputElement).value = '';
  };
  useEffect(() => {
    onUploadFileChange({
      status: 'none',
    });
  }, []);
  useEffect(() => {
    setDisabled(uploadDisabled);
  }, [uploadDisabled]);
  return (
    <>
      <div className={css.upload_container}>
        <Button disabled={disabled} onClick={onUploadClick}>
          <UploadOutlined />
          选择文件
        </Button>
        <input
          ref={uploadFileRef}
          type="file"
          onClick={(event) => onResetInputValue(event)}
          className={css.upload_input}
          onChange={onUploadFile}
        />
      </div>
    </>
  );
}
