import React, { useState, useRef, ChangeEvent, memo } from 'react';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';
import { Button, Modal } from 'antd';
import { upload } from '@/api/methods/upload';
import { useDebounceEffect } from '@/hooks';
import { MODAL_OPTION } from '@/constants';
import { canvasPreview } from './canvas-preview';
import { centerAspectCrop } from './center-aspect-crop';
import 'react-image-crop/dist/ReactCrop.css';
import css from './index.module.less';

const ImageCropper = memo((props: IImageCropper) => {
  const { minWidth = 100, minHeight = 100, onImageCropper } = props;
  const fileRef = useRef<any>({});
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const previewCircularCanvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const imgRefCurrent = imgRef.current;
  const blobUrlRef = useRef('');
  const [changeCrop, setChangeCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [scale] = useState(1);
  const [rotate] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aspect] = useState<number | undefined>(1);
  const [imgSrc, setImgSrc] = useState('');

  function onImageLoad(event: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = event.currentTarget;
      setChangeCrop(centerAspectCrop(width, height, aspect));
    }
  }
  const getCroppedImg = () => {
    if (!completedCrop || !imgRefCurrent) return;
    const canvas = document.createElement('canvas');
    const scaleX = imgRefCurrent.naturalWidth / imgRefCurrent.width;
    const scaleY = imgRefCurrent.naturalHeight / imgRefCurrent.height;
    canvas.width = completedCrop.width;
    canvas.height = completedCrop.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.drawImage(
      imgRefCurrent,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      completedCrop.width,
      completedCrop.height,
    );
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/jpeg'); // 可以更改为所需的 MIME 类型
    });
  };
  // 保存为图片
  const onSaveImage = async () => {
    if (!onImageCropper) return;
    const formData = new FormData();
    setLoading(true);
    try {
      const imgResult: any = await getCroppedImg();
      formData.append('file', imgResult);
      const resp = await upload(formData);
      const { success, data = '' } = resp;
      setLoading(false);
      if (!success) return;
      onImageCropper(data);
      setOpen(!open);
      onResetCrop();
    } catch (error) {
      console.error(`error----->：`, error);
    }
    setLoading(false);
  };
  const onUploadClick = () => {
    fileRef.current.click();
  };
  const onResetInputValue = (event: Event | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    (event.target as HTMLInputElement).value = '';
  };
  const onResetCrop = () => {
    setImgSrc('');
    // 重置裁剪状态
    setChangeCrop(undefined);
    setCompletedCrop(undefined);
    // 清除预览 Canvas
    const previewCanvas: any = previewCanvasRef.current;
    const previewCircularCanvas: any = previewCircularCanvasRef.current;
    if (previewCanvas || previewCircularCanvas) {
      previewCanvas.getContext('2d').clearRect(0, 0, previewCanvas.width, previewCanvas.height);
      previewCircularCanvas
        .getContext('2d')
        .clearRect(0, 0, previewCircularCanvas.width, previewCircularCanvas.height);
    }
    // 撤销 Blob URL
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = ''; // 重置引用
    }
  };
  const onUploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    onResetCrop();
    const target = event.target as HTMLInputElement;
    const files = Array.from(target.files as FileList);
    const fileReader = new FileReader();
    fileReader.addEventListener('load', () => setImgSrc(fileReader.result?.toString() || ''));
    fileReader.readAsDataURL(files[0]);
  };
  const onOpen = () => {
    setOpen(!open);
  };
  const onOk = () => {
    onSaveImage();
  };
  const onCancel = () => {
    onResetCrop();
    setOpen(!open);
  };
  const onComplete = (c: PixelCrop) => {
    setCompletedCrop(c);
  };
  // 预览
  const onCanvasPreview = () => {
    if (
      completedCrop?.width &&
      completedCrop?.height &&
      imgRefCurrent &&
      previewCanvasRef.current &&
      previewCircularCanvasRef.current
    ) {
      // We use canvasPreview as it's much faster than imgPreview.
      canvasPreview(imgRefCurrent, previewCanvasRef.current, completedCrop, scale, rotate);
      canvasPreview(imgRefCurrent, previewCircularCanvasRef.current, completedCrop, scale, rotate);
    }
  };
  useDebounceEffect(onCanvasPreview, 100, [completedCrop, scale, rotate]);

  return (
    <>
      <Button size="large" onClick={onOpen}>
        更改
      </Button>
      <Modal
        {...MODAL_OPTION}
        open={open}
        title="图片裁剪"
        onCancel={onCancel}
        okText="确认"
        cancelText="取消"
        footer={null}
      >
        <div className={css['image-cropper-container']}>
          <div className={css['upload-container']}>
            <Button onClick={onUploadClick}>选择文件</Button>
            <input
              accept="image/*"
              ref={fileRef}
              type="file"
              onClick={(event) => onResetInputValue(event)}
              className={css['upload-file']}
              onChange={onUploadFile}
            />
          </div>
          {!!imgSrc && (
            <ReactCrop
              crop={changeCrop}
              onChange={(_, percentCrop) => setChangeCrop(percentCrop)}
              onComplete={(c) => onComplete(c)}
              aspect={aspect}
              minWidth={minWidth}
              minHeight={minHeight}
              ruleOfThirds
            >
              <img ref={imgRef} alt="Crop me" src={imgSrc} onLoad={onImageLoad} />
            </ReactCrop>
          )}
          {completedCrop ? (
            <ul className={css['preview-canvas']}>
              <li>
                <span>预览1</span>
                <canvas
                  ref={previewCanvasRef}
                  style={{
                    border: '1px solid #d9d9d9',
                    objectFit: 'contain',
                    borderRadius: '8px',
                    width: 100,
                    height: 100,
                  }}
                />
              </li>
              <li className="">
                <span>预览2</span>
                <canvas
                  ref={previewCircularCanvasRef}
                  style={{
                    border: '1px solid #d9d9d9',
                    objectFit: 'contain',
                    borderRadius: '50%',
                    width: 100,
                    height: 100,
                  }}
                />
              </li>
            </ul>
          ) : null}
        </div>
        <Button type="primary" loading={loading} block onClick={onOk}>
          确认
        </Button>
      </Modal>
    </>
  );
});

export default ImageCropper;
