import Navbar from "@/globals/navbar/Navbar"

export default function OthersLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section><Navbar/>{children}</section>
  }