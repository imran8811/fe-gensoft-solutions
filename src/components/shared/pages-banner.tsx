import Link from "next/link";

export default function PagesBannerComp(props:any) {
  return (
    <>
      <div className="container-fluid page-header py-5">
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">{props.value}</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><Link href={"/"}>Home</Link></li>
              <li className="breadcrumb-item" aria-current="page">{props.value}</li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}
