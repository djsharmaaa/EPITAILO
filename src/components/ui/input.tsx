
export function Input({ ...props }) {
  return (
    <input
      {...props}
      className="w-full border border-gray-300 dark:border-gray-700 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-100 dark:bg-gray-800 dark:text-white"
    />
  );
}
