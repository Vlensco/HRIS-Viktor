import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"MMS People Enterprise",description:"Enterprise maritime HRIS for PT Multi Maritim Shipping"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body>{children}</body></html>}
