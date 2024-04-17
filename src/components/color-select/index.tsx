import { Button, Popover, Tag } from 'antd';
import { PhotoshopPicker } from 'react-color';

interface IColorSelectorProps {
  value?: string;
  onChange?: ((color?: string) => void) | undefined;
}

export default function ColorSelector(props: IColorSelectorProps) {
  const { value, onChange } = props;
  const [visible, setVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(value);
  const onClear = () => {
    setSelectedColor('');
    onChange?.('');
  };

  return (
    <Popover
      open={visible}
      content={
        <PhotoshopPicker
          color={selectedColor}
          onAccept={() => {
            onChange?.(selectedColor);
            setVisible(false);
          }}
          onCancel={() => setVisible(false)}
          onChangeComplete={({ hex }) => {
            setSelectedColor(hex);
          }}
        />
      }
    >
      <Button onClick={() => setVisible(true)} type="primary">
        选择颜色
      </Button>
      {value && (
        <>
          <Tag className="color_tag" color={value}>
            {value}
          </Tag>
          <Button onClick={onClear}>清空</Button>
        </>
      )}
    </Popover>
  );
}
