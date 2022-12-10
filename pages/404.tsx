import Link from "next/link";
import MainLayout from "../src/components/common/Layouts/MainLayout";


export default function Error() {
  return (
    <>
    <MainLayout className="error-page-wrapper">
      <h1>Not Found</h1>
      <p>The resource requested couldn’t be found on this server!</p>
    </MainLayout>
    </>
  )
}