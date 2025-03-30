import type { Metadata } from 'next';
import './globals.scss';
import { getClient } from '@/utils/serverClient';
import { MainMenuDocument, MainMenuQuery } from '@/graphql/generated/graphql';
import { Header } from '@/components/header';

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
  const menuData = await client.query<MainMenuQuery>({
    query: MainMenuDocument,
    context: {
      fetchOptions: {
        // Figure out this tag nonsense
        next: { tags: ['mainmenu'] },
      },
    },
  });
  return (
    <html lang='en'>
      <body>
        <Header menu={menuData.data.mainMenu} />
        {children}
      </body>
    </html>
  );
}
