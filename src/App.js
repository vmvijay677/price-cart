import "./index.css";
import { useState } from "react";

export default function App() {
  const freeTier = [
    {
      h5: "Free",
      h6: "/month",
      li1: "Single User",
      li2: "5GB Storage",
      li3: "Unlimited Public Projects",
      li4: "Community Access",
      li5: "Unlimited Private Projects",
      li6: "Dedicated Phone Support",
      li7: "Free Subdomain",
      li8: "Monthly Status Reports",
      button: "Button"
    }
  ]
  return(
    <div>
      {freeTier.map(({h5, h6, li1, li2, li3, li4, li5, li6, li7, li8, button}) => <Free h5={h5} h6={h6} li1={li1} li2={li2} li3={li3} li4={li4} li5={li5} li6={li6} li7={li7} li8={li8} button={button}/>)}
    </div>
  );
}

function Free({h5, h6, li1, li2, li3, li4, li5, li6, li7, li8, button}){
  const plusTier = [
    {
      h5: "Plus",
      h6: "/month",
      li1: "5 Users",
      li2: "50GB Storage",
      li3: "Unlimited Public Projects",
      li4: "Community Access",
      li5: "Unlimited Private Projects",
      li6: "Dedicated Phone Support",
      li7: "Free Subdomain",
      li8: "Monthly Status Reports",
      button: "Button"
    }
  ]

  const proTier = [
    {
      h5: "Pro",
      h6: "/month",
      li1: "Unlimited Users",
      li2: "150GB Storage",
      li3: "Unlimited Public Projects",
      li4: "Community Access",
      li5: "Unlimited Private Projects",
      li6: "Dedicated Phone Support",
      li7: "Free Subdomain",
      li8: "Monthly Status Reports",
      button: "Button"
    }
  ]
  return(
    <section className="pricing py-5">
      <div className="container">
        <div className="row">

        {/* <!-- Free Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{h5}</h5>
            <h6 className="card-price text-center">$0<span className="period">{h6}</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span>{li1}</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>{li2}</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>{li3}</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>{li4}</li>
              <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>{li5}</li>
              <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>{li6}</li>
              <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>{li7}</li>
              <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>{li8}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">{button}</a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Plus Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
        {plusTier.map(({h5, h6, li1, li2, li3, li4, li5, li6, li7, li8, button}) => <Plus h5={h5} h6={h6} li1={li1} li2={li2} li3={li3} li4={li4} li5={li5} li6={li6} li7={li7} li8={li8} button={button}/>)}
        </div>
      </div>

      {/* <!-- Pro Tier --> */}
      <div className="col-lg-4">
        <div className="card">
        {proTier.map(({h5, h6, li1, li2, li3, li4, li5, li6, li7, li8, button}) => <Pro h5={h5} h6={h6} li1={li1} li2={li2} li3={li3} li4={li4} li5={li5} li6={li6} li7={li7} li8={li8} button={button}/>)}
        </div>
      </div>
      </div>
      </div>
    </section>
  )
}

function Plus({h5, h6, li1, li2, li3, li4, li5, li6, li7, li8, button}){
  return(
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{h5}</h5>
            <h6 className="card-price text-center">$9<span className="period">{h6}</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fa fa-check"></i></span><strong>{li1}</strong></li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>{li2}</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>{li3}</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>{li4}</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>{li5}</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>{li6}</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>{li7}</li>
              <li className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>{li8}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">{button}</a>
            </div>
    </div>
  )
}

function Pro({h5, h6, li1, li2, li3, li4, li5, li6, li7, li8, button}){
  return(
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{h5}</h5>
      <h6 className="card-price text-center">$49<span className="period">{h6}</span></h6>
      <hr />
      <ul className="fa-ul">
        <li><span className="fa-li"><i className="fa fa-check"></i></span><strong>{li1}</strong></li>
        <li><span className="fa-li"><i className="fa fa-check"></i></span>{li2}</li>
        <li><span className="fa-li"><i className="fa fa-check"></i></span>{li3}</li>
        <li><span className="fa-li"><i className="fa fa-check"></i></span>{li4}</li>
        <li><span className="fa-li"><i className="fa fa-check"></i></span>{li5}</li>
        <li><span className="fa-li"><i className="fa fa-check"></i></span>{li6}</li>
        <li><span className="fa-li"><i className="fa fa-check"></i></span><strong>Unlimited</strong> {li7}</li>
        <li><span className="fa-li"><i className="fa fa-check"></i></span>{li8}</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">{button}</a>
      </div>
    </div>
  )
}

