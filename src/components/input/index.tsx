interface inputProps {
  text: string;
}

export default function Input({ text }: inputProps) {
  return (
    <div>
      <input
        placeholder={text}
        className="h-13.25 w-100 rounded-2xl border border-gray-300 px-5 py-4 outline-none text-gray-600 body2 focus:border-blue-100 placeholder:text-base placeholder:font-semibold placeholder:text-gray-500"
      ></input>
    </div>
  );
}
