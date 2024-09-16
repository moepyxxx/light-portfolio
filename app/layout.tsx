import type { Metadata } from "next";
import "./globals.css";
import { NOTO_SANS_JP } from "./fonts/notoSansJp";
import { PACIFICO } from "./fonts/pacifico";

export const metadata: Metadata = {
  title: "Moeko Iwaiのポートフォリオサイト",
  description:
    "Moeko Iwaiのポートフォリオサイト。大切にしていること・スキル・これまでの取り組みをまとめます。",
  robots: "noindex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${NOTO_SANS_JP.className} ${PACIFICO.className}`}>
        {children}
      </body>
    </html>
  );
}
