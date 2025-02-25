import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { ReduxProvider } from "@/components/utils/ReduxProvider";
import { ClientProvider } from "@/components/utils/ClientProvider";
import { Header } from '@/components/Header';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: any
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
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