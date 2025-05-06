import { useOutputSotre } from "@/stores/OutputStore";

const FormData = () => {
  const data = useOutputSotre((state) => state.FormData);

  return (
    <div className="w-full p-4 bg-accent flex flex-col gap-2">
      <h3 className="text-lg text-center font-bold text-primary dark:text-primary-foreground">
        Form Data
      </h3>
      <pre className="text-wrap text-sm">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FormData;
