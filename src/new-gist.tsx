import { Form, ActionPanel, Action, open } from "@raycast/api";

type Values = {
  description?: string;
  filename?: string;
  contents?: string;
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
      <Form.Description text="Create a new GitHub Gist using GistPad" />
      <Form.TextField
        id="description"
        title="Description"
        placeholder="Enter gist description (optional)"
      />
      <Form.TextField
        id="filename"
        title="Filename"
        placeholder="Default filename (optional)"
      />
      <Form.TextArea
        id="contents"
        title="Contents"
        
        placeholder="Initial file contents (optional)"
      />
    </Form>
  );
}
