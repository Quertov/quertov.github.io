import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/components/utils/ReduxProvider";
import { ClientProvider } from "@/components/utils/ClientProvider";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

export const metadata: Metadata = {
  title: "Q Web",
  description: "Q Web company",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={ locale }>
      <body>
        <ReduxProvider>
          <NextIntlClientProvider locale={ locale } messages={messages}>
            <ClientProvider>
              {children}
            </ClientProvider>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}