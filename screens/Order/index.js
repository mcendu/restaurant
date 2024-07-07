import { TableView, Section, Cell } from "react-native-tableview-simple";
import data from "../../data";

function MenuSection({ title, items }) {
  return (
    <Section header={title}>
      {items.map((item) => (
        <Cell title={item.title} />
      ))}
    </Section>
  );
}

export default function order({ route, navigation }) {
  const { items } = route.params;
  return (
    <TableView>
      {items.map((item) => (
        <MenuSection {...item} />
      ))}
    </TableView>
  );
}
