"use client";

function HelloName() {
  const name = localStorage.getItem("name");

  return (
    <div className="flex flex-col">
      <p className="text-base font-medium text-card-foreground">Hola</p>
      <p className="text-2xl font-semibold text-foreground">{name}</p>
    </div>
  );
}

export default HelloName;
