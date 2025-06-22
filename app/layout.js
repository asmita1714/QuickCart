import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({ subsets: ['latin'], weight: ["300", "400", "500"] })

export const metadata = {
  title: "QuickCart - GreatStack",
  description: "E-Commerce with Next.js ",
};

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <ClerkProvider>
=======
     <ClerkProvider>
>>>>>>> 0def79537be5346dd9fb40264f526f8a774bf5ec
      <html lang="en">
        <body className={'${outfit.className} antialiased text-gray-700'} >
          <Toaster />
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
<<<<<<< HEAD
  );
}
=======
  );
}
>>>>>>> 0def79537be5346dd9fb40264f526f8a774bf5ec
