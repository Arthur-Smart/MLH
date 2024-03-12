import Navbar from "@/globals/navbar/Navbar"

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section><Navbar/>{children}</section>
  }