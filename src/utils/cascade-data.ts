// from：https://github.com/modood/Administrative-divisions-of-China
import provinces from 'china-division/dist/provinces.json';
import cities from 'china-division/dist/cities.json';
import areas from 'china-division/dist/areas.json';
// 使用上述城市数据, 生成一份格式如下的级联数据
interface IAdministrativeDivisionsOfChina {
  label: string;
  value: string;
  children: IAdministrativeDivisionsOfChina[];
}

/**
 * @module genAddressOptions
 * @description 获取地址级联数据
 */
export function genAddressOptions() {
  // 创建一个以省代码为键，值为该省所有城市的映射
  const cityMap = cities.reduce((acc: Record<string, any[]>, city: any) => {
    const { provinceCode } = city;
    if (!acc[provinceCode]) {
      acc[provinceCode] = [];
    }
    acc[provinceCode].push(city);
    return acc;
  }, {});
  // 创建一个以市代码为键，值为该市所有区的映射
  const areaMap = areas.reduce((acc: Record<string, any[]>, area: any) => {
    const { cityCode } = area;
    if (!acc[cityCode]) {
      acc[cityCode] = [];
    }
    acc[cityCode].push(area);
    return acc;
  }, {});
  // 将省数据转换为所需的格式
  const administrativeDivisions: IAdministrativeDivisionsOfChina[] = provinces.map((province) => {
    const provinceCode = province.code;
    // 获取该省下的所有城市
    const provinceCities = cityMap[provinceCode] || [];
    const provinceChildren: IAdministrativeDivisionsOfChina[] = provinceCities.map((city) => {
      const cityCode = city.code;
      // 获取该市下的所有区
      const cityAreas = areaMap[cityCode] || [];
      const cityChildren: IAdministrativeDivisionsOfChina[] = cityAreas.map((area) => ({
        label: area.name,
        value: area.code,
        children: [],
      }));
      return {
        label: city.name,
        value: city.code,
        children: cityChildren,
      };
    });
    return {
      label: province.name,
      value: province.code,
      children: provinceChildren,
    };
  });
  return administrativeDivisions;
}
/**
 * @module getAddressByCode
 * @description 级联code转文案
 */
// 获取地址文案的函数
export function getAddressByCode(codes: string[]): string {
  let options = genAddressOptions();
  const addressParts: string[] = [];
  for (const code of codes) {
    // 查找当前层级中对应的节点
    const found = options.find((division) => division.value === code);
    if (found) {
      // 将当前节点的名称加入地址部分
      addressParts.push(found.label);
      // 进入下一层级的 children
      options = found.children;
    } else {
      // 如果找不到对应的节点，提前返回空字符串
      return '';
    }
  }
  return addressParts.join('');
}
