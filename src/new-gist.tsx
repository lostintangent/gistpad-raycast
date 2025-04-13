import { Form, ActionPanel, Action, open } from "@raycast/api";

type Values = {
  description?: string;
  filename?: string;
  contents?: string;
  public?: boolean;
};

export default function Command() {
  function handleSubmit(values: Values) {
    let url = "https://gistpad.dev/#/new";
    const params = new URLSearchParams();

    if (values.description) {
      params.append("description", values.description);
    }
    if (values.filename) {
      params.append("filename", values.filename);
    }
    if (values.contents) {
      params.append("contents", values.contents);
    }
    if (values.public) {
      params.append("public", "true");
    }

    const queryString = params.toString();
    if (queryString) {
      url += "?" + queryString;
    }

    open(url);
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.Description text="Create a new GitHub Gist" />
      <Form.TextField
        id="description"
        title="Description"
        placeholder="Gist description (Optional)"
        info='Defaults to "Untitled"'
      />
      <Form.TextField
        id="filename"
        title="Filename"
        placeholder="Filename (Optional)"
        info="Defaults to README.md"
      />
      <Form.TextArea
        id="contents"
        title="Contents"
        placeholder="Initial file contents (Optional)"
      />
      <Form.Checkbox
        id="public"
        label="Public?"
        defaultValue={false}
      />
    </Form>
  );
}
