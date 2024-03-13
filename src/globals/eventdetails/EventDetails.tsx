"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import CERTIFICATE from "../../../public/certificate.svg";
import LANGUAGE from "../../../public/language.svg";
import DOLLAR_ICON from "../../../public/money.svg";
import FREE_ICON from "../../../public/free.svg";

import Speaker from "../speakers/Speaker";
import { IActivity } from "@/interface/ActivityInterface";

interface EventDetailsProps {
  event: IActivity;
}

const EventDetails = (event: IActivity) => {
  const [selected, setSelected] = useState(1);
  const [organization, setOrganization] = useState<IActivity>();

  type ButtonType = {
    id: number;
    title: string;
  };

  const buttons: ButtonType[] = [
    {
      id: 1,
      title: "Overview",
    },
    // {
    //   id: 2,
    //   title: "Agenda",
    // },
    // {
    //   id: 3,
    //   title: "Prerequisite",
    // },
  ];

  return (
    <>
      <div className="w-full flex flex-wrap items-center gap-5">
        {event && event.is_cert_available && (
          <>
            <div className="flex items-center">
              <Image
                src={CERTIFICATE}
                alt="CPD Certificates"
                width={25}
                height={25}
              />
              <p className="text-base font-medium ml-2">CPD certificate</p>
            </div>
          </>
        )}

        <div className="flex items-center">
          <Image
            src={LANGUAGE}
            alt="Activity Language"
            width={30}
            height={30}
          />
          {event.language == "en" ? (
            <p className="text-base font-medium ml-2">English</p>
          ) : (
            <p className="text-base font-medium ml-2">French</p>
          )}
        </div>
        {event.event_type == "paid" ? (
          <div className="flex items-center gap-2">
            <Image src={DOLLAR_ICON} alt="" width={21} height={21} />
            <p className="text-base font-medium">Paid</p>
          </div>
        ) : (
          <div className="flex items-center gap-[4px]">
            <Image src={FREE_ICON} alt="" width={40} height={40} />
            <p className="text-base font-medium">Free</p>
          </div>
        )}

        {event && event.cpd >= 1 && (
          <p className="font-medium text-base">CPD (yes)</p>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-5 mt-5">
        {event.presenters?.length > 1 &&
          event.presenters.map((presenter) => (
            <Speaker key={presenter.id} presenter={presenter} />
          ))}

        {/* <Speaker />
        <Speaker /> */}
      </div>
      <div className="flex items-center gap-10 mt-7 overflow-y-hidden no-scrollbar">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => setSelected(button.id)}
            className={
              button.id == selected
                ? "bg-[#D9D9D9] py-[5px] px-6 text-[#2C2C74] font-medium rounded"
                : "border-[#D9D9D9] border-[1px] rounded py-[5px] px-6"
            }
          >
            {button.title}
          </button>
        ))}
      </div>

      {/* Overview | Agenda | Prerequisite Details */}
      {selected == 1 && (
        <div className="flex flex-col mt-7">
          <div className="mb-4">
            <h1 className="text-[#333333] font-semibold text-lg">
              Overview one
            </h1>
            <p className="text-[#333333] text-base">{event.description}</p>
          </div>
          {/* <div className="mb-4">
            <h1 className="text-[#333333] font-semibold text-lg">
              Overview two
            </h1>
            <p className="text-[#333333]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature
            </p>
          </div>
          <div className="mb-4">
            <h1 className="text-[#333333] font-semibold text-lg">
              Overview three
            </h1>
            <p className="text-[#333333]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature
            </p>
          </div> */}
        </div>
      )}

      {selected == 2 && (
        <div className="flex flex-col mt-7">
          <div className="mb-4">
            <h1 className="text-[#333333] font-semibold text-lg">Agenda one</h1>
            <p className="text-[#333333]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature
            </p>
          </div>
          <div className="mb-4">
            <h1 className="text-[#333333] font-semibold text-lg">
              Angenda two
            </h1>
            <p className="text-[#333333]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature
            </p>
          </div>
          <div className="mb-4">
            <h1 className="text-[#333333] font-semibold text-lg">
              Agenda three
            </h1>
            <p className="text-[#333333]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature
            </p>
          </div>
        </div>
      )}

      {selected == 3 && (
        <div className="flex flex-col mt-7">
          <div className="mb-4">
            <h1 className="text-[#333333] font-semibold text-lg">
              Prerequisite one
            </h1>
            <p className="text-[#333333]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature
            </p>
          </div>
          <div className="mb-4">
            <h1 className="text-[#333333] font-semibold text-lg">
              Prerequisite two
            </h1>
            <p className="text-[#333333]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default EventDetails;
