import { Button } from "@/components/ui/button";
import { useSavedForms } from "@/hooks";
import { NavLink, useNavigate } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { T_FormConfig } from "@/db/supabaseFunctions";

const YourForms = () => {
  const { data: forms, isLoading, isError, error } = useSavedForms();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div>
      {forms?.length === 0 && (
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            You haven’t created any forms yet.
          </p>
          <Button asChild>
            <NavLink to="/app/create">🚀 Create Your First Form</NavLink>
          </Button>
        </div>
      )}
      {forms && forms.length > 0 && (
        <>
          {/* Section Header and Description */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-primary">Your Forms</h1>
            <p className="text-sm text-muted-foreground mt-2">
              Here are the forms you've created. Click on one to view, edit, or
              manage it.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Showing {forms.length} form(s).
            </p>
          </header>

          {/* Forms Section */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {forms.map((form) => (
              <YourFormCard form={form} key={form.form_id} />
            ))}
          </section>
        </>
      )}
    </div>
  );
};

function YourFormCard({ form }: { form: T_FormConfig }) {
  const navigate = useNavigate();

  const fieldsIncluded = Array.from(
    new Set(Object.values(form.field_config).map((f) => f.type))
  );
  const estimatedFields = form.field_order.length;

  return (
    <Card
      key={form.form_id}
      className="cursor-pointer transition select-none active:scale-99 bg-card text-card-foreground border border-muted hover:shadow-lg hover:border-primary"
      onClick={() => {
        navigate(`/app/create/${form.form_id}`);
      }}
    >
      <CardHeader>
        <CardTitle>{form.form_name}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {form.form_description || "No description provided."}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground space-y-1">
        <div>
          <strong>Fields:</strong> {fieldsIncluded.join(", ")}
        </div>
        <div>
          <strong>Estimated Fields:</strong> {estimatedFields}
        </div>
        <div>
          <strong>Last Updated:</strong>{" "}
          {new Date(form.updated_at).toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default YourForms;
