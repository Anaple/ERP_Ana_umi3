import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  
    navTheme: "light",
    primaryColor: "#144BD3",
    layout: "mix",
    contentWidth: "Fixed",
    fixedHeader: true,
    fixSiderbar: true,
    title: "AnA ERP",
    pwa: false,
    splitMenus: true,
    logo: '/logo.png',
    
};



export default Settings;
