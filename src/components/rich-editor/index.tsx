import { message } from 'antd';
import { Editor, Toolbar } from '@wangeditor-next/editor-for-react';
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor-next/editor';
import '@wangeditor-next/editor/dist/css/style.css'; // 引入 css

// type InsertFnType = (url: string, alt: string, href: string) => void;

export default function RichEditor(props: any) {
  const { content } = props;
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null); // TS 语法
  // 编辑器内容
  const [html, setHtml] = useState(content);

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}; // TS 语法
  // const toolbarConfig = { }                        // JS 语法

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    // JS 语法
    placeholder: '请输入内容...',
    customAlert(s: string, t: string) {
      switch (t) {
        case 'success':
          message.success(s);
          break;
        case 'info':
          message.info(s);
          break;
        case 'warning':
          message.warning(s);
          break;
        case 'error':
          message.error(s);
          break;
        default:
          message.info(s);
          break;
      }
    },
    MENU_CONF: {
      // 自定义选择图片
      // customBrowseAndUpload(insertFn: InsertFnType) {
      // 自己选择文件
      // 自己上传文件，并得到图片 url alt href
      // 最后插入图片
      // insertFn(url, alt, href);
      // },
    },
  };

  // 及时销毁editor，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  return (
    <>
      <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editorChange) => setHtml(editorChange.getHtml())}
          mode="default"
          style={{ height: '500px', overflowY: 'hidden' }}
        />
      </div>
      <div style={{ marginTop: '15px' }} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
