import {
  HomeIcon,
  PencilIcon,
  TrashIcon,
  BuildingOffice2Icon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

type Props = {
  contact: any;
};

const Contact = (props: Props) => {
  return (
    <article className="flex items-center justify-center rounded-lg bg-white py-3 drop-shadow-2xl ">
      <div className="basis-1/3 flex items-center justify-center">
        <img
          src={props.contact.profilePicture}
          className=" rounded-full h-20 w-20 object-cover"
        />
      </div>
      <div className="basis-1/3">
        <h1 className="font-semibold text-lg leading-5 text-blue-500">
          {props.contact.name}
        </h1>
        <p className="text-sm font-medium">{props.contact.phone}</p>
        <div className="flex gap-1 flex-wrap">
          <p className="text-xs  font-medium leading-8 text-gray-500 flex  items-center gap-1">
            <span>
              {props.contact.type == "personal" ? (
                <HomeIcon className="h-3.5 w-3.5" />
              ) : (
                <BuildingOffice2Icon className="h-3.5 w-3.5" />
              )}
            </span>
            {props.contact.type}
          </p>
          <div className="text-xs  font-medium leading-8">
            {props.contact.isWhatsapp ? (
              <p className="text-green-500 flex  items-center gap-1">
                <ChatBubbleBottomCenterTextIcon className=" h-3.5 w-3.5 ml-1" />
                <span>whatsapp</span>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="basis-1/3 flex items-center justify-center gap-2">
        <Link
          to="edit-contact"
          className="p-2 rounded-full border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 focus:ring-blue-300"
        >
          <PencilIcon className="  h-5 w-5" />
        </Link>
        <button className="p-2 rounded-full border border-red-500 text-red-500 hover:text-white hover:bg-red-500 focus:ring-red-300">
          <TrashIcon className=" h-5 w-5" />
        </button>
      </div>
    </article>
  );
};

export default Contact;
