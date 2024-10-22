interface IPageLayout {
  success?: boolean;
  loading?: boolean;
  children: any;
  onRefresh?: any;
  className?: string;
}
interface ICardContainer {
  children: React.ReactNode;
  className?: string;
}
interface IFormLayout<F> {
  form: any;
  onFinish: (values: F) => Promise<void>;
  children: React.ReactNode;
  loading: boolean;
}

interface IFooterToolbar {
  loading?: boolean;
  children?: React.ReactNode;
}

interface IAutoCenter {
  children: React.ReactNode;
  className?: string;
}
interface IColorSelector {
  value?: string;
  onChange?: ((color?: string) => void) | undefined;
}

interface IDetailItem {
  label: string;
  content: string;
}

interface IDetailLayout {
  children: React.ReactNode;
  pageLayout: IPageLayout;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}
interface IException {
  text?: string;
  onClick?: () => void;
}

interface ISelectFile {
  uploadDisabled: boolean;
  onUploadFileChange: ({ status }: { status: 'none' | 'progress' | 'done' }) => void;
}

interface IFileStreamUpload {
  onSearchRefetch: () => void;
}
interface IExternalLinkJump {
  href: string;
  className?: string;
  children: React.ReactNode;
}

interface IInternalLinkJump {
  link: string;
  text: string;
  className?: string;
  onClick?: any;
}

interface ITableAction {
  item: any;
  onRefresh: () => void;
}

interface IImageCropper {
  minWidth?: number;
  minHeight?: number;
  onImageCropper?: (src: string) => void;
}
