import DoublePage from "../ui/components/doublePage";
import Form from "../ui/components/form";

export default function Page() {
  return (
    <main>
      <DoublePage
        title={
          <p>
            Have a
            <br />
            question?
          </p>
        }
      >
        <Form />
      </DoublePage>
    </main>
  );
}
