import { open, MenuBarExtra, Icon } from "@raycast/api";

export default function MenuBar() {
  return (
    <MenuBarExtra icon="icon.png" tooltip="GistPad">
      <MenuBarExtra.Section title="Daily notes">
        <MenuBarExtra.Item
          title="Open today's note"
          onAction={() => open("https://gistpad.dev/#/today")}
          icon={Icon.Calendar}
        />
      </MenuBarExtra.Section>
      
      <MenuBarExtra.Section title="Create gist">
        <MenuBarExtra.Item
          title="New gist"
          onAction={() => open("https://gistpad.dev/#/new")}
          icon={Icon.NewDocument}
        />
        <MenuBarExtra.Item
          title="New gist (public)"
          onAction={() => open("https://gistpad.dev/#/new?public=true")}
          icon={Icon.Globe}
        />
      </MenuBarExtra.Section>
    </MenuBarExtra>
  );
}
