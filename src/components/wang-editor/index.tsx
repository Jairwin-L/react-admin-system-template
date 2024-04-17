import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import '@wangeditor/editor/dist/css/style.css'; // 引入 css
import { Divider, Empty, message } from 'antd';
import { useEffect, useState } from 'react';
// import { uploadUrl } from "@helper/biz";

const wangeditorBorderStyle = '1px solid #ccc';

export default function WangEditor(props: { content: string }) {
  const { content } = props;
  const [editor, setEditor] = useState<IDomEditor | null>(); // 存储 editor 实例
  const [html, setHtml] = useState(content); // 编辑器内容
  const toolbarConfig: Partial<IToolbarConfig> = {
    excludeKeys: [
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      // "emoticon", // 表情
      'image', // 插入图片
      // 'table', // 表格
      // 'video', // 插入视频
      // 'code', // 插入代码
      // "undo", // 撤销
      // "redo", // 重复
    ],
  };
  const editorConfig: Partial<IEditorConfig> = {
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
    // uploadImage: {
    //   async customUpload(file: File, insertFn: InsertFnType) {
    //     //开始请求  let formData = new FormData();
    //     // formData.append("img", file);
    //     // const res = await uploadHttp.post("/upload", formData);
    //     // if (res.sta === 0) {
    //     //   //插入操作 ,url:图片url，alt：图片alt，href：图片href
    //     //   insertFn(url, alt, href);
    //     // }
    //   },
    // },
  };
  function initEditor() {
    // editor.customConfig.showLinkImg = false;
    // editor.customConfig.uploadImgServer = uploadUrl; // 上传图片的接口地址
    // editor.customConfig.uploadFileName = "file"; // formdata中的name属性
    // editor.customConfig.debug = true; // 开启debug模式
    // editor.customConfig.uploadImgHeaders = {
    //   token: sessionStorage.getItem("token"), // 设置请求头
    // };
    // editor.customConfig.menus = [
    //   "head", // 标题
    //   "bold", // 粗体
    //   "fontSize", // 字号
    //   "fontName", // 字体
    //   "italic", // 斜体
    //   "underline", // 下划线
    //   "strikeThrough", // 删除线
    //   "foreColor", // 文字颜色
    //   "backColor", // 背景颜色
    //   "link", // 插入链接
    //   "list", // 列表
    //   "justify", // 对齐方式
    //   "quote", // 引用
    //   "emoticon", // 表情
    //   "image", // 插入图片
    //   // 'table', // 表格
    //   // 'video', // 插入视频
    //   // 'code', // 插入代码
    //   "undo", // 撤销
    //   "redo", // 重复
    // ];
    // editor.customConfig.uploadImgHooks = {
    //   // 图片上传并返回结果，但图片插入错误时触发
    //   fail: function (xhr, editor, result) {
    //     console.log(result);
    //   },
    //   success: function (xhr, editor, result) {
    //     // 图片上传并返回结果，图片插入成功之后触发
    //     console.log(result, "success");
    //   },
    // };
    // editor.create();
  }
  // 及时销毁 editor ，重要！
  useEffect(() => {
    if (!editor) return;
    initEditor();
    return () => {
      if (!editor) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);
  useEffect(() => {
    if (editor?.getText()) {
      setHtml(editor?.getText());
    }
  }, [editor?.getText()]);
  return (
    <div className="wangeditor">
      <Toolbar
        // TODO:
        // @ts-ignore
        editor={editor}
        defaultConfig={toolbarConfig}
        mode="default"
        style={{
          borderTop: wangeditorBorderStyle,
          borderRight: wangeditorBorderStyle,
          borderLeft: wangeditorBorderStyle,
        }}
      />
      <Editor
        defaultConfig={editorConfig}
        value={html}
        onCreated={setEditor}
        // TODO:
        // eslint-disable-next-line @typescript-eslint/no-shadow
        onChange={(editor: IDomEditor) => setHtml(editor.getHtml())}
        mode="default"
        style={{ height: '500px', border: wangeditorBorderStyle }}
      />
      <Divider>预览</Divider>
      {editor?.getText() ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <Empty description="暂无内容" />
      )}
    </div>
  );
}
