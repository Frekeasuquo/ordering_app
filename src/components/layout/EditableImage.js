import Image from "next/image";
import toast from "react-hot-toast";

export default function EditableImage({link, setLink}) {
    async function handleFileChange(e) {
        const files = e.target.files;
        if (files?.length > 0) {
            const data = new FormData();
            data.set("file", files[0]);
            //setIsUploading(true);
            const uploadPromise = fetch("/api/upload", {
            method: "POST",
            body: data,
            }).then((response) => {
            if (response.ok) {
                return response.json().then((link) => {
                setLink(link);
                });
                //setIsUploading(false);
            }
            throw new Error("Something went wrong");
            });
    
            await toast.promise(uploadPromise, {
            loading: "Uploading...",
            success: "Uploading Completed...",
            error: "Uploading ...",
            });
        }
    }


    return (
        <>
            {link && (
            <Image
                src={link}
                className="rounded-lg w-full h-full mb-2"
                alt={"avatar"}
                width={250}
                height={250}
            />
            )}
            {!link && (
                <div className="bg-gray-200 text-center p-4 text-gray-500 rounded-lg mb-1">
                    No Image 😞
                </div>
            )}
            <label>
            <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
            />
            <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">
                Edit
            </span>
            </label>
        </>
    )
}
