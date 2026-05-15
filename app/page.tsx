import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <h1 className="text-5xl font-bold text-center text-primary">
        {t("title")}
      </h1>
    </div>
  );
}
