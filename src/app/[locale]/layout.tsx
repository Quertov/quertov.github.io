// @ts-nocheck
/* eslint-disable no-use-before-define */

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { ReduxProvider } from "@/components/utils/ReduxProvider";
import { ClientProvider } from "@/components/utils/ClientProvider";
import { Header } from '@/components/Header';
import { Locales } from '@/types'; 

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locales)) {
    notFound();
  }
 
  const messages = await getMessages({ locale });
 
  return (
    <html lang={locale}>
      <body>
				<ReduxProvider>
					<NextIntlClientProvider messages={messages}>
            <Header />
						<ClientProvider>
							{children}
						</ClientProvider>
					</NextIntlClientProvider>
				</ReduxProvider>
      </body>
    </html>
  );
}