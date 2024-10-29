"use client";

import { Noto_Serif } from "next/font/google";
import "./styles/globals.css";
import "./styles/footer.css";
import "./styles/frames.css";
import "./styles/rodal.css";
import useRootLayout from "./hooks/useRootLayout";
import { NavBarAction } from "./constants/actionTypes";
import Particles from "./components/Particles";
import Modal from "./components/Modals/Modal";
import NavBar from "./components/NavBar";

const inter = Noto_Serif({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isModalOpen, handleCloseModal, handleSelectModal, currentModalOpen } =
    useRootLayout();

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar
          handleSelectModal={handleSelectModal}
          navBarAction={NavBarAction}
        />
        <Particles />
        {currentModalOpen && (
          <Modal
            isModalOpen={isModalOpen}
            currentModalOpen={currentModalOpen}
            handleCloseModal={handleCloseModal}
          />
        )}
        <div className={`${isModalOpen ? "opacity-30 bg-black" : ""}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
