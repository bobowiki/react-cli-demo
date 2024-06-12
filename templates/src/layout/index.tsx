import { Layout } from '@arco-design/web-react';
import { Outlet } from 'react-router-dom';
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
function LayoutCom() {
  return (
    <Layout className="h-screen pt-16">
      <Header className="h-16 shadow-md fixed top-0 w-full bg-white z-50">
        Header
      </Header>
      <Content className="flex-grow">
        <Outlet></Outlet>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default LayoutCom;
