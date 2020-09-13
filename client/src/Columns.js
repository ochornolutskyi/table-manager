import TextCell from "./components/Main/Table/TableBody/TableRow/TableCell/CellRenderer/TextCell";
import PasswordCell from "./components/Main/Table/TableBody/TableRow/TableCell/CellRenderer/PasswordCell";

export const COLUMNS = [
   { id: 1, name: "Id", renderer: TextCell, key: "id" },
   { id: 2, name: "Name", renderer: TextCell, key: "firstName" },
   { id: 3, name: "Last Name", renderer: TextCell, key: "lastName" },
   { id: 4, name: "Password", renderer: PasswordCell, key: "password" },
   { id: 5, name: "Role", renderer: TextCell, key: "role" },
   { id: 6, name: "Birthday", renderer: TextCell, key: "bDay" },
   { id: 7, name: "Country", renderer: TextCell, key: "country" },
   { id: 8, name: "Phone", renderer: TextCell, key: "phone" },
   { id: 9, name: "E-mail", renderer: TextCell, key: "email" },
];

export const TABLE_TITLE = 'Users Table'

export const DEFAULT_COLUMNS_ID = [1, 2, 3, 4];
