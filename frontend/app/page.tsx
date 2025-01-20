export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">
        Welcome to the Weather Dashboard!
      </h1>
      <p className="text-lg text-gray-600 max-w-md">
        Use this app to check current weather conditions and forecasts for any
        city in the world. Start by selecting an option in the menu.
      </p>
    </section>
  );
}
