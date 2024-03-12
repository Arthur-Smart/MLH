import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import LOGO from "../../../public/logo-white.svg";
import HOME_ICON from "../../../public/home.svg";
import MAIL_ICON from "../../../public/mail.svg"
import PHONE_ICON from "../../../public/phone.svg"
import X from "../../../public/x.svg"
import INSTAGRAM_ICON from "../../../public/ig.svg"
import LINKEDIN from "../../../public/linkedin.svg"
import FACEBOOK from "../../../public/fb.svg"
import Link from "next/link";

const Footer = () => {
  type FooterLinks = {
    id:number,
    image:string
    link:string
  }



  return (
    <footer className="w-full flex flex-col items-center justify-center bg-[#3E2C78] p-6">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <Image
            src={LOGO}
            alt="Medical Learning Hub"
            width={75}
            height={75}
            className={styles.logo__image}
          />
          <p className="text-white text-[15px] mt-3">
         Medical Learning Hub(MLH) is a Med-EdTech marketplace platform that enables healthcare professionals(HCPs) to search, book and access trainings withease across Africa. MLH also allows organizations and individuals planning learning sessions to automate a lot of the currently manual processes such as issuance of certifications, CPD/CME points/credits as well as track attendace and other learning outcomes. MLH Africa is currently active across Kenya, Uganda, Nigeria, Rwanda, Senegal and soon Ghana.
          </p>
        </div>
        <div>
          <h1 className="text-lg font-semibold text-white">Others</h1>
          <p className="text-white text-[15px] mt-3">Terms & Conditions</p>
          <p className="text-white text-[15px]">Privacy policy</p>
          <p className="text-white text-[15px]">FAQs</p>
          <p className="text-white text-[15px]">Refund and cancellation</p>
        </div>
        <div>
          <h1 className="text-lg font-semibold text-white">Useful links</h1>
          <Link href="#">
          <p className="text-white text-[15px] mt-3">About</p>
          </Link>
          <Link href="#">
          <p className="text-white text-[15px]">Event Organizer</p>
          </Link>
        </div>
        <div>
          <h1 className="text-lg font-semibold text-white">Contact us</h1>
          <div className="flex items-center mt-3">
            <Image
              src={HOME_ICON}
              alt="About Medical Learning Hub"
              width={20}
              height={20}
            />
            <p className="text-white text-[15px] ml-2">Africa, Nairobi Kenya</p>
          </div>
          <div className="flex items-center mt-2">
            <Image
              src={MAIL_ICON}
              alt="About Medical Learning Hub"
              width={17}
              height={17}
            />
            <p className="text-white text-[15px] ml-2">Africa, Nairobi Kenya</p>
          </div>
          <div className="flex items-center mt-2">
            <Image
              src={PHONE_ICON}
              alt="About Medical Learning Hub"
              width={17}
              height={17}
            />
            <p className="text-white text-[15px] ml-2">Africa, Nairobi Kenya</p>
          </div>
        </div>
      </div>
      <div className="container h-[1px] my-5 bg-gray-200"></div>
      <div className="container flex flex-col md:flex-row items-center justify-center md:justify-between">
        <p className="text-white text-[15px]">&copy;2024. Copyright. All rights reserved</p>
        <div className="flex mt-2 md:mt-0 items-center gap-3">
          <Link href="#">
            <Image src={LINKEDIN} alt="" width={17} height={17}/>
          </Link>
          <Link href="#">
            <Image src={FACEBOOK} alt="" width={8} height={8}/>
          </Link>
          <Link href="#">
            <Image src={X} alt="" width={13} height={13}/>
          </Link>
          <Link href="#">
            <Image src={INSTAGRAM_ICON} alt="" width={15} height={15}/>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
