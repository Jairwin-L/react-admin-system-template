declare namespace IQueryAuth {
  type List = ListItem[];
  interface ListItem {
    id: string;
    superCategoryId?: string;
    name: string;
    frontDesc: string;
    bannerUrl: string;
    iconUrl?: string;
    wapBannerUrl?: string;
    categoryList?: ListItem[];
  }
  interface Param {
    username: string;
    password: string;
  }
  interface Resp {
    token: string;
  }
}
