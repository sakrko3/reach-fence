import { useState } from "react";
import { Form, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Resizer from "react-image-file-resizer";

type Props = {};

const AddContact = (props: Props) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [img, setImg] = useState("");

  // const getBase64 = (file: any) => {
  //   return new Promise((resolve, reject) => {
  //     const reader: any = new FileReader();
  //     reader.onload = () => resolve(reader.result);
  //     reader.onabort = (error: any) => reject(error);
  //     reader.readAsDataURL(file);
  //   });
  // };

  // const imageUpload = (e: any) => {
  //   const file = e.target.files[0];
  //   resizeFile(file).then((base64) => {
  //     setImg(base64 as string);
  //     console.debug("file stored", base64);
  //   });
  // };

  const imageUpload = async (event: any) => {
    try {
      const file = event.target.files[0];
      const image = await resizeFile(file);
      console.log("This is" + image);
      setImg(image as string);
    } catch (err) {
      console.log(err);
    }
  };

  const resizeFile = (file: any) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        100,
        100,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const onSubmit = (data: any) => {
    data["profilePicture"] = img;
    const key = localStorage.length + 1;
    localStorage.setItem(key.toString(), JSON.stringify(data));
    navigate("/", { replace: true });
  };
  return (
    <section className="pt-24 max-w-md mx-auto">
      <h1 className="font-light text-2xl text-gray-500 mb-6">
        Create A Contact
      </h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Ram Setu"
            required
            {...register("name")}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="9654290156"
            required
            {...register("phone")}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="type"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contact Type
          </label>
          <select
            id="type"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 "
            {...register("type")}
          >
            <option>personal</option>
            <option>office</option>
          </select>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="isWhatsapp"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300"
            {...register("isWhatsapp")}
          />
          <label
            htmlFor="isWhatsapp"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            <span className="text-green-500 hover:underline">WhatsApp</span>{" "}
            available.
          </label>
        </div>
        <div className="mb-10">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="profilePicture"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer p-2.5"
            id="profilePicture"
            type="file"
            onChange={imageUpload}
            name="profilePicture"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </Form>
    </section>
  );
};

export default AddContact;
function getBase64(file: any) {
  throw new Error("Function not implemented.");
}
