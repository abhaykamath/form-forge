import { useOutputSotre } from "@/stores/OutputStore";

const FormData = () => {
  const data = useOutputSotre((state) => state.FormData);

  return (
    <div className="w-full p-4">
      <h3 className="text-2xl font-bold text-center">Form Data</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FormData;
