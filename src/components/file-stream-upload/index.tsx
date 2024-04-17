import { LoadingOutlined, PaperClipOutlined } from '@ant-design/icons';
import { Button, Modal, message } from 'antd';
import { useEffect, useState } from 'react';
import { upload } from '@/api/modules/upload';
import SelectFile from './file';

const FileStreamUpload = (props: IUpload.FileStreamUpload) => {
  const { onSearchRefetch } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [btnLoading, setBtnLoading] = useState<boolean>(false);
  const [uploadDisabled, setUploadDisabled] = useState<boolean>(true);
  // TODO: ts
  const [uploadFileInfo, setUploadFileInfo] = useState<any>({});
  // 确认上传
  const onFinish = async () => {
    const formData = new FormData();
    formData.append('file', uploadFileInfo.file);
    setBtnLoading(true);
    try {
      const { success } = await upload(formData);
      setBtnLoading(false);
      if (!success) return;
      if (onSearchRefetch) {
        onSearchRefetch();
      }
      setVisible(false);
      message.success('操作成功');
      onUploadFileChange({
        status: 'none',
      });
    } catch (error) {
      console.log(error);
    }
  };
  // 【X】关闭按钮
  const onModalClose = (): void => {
    if (btnLoading) return;
    setUploadDisabled(true);
    setVisible(false);
    setUploadFileInfo({
      status: 'none',
    });
  };
  const onUploadFileChange = (item: { status: 'none' | 'progress' | 'done' }) => {
    setUploadFileInfo(item);
  };
  useEffect(() => {
    if (uploadFileInfo.status === 'none' || uploadFileInfo.status === 'progress') {
      setUploadDisabled(true);
    }
    if (uploadFileInfo.status === 'done') {
      setUploadDisabled(false);
    }
  }, [uploadFileInfo]);
  return (
    <>
      <Button onClick={() => setVisible(true)}>导入</Button>
      <Modal
        title="用户导入"
        centered
        open={visible}
        maskClosable={false}
        keyboard={false}
        onCancel={onModalClose}
        okButtonProps={{ disabled: uploadDisabled, loading: btnLoading }}
        cancelButtonProps={{ disabled: btnLoading }}
        onOk={onFinish}
        style={{ height: '200px' }}
        okText="导入"
      >
        <SelectFile uploadDisabled={btnLoading} onUploadFileChange={onUploadFileChange} />
        <>
          {uploadFileInfo.status === 'none' ? (
            <span className="file_prefix">支持扩展名：.xls .xlsx</span>
          ) : (
            <p className="upload_file">
              {uploadFileInfo.status === 'progress' && <LoadingOutlined className="upload_icon" />}
              {uploadFileInfo.status === 'done' && <PaperClipOutlined className="upload_icon" />}
              {(uploadFileInfo.status === 'done' || uploadFileInfo.status === 'progress') &&
                `${uploadFileInfo?.file?.name}`}
            </p>
          )}
        </>
      </Modal>
    </>
  );
};

export default FileStreamUpload;
