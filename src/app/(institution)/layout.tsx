import InstitutionNav from "@/globals/institutionnav/InstitutionNav"

export default function InstitutionLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section><InstitutionNav/>{children}</section>
  }