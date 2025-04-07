import { Link } from "react-router";

export default function Navigation() {
  return (
    <>
      <nav>
        <Link to='/generation'>Генерация</Link>
        <Link to='/scan'>Сканирование</Link>
        <Link to='/scanhistory'>История сканирования</Link>
        <Link to='/generationhistory'>История генераций</Link>
      </nav>
    </>
  );
}
