import { useNavigate } from "react-router";
import formTemplates, { Template } from "../../data/templates";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Templates = () => {
  return (
    <>
      {/* Section Header and Description */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-primary">Form Templates</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Browse through the available form templates. Click on any template to
          view more details or to start creating your own form.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Showing {formTemplates.length} template(s).
        </p>
      </header>

      {/* Templates Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {formTemplates.map((template) => (
          <TemplateCard template={template} key={template.id} />
        ))}
      </section>
    </>
  );
};

function TemplateCard({ template }: { template: Template }) {
  const navigte = useNavigate();
  return (
    <Card
      className="cursor-pointer transition select-none active:scale-99 bg-card text-card-foreground border border-muted hover:shadow-lg hover:border-primary"
      onClick={() => {
        navigte(`/app/create/${template.id}`);
      }}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{template.title}</CardTitle>
          <span className="text-2xl text-primary">{template.icon}</span>
        </div>
        <CardDescription className="text-muted-foreground">
          {template.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground space-y-1">
        <div>
          <strong>Category:</strong> {template.category}
        </div>
        <div>
          <strong>Fields:</strong> {template.fieldsIncluded.join(", ")}
        </div>
        <div>
          <strong>Estimated Fields:</strong> {template.estimatedFields}
        </div>
      </CardContent>
    </Card>
  );
}

export default Templates;
