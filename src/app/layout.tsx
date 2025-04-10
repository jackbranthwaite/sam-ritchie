import type { Metadata } from 'next';
import './globals.scss';
import { getClient } from '@/utils/serverClient';
import { Header } from '@/components/header';
import '@/styles/main.scss';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = getClient();
  // const menuData = await client.query<MainMenuQuery>({
  //   query: MainMenuDocument,
  //   context: {
  //     fetchOptions: {
  //       // Figure out this tag nonsense
  //       // next: { tags: ['mainmenu'] },
  //     },
  //   },
  // });
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
